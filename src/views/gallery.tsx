import styled, { keyframes } from 'styled-components'
import React, {useEffect, useState, useContext} from'react'
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import CloudUploadOutlinedIcon from '@material-ui/icons/CloudUploadOutlined';
import Context from '../store';
import SnackBar from '../components/snackbar';
import UPLOADMODAL from '../components/uploadModal';
import { ImageData } from '../@types/store';
import { useLayoutEffect } from 'react';
import API_Image from '../api/image';
import BearPreloader from '../components/bearPreloader';
import { IDeletMultiPhotos } from '../@types/image';
import loader from "../assets/images/preloader.gif";

 
export interface GALLERYProps {
    
}
 
const UPLOAD = styled.button`
  
   
&:hover {
      background-color: silver;
    color: #fff;
    transition: .5s all ease-in-out;
    transform: translateY(.2rem)
}
transition: .5s all ease-out;
    color: black;
    font-weight: 400;
    background: white;
     padding: .2rem;
    width: 8rem;
      text-align: center;
     border-radius:.2rem;
    box-shadow: 0rem 0rem 3px .3px #4e4efb78;

`

const FIGURE= styled.figure`

    @media screen and (min-width: 48rem) {

        width: 13rem;

        & img {
            width: 10rem;
            transition: 1.1s all;

        }
    }

    @media screen and (max-width: 48rem) {
        width: 35rem;
     }

    &:hover input {
        display: inline-block;
        transition: 1.5s ease-in-out;
        z-index: 1400;
    }

    &:hover img {
        transform: scale(1.05);
        z-index: -1400;

    }
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
    transition: 1.1s transform display;
    
}
`
const CAPTION = styled.figcaption`

`

const CONTAINER = styled.section`
    background: #e3e0e01a;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;


    `
    
const HEADER= styled.header`
    color: silver;
    display: flex;
    align-items: center;
    width: 100%;
    height: 5rem;
    background: url("http://unblast.com/wp-content/uploads/2019/10/Dark-Shopping-Bag-Mockup-2.jpg") center;
    background-size: cover;
    justify-content: space-between;
    & h1 {
        font-weight: bold;
    }
    
    & section{
        display: flex;
    align-items: center;
    justify-content: space-around;
    width: 20rem;
    padding-top: .5rem;
    }
    
`

const LOADMORE = styled.p`
    text-align: center;
    margin-top: 5rem;
    margin-top: 1.5rem;
    & span {
        padding: .5rem;
        background: #c0c0c02e;
        border-radius: .3rem;
        color: #000000a3;
        cursor: pointer;
    }
`
interface ICheckBox {
    keepShowing: boolean
}

const CHECBOX = styled.input<ICheckBox>`
    position: absolute;
    top: 5%;
    right: 75%;
    display: ${props => props.keepShowing ? 'inline-block' :'none'};
    transition: 1.5s ease-in-out;
    width: 1.22rem;
    height: 1.22rem;
 `
 const fadeIn = keyframes`
    from {
            opacity: 0;
            width: 5.5rem;

        }
        
        to {
            width: 8rem;

            opacity: 1;
    }
 `

const DELETE = styled(UPLOAD)`
 animation: 1s ${fadeIn};
 background-color: #fd961a;

  &:hover {
    background-color: red;
   }
`


interface ICheckList {
    [id:string]: IDeletMultiPhotos
 }
 
const GALLERY: React.FC<GALLERYProps> = () => {
    
    const [imgData, setImgData] = useState<ImageData[]>([])

    const [checkList, setCheckList] = useState<ICheckList>({})
 
    const {state, dispatch} = useContext(Context)

    const [submitting, setSubmitting] = useState<boolean>(false)

    const [message, setMessage] = useState<string>("Loading...")
 
    //update imgData on store changes
     useEffect(() => {
        setImgData(state.imgData!)
    },[state.imgData])

    //get data from API onmoung
     const getImageOnMount = async () => {

        let res = await API_Image.getPhotos(state.skip!, state.limit!)

             if(res.status === "successful") {

                //dispatch data to the store
                 dispatch({
                 type: "ADD_IMAGE_FROM_API",
                 payload: {
                      imgData: res.data
                 }
             })

             //add query params
                dispatch({
                 type: "GET_IMAGE_QUERY",
                 payload: {...res.query}
             })

             setMessage("done")
                 
                dispatch({
                 type: "SnackBar",
                 payload: {
                     snackBarMessage: 'enjoy the pics!',
                     snackBarShow: true,
                     snackBarVariant: "success",
                     snackBarTime: 5000
                 }
             })

              }

              else {
                setMessage("fail")
                dispatch({
                    type: "SnackBar",
                    payload: {
                        snackBarMessage: 'could not fetch images!, pls refresh',
                        snackBarShow: true,
                        snackBarVariant: "error",
                        snackBarTime: 79000
                    }
                })
               }
     }

    useLayoutEffect(() => {
             getImageOnMount()
    }, [])

    const openUpload = ():void => {
        dispatch({
            type: "UPLOAD_MODAL",
            payload: {
              uploadModal: true
            }
          })
    }
  
    const handleCheckBox = (e:React.ChangeEvent<HTMLInputElement>, album:string, FileName:string, id:string):void => {
        if(e.target.checked === true) {
            setCheckList({...checkList, [id]: {album, FileName}})   
                dispatch({
                    type: "GALLERY_DELETE_LIST",
                    payload:{
                        snackBarMessage: "one item has been added",
                        snackBarShow: true,
                        snackBarTime: 3000,
                        snackBarVariant: "info"
                    }
                })
            
         }
         else {

               delete checkList[id];

               setCheckList({...checkList});
               
              dispatch({
                type: "GALLERY_DELETE_LIST",
                payload:{
                    snackBarMessage: "one item removed from list",
                    snackBarShow: true,
                    snackBarTime: 3000,
                    snackBarVariant: "warning"
                }
            })
         }
    }

    const handleLoadMoreImages = ():void => {
            getImageOnMount()
    }

    const handleDeletePhoto = async () => {
        
             setSubmitting(true);

             let res = Object.values(checkList).length > 1 ? 
              await API_Image.deleteMultiPhoto(Object.values(checkList).map(list => {list["documents"] = list.FileName; return {album: list.album, documents: list.documents}})) 
             : 
              await API_Image.deleteSinglePhoto(Object.values(checkList)[0])

             if(res.status === "successful") {

                    dispatch({
                        type: "SnackBar",
                        payload: {
                            snackBarMessage: 'image(s) deleted',
                            snackBarShow: true,
                            snackBarVariant: "success",
                            snackBarTime: 7000
                        }
                    })

                    

                    setSubmitting(false)

                    setCheckList({})
 
                    dispatch({
                        type: "DELTE_IMAGE_BY_FILENAME",
                        payload: {
                             name: Object.values(checkList).map(list => list.FileName!)
                        }
                    })
             }

             else {

                setSubmitting(false)

                dispatch({
                    type: "SnackBar",
                    payload: {
                        snackBarMessage: 'could not delete image(s), pls retry',
                        snackBarShow: true,
                        snackBarVariant: "error",
                        snackBarTime: 7000
                    }
                })
             }
        }
  
    return message === "Loading" ? 

    <BearPreloader message={message} /> : 

    message === "fail" ?

            <>
                <SnackBar />
                <BearPreloader message={"could not fetch images"} />
            </>
      : 
 
        <>

         <SnackBar />
        <UPLOADMODAL />

        <HEADER className="px-12 pl-20 mb-4">
            <h1>Photos</h1>
         <section>
                <DELETE  
                onClick={handleDeletePhoto} 
                style={Object.values(checkList).length < 1 ? {display: 'none'} : {color:'white', alignItems:'center', justifyContent:'center'}} 
             className={`shadow-xl flex justify-center items-center ${submitting ? 'opacity-50 cursor-not-allowed': 'opacity-100'}`}
                  disabled={submitting ? true : false}>


                        <img 
                        src={loader} 
                        alt="submitting form"
                         className="w-1 h-1 mx-2"
                        style={submitting ? {display:'inline-block', width:'1rem', height:'1rem'} : {display: 'none'}} /> 

                     <DeleteOutlinedIcon />
                  delete {Object.values(checkList).length} 
                 </DELETE>
                <UPLOAD onClick={openUpload}>
                  <CloudUploadOutlinedIcon />upload</UPLOAD>
                <span> {" | "} </span>
                <span> {imgData.length} </span>
            </section>
        </HEADER>

        <h2 className="text-center mt-4">Gallery</h2>

        <CONTAINER className="px-2 md:px-4 mt-24">
            {
               imgData.length > 0 ? imgData.map((data, i) => <FIGURE className="relative" key={i}>
                    <CHECBOX 
                    keepShowing={Object.keys(checkList).includes(data.id!) ? true : false} 
                    type="checkbox" 
                    name={data.id} 
                    onChange={(e) => handleCheckBox(e, data.album, data.name, data.id!)} />
                        <a href={`${process.env.REACT_APP_BASE_URL}/${data.album}/${data.name}`}>
                            <img className="rounded" src={data.raw} alt={data.name} />
                        </a>

                    <CAPTION>
                       <b className="text-xs">{data.name}</b> 
                       <p className="text-center text-sm">{data.album}</p> 
                    </CAPTION>
                </FIGURE>
                ) : ''
            }

            
        </CONTAINER>

            <LOADMORE  onClick={handleLoadMoreImages}><span>load more</span> </LOADMORE>


        </>
     
}
 
export default GALLERY;
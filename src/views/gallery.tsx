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
import loader from "../assets/images/preloader.gif";
import { GALLERYProps, ICheckList } from '../@types/gallery';
import { LOADMORE, CAPTION, FIGURE, CONTAINER, HEADER, DELETE, UPLOAD, CHECBOX} from '../components/styledComponents/gallery.style';
 
 
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
         
             getImageOnMount() // eslint-disable-next-line react-hooks/exhaustive-deps
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
                        <a 
                        target="_blank" 
                        rel="noreferrer" 
                        href={`${process.env.REACT_APP_BASE_URL}/${data.album}/${data.name}`}>
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
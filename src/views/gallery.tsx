import styled, { keyframes } from 'styled-components'
import React, {useEffect, useState, useContext} from'react'
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import CloudUploadOutlinedIcon from '@material-ui/icons/CloudUploadOutlined';
import Context from '../store';
import SnackBar from '../components/snackbar';
import UPLOADMODAL from '../components/uploadModal';
 
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

  &:hover {
    background-color: red;

  }
`
 
const GALLERY: React.FC<GALLERYProps> = () => {
    
    const [imgData, setImgData] = useState(Array(25).fill([]).map((val, i) =>( {
        "id": "f4d11f680804c766edbb1f83867b3f34" + i,
        "album": "Food",
        "name": "food-1932466_1280.jpg",
        "path": "/albums/Food/food-1932466_1280.jpg",
        "raw": "https://wallpaperaccess.com/full/1624848.jpg"
    })))

    const [checkList, setCheckList] = useState<string[]>([])

    const {state, dispatch} = useContext(Context)

    const openUpload = () => {
        dispatch({
            type: "UPLOAD_MODAL",
            payload: {
              uploadModal: true
            }
          })
    }

     
 
    const handleCheckBox = (e:React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.checked === true) {
            setCheckList([...checkList, e.target.name])   
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
             let newCheckList = checkList;
             newCheckList.splice(checkList.indexOf(e.target.name), 1)
              setCheckList([...newCheckList])
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

    

    return ( 
        <>

        <SnackBar />
        <UPLOADMODAL />

        <HEADER className="px-12 pl-20 mb-4">
            <h1>Photos</h1>
         <section>
                <DELETE style={checkList.length < 1 ? {display: 'none'} : {display: 'inline-block'}}> <DeleteOutlinedIcon 
                 />
                  delete {checkList.length} 
                 </DELETE>
                <UPLOAD onClick={openUpload}>
                  <CloudUploadOutlinedIcon /> upload</UPLOAD>
                <span> {" | "} </span>
                <span> {imgData.length} </span>
            </section>
        </HEADER>

        <h2 className="text-center mt-4">Gallery</h2>

        <CONTAINER className="px-2 md:px-4 mt-24">
            {
                imgData.map((data, i) => <FIGURE className="relative" key={i}>
                    <CHECBOX 
                    keepShowing={checkList.includes(data.id) ? true : false} 
                    type="checkbox" 
                    name={data.id} 
                    onChange={handleCheckBox} />
                    <img className="rounded" src={data.raw} alt={data.name} />
                    <CAPTION>
                       <b className="text-xs">{data.name}</b> 
                      <p className="text-center text-sm">{data.album}</p> 
                    </CAPTION>
                </FIGURE>
                )
            }
            
        </CONTAINER>


        </>
     );
}
 
export default GALLERY;
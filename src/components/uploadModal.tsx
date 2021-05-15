import React, { useContext, useEffect, useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Context from '../store';
import ClearRoundedIcon from '@material-ui/icons/ClearRounded';
import loader from "../assets/images/preloader.gif";
import SnackBar from './snackbar';
import API_Image from '../api/image';
import { WRAPPER, UPLOADAREA } from './styledComponents/modal.style';
   
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      outline: 'none'
    },
    paper: {
       border: 'none',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      outline: 'none',
    },
  }),
);





export interface UPLOADMODALProps {
    
  }
 
const UPLOADMODAL: React.FC<UPLOADMODALProps> = () => {

    const classes = useStyles();
    const {state, dispatch} = useContext(Context)
    const [open, setOpen] = React.useState(false);
    const [submitting, setSubmitting] = useState<boolean>(false)
    //valid image files state
    const[validFiles, setValidFiles] = useState<File[]>([])

    //set album here

    const [albumCategory, setAlbumCategory] = useState<string>('choose an album cateogry')


    const handleClose = () => {

      dispatch({
        type: "UPLOAD_MODAL",
        payload: {
            uploadModal: false
        }
      }) 
    
  };

  useEffect(() => {
    setOpen(state.uploadModal!)
}, [state.uploadModal])
     

  
    const handleUploadImage = async () => {

        if(albumCategory !== 'choose an album cateogry' && validFiles.length > 0) {
          setSubmitting(true)

          
               let res = await API_Image.uploadPhoto({files: validFiles, album: albumCategory})

               if(res.status === "successful") {
                 //dispatch data to the store

                 dispatch({
                  type: "ADD_IMAGE_FROM_API",
                  payload: {
                       imgData: res.data
                  }
              })
                  

                 //close the modal
                 handleClose()

                 dispatch({
                  type: "SnackBar",
                  payload: {
                      snackBarMessage: 'image uploaded successful',
                      snackBarShow: true,
                      snackBarVariant: "success",
                      snackBarTime: 7000
                  }
              })

               }

               else {
                dispatch({
                  type: "SnackBar",
                  payload: {
                      snackBarMessage: 'image uploaded aborted',
                      snackBarShow: true,
                      snackBarVariant: "error",
                      snackBarTime: 7000
                  }
              })

              setSubmitting(false)
               }
          
        }

        else {
             dispatch({
              type: "SnackBar",
              payload: {
                  snackBarMessage: 'ensure you upload an image and choose a category to continue',
                  snackBarShow: true,
                  snackBarVariant: "warning",
                  snackBarTime: 7000
              }
          })
         }
  }
 
    //validate files at dropzone
    const validateFile = (files: FileList) => {
      let fileArry:File[] = []

      Array.from(files).forEach(file => {
        console.log('file', file)
        const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/x-icon'];
        if (validTypes.indexOf(file.type) === -1) {
            //save in store and dispatch action that XYZ obj is wrong type
            dispatch({
              type: "DRAG_DROP_AREA",
              payload:{
                  snackBarMessage: "file seems not be an image",
                  snackBarShow: true,
                  snackBarTime: 4500,
                  snackBarVariant: "error"
              }
          })

        }
        else {
          //save in state
          fileArry.push(file)
          dispatch({
            type: "DRAG_DROP_AREA",
            payload:{
                snackBarMessage: "nice pics!, choose an albom categorty and upload ",
                snackBarShow: true,
                snackBarTime: 4500,
                snackBarVariant: "success"
            }
        })

        }
      })
      
      setValidFiles([...fileArry])


   }
 
    //drag handlers goes here
    const dragOver = (e:React.DragEvent) => {
      e.preventDefault();
      dispatch({
        type: "DRAG_DROP_AREA",
        payload:{
            snackBarMessage: "great job! just drop the image",
            snackBarShow: true,
            snackBarTime: 3000,
            snackBarVariant: "info"
        }
    })
    }
    const fileDrop = (e:React.DragEvent) => {
      e.preventDefault();
      const files = e.dataTransfer.files;
      //validate file
      validateFile(files)
    }

   
   return (
     <>
        
        <SnackBar />

        <div>

            
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>

              <WRAPPER className={classes.paper}>
                       
                  <article className="flex flex-col"> 

                 <h2 id="transition-modal-title font-bold w-100 flex items-center justify-evenly" style={{fontWeight:'bolder'}}>Upload Image <span><ClearRoundedIcon onClick={handleClose} style={{color: "#6b010152", cursor:'pointer'}}/></span></h2>
                 <p>Drag and drop an  image</p>

                 <UPLOADAREA  
                   onDragOver={dragOver}
                   onDrop={fileDrop}
                  imageReady={validFiles.length}>
                     {
                      validFiles.length > 0 ? validFiles.map((file, i) => 
                        <img src={URL.createObjectURL(file)} key={i} className="h-20 w-20" alt={""} />
                        ) : ''
                    }
 
                 </UPLOADAREA>
                 

                <section style={{display:'flex', flexDirection:'column'}}>

                <select style={{padding:'.25rem', borderRadius:'.3rem'}} onChange={e => setAlbumCategory(e.target.value)}>
                    {

                  ['choose an album cateogry','Travel', 'Personal', 'Food', 'Nature', 'Other'].map((album, k) => <option value={album} key={k}>{album}</option>)  
                    }
                </select>

                <button 
                
                style={{color:'white', background:'#fd961a', alignItems:'center', justifyContent:'center'}} className={` shadow-xl flex justify-center items-center ${submitting ? 'opacity-50 cursor-not-allowed': 'opacity-100'}`}
                 onClick={handleUploadImage}                       
                 disabled={submitting ? true : false}>
                        <img 
                        src={loader} 
                        alt="submitting form"
                         className="w-1 h-1 mx-2"
                        style={submitting ? {display:'inline-block', width:'1rem', height:'1rem'} : {display: 'none'}} /> 
                  continue
                  </button>


                </section>

                </article>
                    
                       
                </WRAPPER>
            </Fade>
          </Modal>
        </div>
     </>
      );
}
 
export default UPLOADMODAL
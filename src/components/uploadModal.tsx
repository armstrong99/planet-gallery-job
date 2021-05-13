import React, { useContext, useEffect, useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Context from '../store';
import styled from 'styled-components'
import ClearRoundedIcon from '@material-ui/icons/ClearRounded';
import loader from "../assets/images/preloader.gif";
  
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

const WRAPPER = styled.div`
    height: auto;
    background: #f3f3f3;
    border-radius: .45rem;
    overflow: hidden;
    & section {
        height: 11rem;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: column;
        margin-top: 1.5rem;   
        & button {
            background: white;
            padding: .5rem;
            border-radius: .45rem;
            font-weight: 500;
            outline: none;
            border: none;
        }
        & button:nth-child(2) {
            width: 17rem;
            display: flex;
            align-items: center;
            justify-content: space-around;
            & img {
                width: 10rem;
                height: 2.5rem;
            }
        }
        // & button:first-child {
        //     border: #fd961a .001px solid
        // }
     }
     & h2 {
         color: #fd961a;
         display: flex;
         justify-content: space-between;
         align-items: center;
     }
     & p {
         margin-top: 1.2rem;
     }
  @media screen and (min-width:48rem) {
      width: calc(100% - 50.5rem);
  }
   @media screen and (max-width: 48rem) {
    width: calc(100% - 1.5rem);
   
   }
`
export interface UPLOADMODALProps {
    
  }
 
const UPLOADMODAL: React.FC<UPLOADMODALProps> = () => {

    const classes = useStyles();
    const {state, dispatch} = useContext(Context)
    const [open, setOpen] = React.useState(false);
    const [submitting, setSubmitting] = useState<boolean>(false)


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
     
    const handleRestoreAct = async () => {

     setSubmitting(true)
 
  

        setSubmitting(false)

        

    

      dispatch({
        type: "SnackBar",
        payload: {
            snackBarMessage: 'message',
            snackBarShow: true,
            snackBarVariant: "success",
            snackBarTime: 7000
        }
     })

      

  

        setSubmitting(false)
 

        dispatch({
          type: "SnackBar",
          payload: {
              snackBarMessage: 'message',
              snackBarShow: true,
              snackBarVariant: "error",
              snackBarTime: 7000
          }
      })
      




    }
   
   return (

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
                 

                <section>

                <select>
                    {

                  ['choose an album cateogry','Travel', 'Personal', 'Food', 'Nature', 'Other'].map((album, k) => <option value={album} key={k}>{album}</option>)  
                    }
                </select>

                <button 
                
                style={{color:'white', background:'limegreen', alignItems:'center', justifyContent:'center'}} className={` shadow-xl flex justify-center items-center ${submitting ? 'opacity-50 cursor-not-allowed': 'opacity-100'}`}
                 onClick={handleRestoreAct}                       
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
      );
}
 
export default UPLOADMODAL
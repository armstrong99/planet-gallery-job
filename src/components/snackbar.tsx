import React, {useContext} from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Context from '../store';

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

interface ISnackBar {
     
}

const SnackBar: React.FC<ISnackBar> = () => {
  const classes = useStyles();
  
  // let {snackBarShow, snackBarMessage} = useContext(Context).state
  let {dispatch, state} = useContext(Context)
  

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    dispatch({
      type: "SnackBar",
      payload: {
        snackBarMessage: "",
        snackBarShow: false,
        snackBarTime: 3000,
        snackBarVariant: state.snackBarVariant
      }
    })
    if (reason === 'clickaway') {
      return;
    }

     
  };

  return (
    <div className={classes.root}>
       
      <Snackbar open={state.snackBarShow} autoHideDuration={state.snackBarTime} onClose={handleClose}>
        {
          state.snackBarVariant === "warning" ?
          <Alert onClose={handleClose} severity="warning">
          {state.snackBarMessage}
          </Alert>
          : 
          state.snackBarVariant === "success" ?
          <Alert onClose={handleClose} severity="success">
          {state.snackBarMessage}
          </Alert>
          :
          state.snackBarVariant === "error" ? 
           <Alert onClose={handleClose} severity="error">
          {state.snackBarMessage}
          </Alert>
          :
           <Alert onClose={handleClose} severity="info">
          {state.snackBarMessage}
          </Alert>
        }
     </Snackbar>
     </div>
  );
}

export default SnackBar
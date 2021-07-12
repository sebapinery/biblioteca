import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { setAlert } from '../redux/actions/alertActions';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function AlertCustom(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const alertOpen = useSelector(state => state.alert.alertOpen);
  const alertType = useSelector(state => state.alert.alertType);
  const alertMessage = useSelector(state => state.alert.alertMessage);

  // const {alertOpen, alertType, alertMessage } = useSelector(state => state.alert);
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
     dispatch(setAlert(false, alertType, alertMessage))
  };


  return (
    <div className={classes.root}>
      <Snackbar 
            open={alertOpen} 
            autoHideDuration={3000} 
            onClose={handleClose}
            // anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
        <Alert 
              onClose={handleClose} 
              severity={alertType}>
          {alertMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}

import {
  SET_ALERT,
} from '../contants';

export const setAlert = (alertOpen, alertType = "success", alertMessage) => (dispatch) => {
  dispatch({
    type: SET_ALERT,
    alertOpen,
    alertType,
    alertMessage
  })

  };

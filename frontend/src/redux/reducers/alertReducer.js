import {
  SET_ALERT,
} from '../contants';

const initialState = {
  alertOpen: false,
  alertType: 'success',
  alertMessage: '',
};

export const alertReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALERT:
        const { alertOpen, alertType, alertMessage } = action;
      return {
        ...state,
        alertOpen,
        alertType,
        alertMessage
      };
    default:
      return state;
  }
};

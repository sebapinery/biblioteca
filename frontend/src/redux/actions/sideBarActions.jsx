import { GET_ITEMS } from '../contants';

export const getSideBarItems = (dispatch) => {
  dispatch({
    type: GET_ITEMS,
    payload: false
  });
};

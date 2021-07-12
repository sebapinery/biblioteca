import axios from 'axios';
import {
  GET_SEARCH_REQUEST,
  GET_SEARCH_SUCCESS,
  GET_SEARCH_FAIL,
} from '../contants';
import { setAlert } from './alertActions';

export const search = (searchParam, searchType) => async (dispatch) => {
  dispatch({ type: GET_SEARCH_REQUEST });
  try {
    const { data } = await axios.get('/search', {
      params: {
        [searchType]: searchParam,
      },
    });
    dispatch({ type: GET_SEARCH_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_SEARCH_FAIL,
      error:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    dispatch(setAlert(true, 'error', error.message));
  }
};

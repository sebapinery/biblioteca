import axios from 'axios';
import { setAlert } from './alertActions';
import {
  GET_BOOKS_REQUEST,
  GET_BOOKS_SUCCESS,
  GET_BOOKS_FAIL,
  CREATE_BOOKS_REQUEST,
  CREATE_BOOKS_SUCCESS,
  CREATE_BOOKS_FAIL,
} from '../contants';

export const createNewBook = () => async (dispatch) => {
  dispatch({ type: CREATE_BOOKS_REQUEST });
  try {
    const { data } = await axios.post('/books', {
      ///////////////////////////////////
      /// BODY DE LA REQ DEL NEW BOOK ///
      ///////////////////////////////////
    });
    dispatch({ type: CREATE_BOOKS_SUCCESS, payload: data });
    dispatch(setAlert(true, 'success', "El libro se creo con exito"));
  
  } catch (error) {
    dispatch({ 
      type: CREATE_BOOKS_FAIL, 
      error: error.response && error.response.data.message
        ? error.response.data.message
        : error.message, 
      });
    dispatch(setAlert(true, 'error', error.message));
  }
};

export const getAllBooks = () => async (dispatch) => {
  dispatch({ type: GET_BOOKS_REQUEST });
  try {
    const { data } = await axios.get('/books');
    dispatch({ type: GET_BOOKS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ 
      type: GET_BOOKS_FAIL, 
      error: error.response && error.response.data.message
      ? error.response.data.message
      : error.message,  });
    dispatch(setAlert(true, 'error', error.message));
  }
};

import axios from 'axios';
import { setAlert } from './alertActions';
import {
  // GET_BOOKS_REQUEST,
  CREATE_CATEGORY_REQUEST,
  CREATE_CATEGORY_SUCCESS,
  CREATE_CATEGORY_FAIL,
  GET_CATEGORIES_REQUEST,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_ERROR
} from '../contants';

export const createNewCategory = () => async (dispatch) => {
  dispatch({ type: CREATE_CATEGORY_REQUEST });
  try {
    const { data } = await axios.post('/categories', {
      ///////////////////////////////////////
      /// BODY DE LA REQ DEL NEW CATEGORY ///
      ///////////////////////////////////////
    });
    dispatch({ type: CREATE_CATEGORY_SUCCESS, payload: data });
    dispatch(setAlert(true, 'success', "La categoria se creo con exito!"));
  } catch (error) {
    dispatch({ 
      type: CREATE_CATEGORY_FAIL, 
      error: error.response && error.response.data.message
      ? error.response.data.message
      : error.message,  });
    dispatch(setAlert(true, 'error', error.message));
  }
};

export const getAllCategories = () => async (dispatch) => {
  dispatch({ type: GET_CATEGORIES_REQUEST });
  try {
    const { data } = await axios.get('/categories');
    dispatch({ type: GET_CATEGORIES_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ 
      type: GET_CATEGORIES_ERROR, 
      error: error.response && error.response.data.message
      ? error.response.data.message
      : error.message,  
    });
    dispatch(setAlert(true, 'error', error.message));
  }
};

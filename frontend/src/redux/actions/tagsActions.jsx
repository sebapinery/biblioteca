import axios from 'axios';
import { setAlert } from './alertActions';
import {
  GET_TAGS_REQUEST,
  GET_TAGS_SUCCESS,
  GET_TAGS_FAIL,
  CREATE_TAGS_REQUEST,
  CREATE_TAGS_SUCCESS,
  CREATE_TAGS_FAIL,
} from '../contants';

export const createNewTag = () => async (dispatch) => {
  dispatch({ type: CREATE_TAGS_REQUEST });
  try {
    const { data } = await axios.post('/tags', {
      //////////////////////////////////
      /// BODY DE LA REQ DEL NEW TAG ///
      //////////////////////////////////
    });
    dispatch({ type: CREATE_TAGS_SUCCESS, payload: data });
    dispatch(setAlert(true, 'success', "La etiqueta se creo con exito"));
  
  } catch (error) {
    dispatch({ 
      type: CREATE_TAGS_FAIL, 
      error: error.response && error.response.data.message
      ? error.response.data.message
      : error.message  });
    dispatch(setAlert(true, 'error', error.message));
  }
};

export const getAllTags = () => async (dispatch) => {
  dispatch({ type: GET_TAGS_REQUEST });
  try {
    const { data } = await axios.get('/tags');
    dispatch({ type: GET_TAGS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ 
      type: GET_TAGS_FAIL, 
      error: error.response && error.response.data.message
      ? error.response.data.message
      : error.message  });
    dispatch(setAlert(true, 'error', error.message));
  }
};

import axios from 'axios';
import {
  CREATE_AUTHORS_REQUEST,
  CREATE_AUTHORS_SUCCESS,
  CREATE_AUTHORS_FAIL,
  GET_AUTHORS_REQUEST,
  GET_AUTHORS_SUCCESS,
  GET_AUTHORS_FAIL,
} from '../contants';
import { setAlert } from './alertActions';

export const createNewAuthor =
  (authorName, country, dateOfBirth, dateOfDeath) => async (dispatch) => {
    dispatch({ type: CREATE_AUTHORS_REQUEST });
    try {
      const { data } = await axios.post('/authors', {
        name: authorName,
        country,
        dateOfBirth,
        dateOfDeath,
      });
      dispatch({ type: CREATE_AUTHORS_SUCCESS, payload: data });
      dispatch(setAlert(true, 'success', 'El autor fue creado correctamente'));
    } catch (error) {
      dispatch({
        type: CREATE_AUTHORS_FAIL,
        error:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
      dispatch(setAlert(true, 'error', error.message));
    }
  };

export const getAllAuthors = () => async (dispatch) => {
  dispatch({ type: GET_AUTHORS_REQUEST });
  try {
    const { data } = await axios.get('/authors');
    dispatch({ type: GET_AUTHORS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_AUTHORS_FAIL,
      error:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    dispatch(setAlert(true, 'error', error.message));
  }
};

import axios from 'axios';
import {
  GET_COUNTRIES_FAIL,
  GET_COUNTRIES_REQUEST,
  GET_COUNTRIES_SUCCESS,
} from '../contants';


export const getCountriesAction = async (dispatch) => {
  dispatch({ type: GET_COUNTRIES_REQUEST });
  try {
    const { data } = await axios.get('https://restcountries.eu/rest/v2/all');
    dispatch({ type: GET_COUNTRIES_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ 
      type: GET_COUNTRIES_FAIL, 
      error: error.response && error.response.data.message
      ? error.response.data.message
      : error.message 
    })
  }
};

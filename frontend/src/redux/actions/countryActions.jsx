import {
  GET_COUNTRIES_FAIL,
  GET_COUNTRIES_REQUEST,
  GET_COUNTRIES_SUCCESS,
} from '../contants';

import axios from 'axios';

export const getCountriesAction = async (dispatch) => {
  dispatch({ type: GET_COUNTRIES_REQUEST });

  await axios
    .get('https://restcountries.eu/rest/v2/all')
    .then((res) => dispatch({ 
      type: GET_COUNTRIES_SUCCESS, 
      payload: res.data 
    }))
    .catch((error) =>
      dispatch({ 
        type: GET_COUNTRIES_FAIL, 
        payload: error.message 
      })
    );
};

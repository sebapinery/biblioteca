import { GET_COUNTRIES_FAIL, GET_COUNTRIES_REQUEST, GET_COUNTRIES_SUCCESS } from '../contants';

const initialState = {
    loading: false,
    list: []
}

export const contriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES_REQUEST:
      return {
       ...state,
       loading: true 
      };
      case GET_COUNTRIES_SUCCESS:
      return {
       ...state,
       list: action.payload,
       loading: false 
      };
      case GET_COUNTRIES_FAIL:
        return {
            ...state,
            countries: action.payload
        }
    default:
      return state;
  }
};

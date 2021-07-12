import {
  GET_SEARCH_REQUEST,
  GET_SEARCH_SUCCESS,
  GET_SEARCH_FAIL,
} from '../contants';

const initialState = {
  loading: false,
  searchResult: [],
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SEARCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        searchResult: action.payload,
      };
    case GET_SEARCH_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

import {
  CREATE_AUTHORS_REQUEST,
  CREATE_AUTHORS_SUCCESS,
  CREATE_AUTHORS_FAIL,
  GET_AUTHORS_REQUEST,
  GET_AUTHORS_SUCCESS,
  GET_AUTHORS_FAIL,
} from '../contants';

const initialState = {
  loading: false,
  allAuthors: [],
};

export const authorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_AUTHORS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_AUTHORS_SUCCESS:
      return {
        ...state,
        success: true,
        loading: false,
        newAuthor: action.payload,
      };
    case CREATE_AUTHORS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_AUTHORS_REQUEST:
      return {
        ...state,
        loading: true,
        allAuthors: [],
        
      };
    case GET_AUTHORS_SUCCESS:
      return {
        ...state,
        loading: false,
        allAuthors: action.payload,
      };
    case GET_AUTHORS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

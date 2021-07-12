import {
  GET_BOOKS_REQUEST,
  GET_BOOKS_SUCCESS,
  GET_BOOKS_FAIL,
  CREATE_BOOKS_REQUEST,
  CREATE_BOOKS_SUCCESS,
  CREATE_BOOKS_FAIL,
} from '../contants';

const initialState = {
  loading: false,
  allBooks: [],
};

export const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_BOOKS_SUCCESS:
      return {
        ...state,
        loading: false,
        allBooks: action.payload,
      };
    case GET_BOOKS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CREATE_BOOKS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_BOOKS_SUCCESS:
      return {
        ...state,
        loading: false,
        newBook: action.payload,
      };
    case CREATE_BOOKS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

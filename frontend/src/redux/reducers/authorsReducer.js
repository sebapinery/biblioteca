import {
    CREATE_AUTHORS_REQUEST,
    CREATE_AUTHORS_SUCCESS,
    CREATE_AUTHORS_FAIL
} from '../contants';

const initialState = {
  loading: false,
//   list: [],
};

export const authorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_AUTHORS_REQUEST:
      return {
        loading: true,
      };
    case CREATE_AUTHORS_SUCCESS:
      return {
        success: true,
        loading: false,
        newAuthor: action.payload
      };
    case CREATE_AUTHORS_FAIL:
      return {
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

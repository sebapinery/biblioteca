import {
  GET_TAGS_REQUEST,
  GET_TAGS_SUCCESS,
  GET_TAGS_FAIL,
  CREATE_TAGS_REQUEST,
  CREATE_TAGS_SUCCESS,
  CREATE_TAGS_FAIL,
} from '../contants';

const initialState = {
  loading: false,
  allTags: [],
};

export const tagsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TAGS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_TAGS_SUCCESS:
      return {
        ...state,
        loading: false,
        allTags: action.payload,
      };
    case GET_TAGS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CREATE_TAGS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_TAGS_SUCCESS:
      return {
        ...state,
        loading: false,
        newTag: action.payload,
      };
    case CREATE_TAGS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

import { configureStore } from '@reduxjs/toolkit';
import { sideBarReducer } from './reducers/sideBarReducer';
import { contriesReducer } from './reducers/countryReducer';
import { authorsReducer } from './reducers/authorsReducer';

export default configureStore({
  reducer: {
    sideBar: sideBarReducer,
    countries: contriesReducer,
    authors: authorsReducer
  },
});

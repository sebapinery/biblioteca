import { configureStore } from '@reduxjs/toolkit';
import { sideBarReducer } from './reducers/sideBarReducer';
import { contriesReducer } from './reducers/countryReducer';

export default configureStore({
  reducer: {
    sideBar: sideBarReducer,
    countries: contriesReducer
  },
});

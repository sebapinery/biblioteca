import { configureStore } from '@reduxjs/toolkit';
import { sideBarReducer } from './reducers/sideBarReducer';
import { contriesReducer } from './reducers/countryReducer';
import { authorsReducer } from './reducers/authorsReducer';
import { alertReducer } from './reducers/alertReducer';

export default configureStore({
  reducer: {
    sideBar: sideBarReducer,
    countries: contriesReducer,
    authors: authorsReducer,
    alert: alertReducer,
  },
});

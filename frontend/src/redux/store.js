import { configureStore } from '@reduxjs/toolkit';
import { sideBarReducer } from './reducers/sideBarReducer';

export default configureStore({
  reducer: {
    sideBar: sideBarReducer,
  },
});

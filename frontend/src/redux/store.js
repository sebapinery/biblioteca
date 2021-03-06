import { configureStore } from '@reduxjs/toolkit';
import { sideBarReducer } from './reducers/sideBarReducer';
import { contriesReducer } from './reducers/countryReducer';
import { authorsReducer } from './reducers/authorsReducer';
import { alertReducer } from './reducers/alertReducer';
import { booksReducer } from './reducers/booksReducer';
import { categoriesReducer } from './reducers/categoriesReducer';
import { tagsReducer } from './reducers/tagsReducer';
import { searchReducer } from './reducers/searchReducer';

export default configureStore({
  reducer: {
    sideBar: sideBarReducer,
    alert: alertReducer,
    countries: contriesReducer,
    authors: authorsReducer,
    books: booksReducer,
    categories: categoriesReducer,
    tags: tagsReducer,
    search: searchReducer
  },
});
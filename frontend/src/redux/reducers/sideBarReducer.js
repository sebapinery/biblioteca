//import * as Icon from '@material-ui/icons';

import { GET_ITEMS } from '../contants';

const initialState = {
  items: [
    {
      title: 'Home',
      path: '/',
      class: 'nav-text',
    },
    {
      title: 'Nuevo autor',
      path: '/newauthor',
      class: 'nav-text',
    },
    {
      title: 'Nuevo libro',
      path: '/newbook',
      class: 'nav-text',
    },
    {
      title: 'Autores',
      path: '/authors',
      class: 'nav-text',
    },
    {
      title: 'Configuracion',
      path: '/settings',
      class: 'nav-text',
    },
    {
      title: 'Salir',
      path: '/exit',
      class: 'nav-text',
    },
  ],
  loading: true
};

export const sideBarReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        loading: action.payload
      };
    default:
      return state;
  }
};

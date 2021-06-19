//import * as Icon from '@material-ui/icons';

import { GET_ITEMS } from '../contants';

const initialState = {
  items: [
    {
      title: 'Home',
      path: '/',
      icon: 'Home',
      class: 'nav-text',
    },
    {
      title: 'Libros',
      path: '/books',
      icon: 'MenuBook',
      class: 'nav-text',
    },
    {
      title: 'Configuracion',
      path: '/settings',
      icon: 'Settings',
      class: 'nav-text',
    },
    {
      title: 'Salir',
      path: '/exit',
      icon: 'ExitToApp',
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

import React from 'react';
import ReactDOM from 'react-dom';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import 'fontsource-roboto';
import "moment/locale/es";

// REDUX
import { Provider } from 'react-redux';
import store from './redux/store';

import App from './App';


ReactDOM.render(
  <MuiPickersUtilsProvider utils={MomentUtils} locale={'es_AR'}>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiPickersUtilsProvider>,
  document.getElementById('root')
);

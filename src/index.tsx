import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from 'config/store';
import MainRoute from 'routes/Main/Main';
import 'scss/main.scss';

render(
  <Provider store={store}>
    <BrowserRouter>
      <MainRoute />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
);

// for hot reloading
if (module.hot) module.hot.accept();

import React from 'react';
import ReactDOM from 'react-dom';
import AppLayout from './screens/AppLayout';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom';
import store from "./redux"


import './style/main.scss';
import 'antd/dist/antd.css'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <AppLayout />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import App from './pages/App.jsx';

axios.interceptors.request.use(
  request => {
    console.log(request);
    return request;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  },
);
axios.interceptors.response.use(
  response => {
    console.log(response);
    return response;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  },
);

ReactDOM.render(<App />, document.getElementById('app'));

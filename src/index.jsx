import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import App from './pages/App.jsx';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

axios.interceptors.request.use(
  request => request,
  error => {
    console.log(error);
    return Promise.reject(error);
  },
);
axios.interceptors.response.use(
  response => response,
  error => {
    console.log(error);
    return Promise.reject(error);
  },
);

ReactDOM.render(<App />, document.getElementById('app'));

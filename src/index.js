import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import "../node_modules/bootstrap/dist/css/bootstrap.css"
import {BrowserRouter} from 'react-router-dom'
// const root = ReactDOM.createRoot(document.getElementById('root'));
ReactDOM.render(
  // <BrowserRouter>
    <App />,
  // </BrowserRouter>
  document.getElementById('root')
);

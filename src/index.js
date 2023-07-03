import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router/router';
import { RouterProvider } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);


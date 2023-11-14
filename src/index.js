import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router/router';
import { RouterProvider } from 'react-router-dom';
import {AuthProvider} from "./AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <AuthProvider>
          <Router />
      </AuthProvider>
  </React.StrictMode>
);


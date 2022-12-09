import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider as AuthProvider } from './context/authContext'
import { Provider as BlogProvider } from './context/blogContext'
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <BlogProvider>
      <App />
    </BlogProvider>
  </AuthProvider>
);

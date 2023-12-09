import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import '../public/font-all/stylesheet.css';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes.jsx';

const theme = createTheme({
  typography: {
    fontFamily: `'Alliance No.1', sans-serif`,
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);

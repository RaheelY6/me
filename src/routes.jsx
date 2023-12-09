import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Resume from './views/Resume/Resume';
import Portfolio from './views/Portfolio/Portfolio';

export const router = createBrowserRouter([
  {
    path: '/me',
    element: <App />,
  },
  {
    path: '/me/resume',
    element: <Resume />,
  },
  {
    path: '/me/work',
    element: <Portfolio />,
  },
]);

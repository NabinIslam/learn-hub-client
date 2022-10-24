import { createBrowserRouter } from 'react-router-dom';
import Root from '../layout/Root';
import Courses from '../pages/Courses';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import Faq from '../pages/Faq';
import Blog from '../pages/Blog';
import Register from '../pages/Register';
import Login from '../pages/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/courses',
        element: <Courses />,
      },
      {
        path: '/faq',
        element: <Faq />,
      },
      {
        path: '/blog',
        element: <Blog />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
    ],
  },
]);

export default router;

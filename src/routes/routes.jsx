import { createBrowserRouter } from 'react-router-dom';
import Root from '../layout/Root';
import Courses from '../pages/Courses';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import Faq from '../pages/Faq';
import Blog from '../pages/Blog';
import Register from '../pages/Register';
import Login from '../pages/Login';
import CoursePage from '../pages/CoursePage';
import Checkout from '../pages/Checkout';
import PrivateRoute from './PrivateRoute';
import CategoryCourses from '../pages/CategoryCourses';
import CoursesPageLayout from '../layout/CoursesPageLayout';

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
        element: <CoursesPageLayout />,
        // loader: () => fetch('http://localhost:5000/courses'),
        children: [
          {
            path: '/courses',
            element: <Courses />,
            loader: () => fetch('http://localhost:5000/courses'),
          },
          {
            path: '/courses/category/:id',
            element: <CategoryCourses />,
            loader: ({ params }) =>
              fetch(`http://localhost:5000/courses/category/${params.id}`),
          },
        ],
      },
      {
        path: '/courses/course/:id',
        element: <CoursePage />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/course/${params.id}`),
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
      {
        path: '/checkout',
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;

import { Navigate, createBrowserRouter } from 'react-router-dom';
import App from '../layout/App';
import Catalog from '../../features/catalog/Catalog';
import HomePage from '../../features/home/HomePage';
import ProductDetails from '../../features/catalog/ProductDetails';
import ContactPage from '../../features/contact/ContactPage';
import AboutPage from '../../features/about/AboutPage';
import ServerError from '../errors/ServerError';
import NotFound from '../errors/NotFound';
import BasketPage from '../../features/basket/BasketPage';
import CheckoutPage from '../../features/checkout/CheckoutPage';
import Login from '../../features/account/Login';
import Register from '../../features/account/Register';
import RequireAuth from './RequireAuth';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        // authenticated routes
        element: <RequireAuth></RequireAuth>,
        children: [{ path: 'checkout', element: <CheckoutPage /> }],
      },
      {
        path: '',
        element: <HomePage></HomePage>,
      },
      {
        path: 'catalog',
        element: <Catalog />,
      },
      {
        path: 'catalog/:id',
        element: <ProductDetails></ProductDetails>,
      },
      {
        path: 'about',
        element: <AboutPage></AboutPage>,
      },
      {
        path: 'contact',
        element: <ContactPage></ContactPage>,
      },
      { path: 'basket', element: <BasketPage /> },

      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      {
        path: 'server-error',
        element: <ServerError></ServerError>,
      },
      { path: 'not-found', element: <NotFound /> },
      { path: '*', element: <Navigate replace to="/not-found" /> },
    ],
  },
]);

export default router;

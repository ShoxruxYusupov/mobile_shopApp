import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../../features';
import Contact from '../../features/contact/Contact';
import Navigation from '../../features/navigation/Navigation';
import Shop from '../../features/shop/Shop';
import { AppLayout } from '../../layout';

export const appRoutes = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'shop',
        element: <Shop />
      },
      {
        path: 'navigate',
        element: <Navigation />
      },
      {
        path: 'contact',
        element: <Contact />
      }
    ]
  }
]);

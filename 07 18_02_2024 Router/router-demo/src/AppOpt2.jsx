import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './Pages/About';
import Home from './Pages/Home';
import MenuComponent from './Pages/MenuComponent';
import Root from './Root';

export default function AppOpt2() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      //loader: rootLoader,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
      ],
    },
    {
      path: "/menu/:userId",
      element: <MenuComponent />
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

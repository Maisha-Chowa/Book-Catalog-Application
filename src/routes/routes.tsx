import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Books from "../pages/Books";
import BookDetails from "../pages/BookDetails";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/books",
        element: <Books />,
      },
      {
        path: "/books/:id",
        element: <BookDetails />,
      },
      // {
      //   path: '/checkout',
      //   element: (
      //     <PrivateRoute>
      //       <Checkout />,
      //     </PrivateRoute>
      //   ),
      // },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;

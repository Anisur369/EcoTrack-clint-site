import App from "../Root";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/public/Home";
import Register from "../pages/auth/Register";
import PrivateRoute from "./ProtectedRoute";

const PublicRoute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "challenges", element: <div>Challenges </div> },
      { path: "challenges/:id", element: <div>Challenges Details </div> },
      {
        path: "challenges/add",
        element: <PrivateRoute> Add Challenge </PrivateRoute>,
      },
      {
        path: "challenges/join/:id",
        element: <PrivateRoute> Join Challenge </PrivateRoute>,
      },
      {
        path: "my-activities",
        element: (
          <PrivateRoute>
            <div> My Activities </div>
          </PrivateRoute>
        ),
      },
      {
        path: "my-activities/:id",
        element: (
          <PrivateRoute>
            <div> My Activities Details </div>
          </PrivateRoute>
        ),
      },
      { path: "login", element: <div>Login</div> },
      { path: "register", element: <Register /> },
      { path: "forgot-password", element: <div>Forgot Password</div> },
    ],
  },
  {
    path: "*",
    element: <div>404</div>,
  },
]);

export default PublicRoute;

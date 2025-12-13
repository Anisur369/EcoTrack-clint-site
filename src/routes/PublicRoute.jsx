import App from "../Root";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/public/Home";
import Register from "../pages/auth/Register";
import PrivateRoute from "./ProtectedRoute";
import Login from "../pages/auth/Login";
import NotFound from "../pages/NotFound";
import Challenges from "../pages/public/Challenges";
import ChallengesDetails from "../components/challenges/ChallengesDetails.jsx";
import AddChallenge from "../components/challenges/AddChallengeForm.jsx";
import ForgotPasswordLink from "../components/auth/ForgotPasswordLink.jsx";
import JoinChallenge from "../pages/protected/JoinChallenge.jsx";
import Profile from "../components/common/Profile.jsx";
import MyActivities from "../pages/protected/MyActivities.jsx";
import MyActivitiesDetails from "../pages/protected/MyActivitiesDetails.jsx";

const PublicRoute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/challenges",
        element: (
            <Challenges />
        ),
        loader: () => fetch("http://localhost:3000/challenges"),
      },
      {
        path: "/challenges/:id",
        element: <PrivateRoute><ChallengesDetails /></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/challenges/${params.id}`),
      },
      {
        path: "/challenges/add",
        element: (
          <PrivateRoute>
            <AddChallenge />
          </PrivateRoute>
        ),
      },
      {
        path: "/challenges/join/:id",
        element: <PrivateRoute><JoinChallenge /></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/challenges/${params.id}`),
      },
      {
        path: "/my-activities",
        element: (
          <PrivateRoute>
            <MyActivities />
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:3000/userChallenges"),
      },
      {
        path: "/my-activities/:id",
        element: (
          <PrivateRoute>
            <MyActivitiesDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/userChallenges/${params.id}`),
      },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      { path: "/forgot-password", element: <ForgotPasswordLink /> },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default PublicRoute;

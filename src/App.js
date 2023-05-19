import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Layout from "./components/Layouts/Layout";
import Single from "./pages/Single/Single";
import SingleLayout from "./components/Layouts/SingleLayout";
import Create from "./pages/Create/Create";
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
} from "@aws-amplify/ui-react";
import Profile from "./pages/Profile/Profile";
import Explore from "./pages/Explore/Explore";


function App({signOut, user}) {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <Home user={user}/>,
        },
      ],
    },
    {
      path: "/single",
      element: <SingleLayout><Single/></SingleLayout>
    },
    {
      path: "/create",
      element: <SingleLayout><Create/></SingleLayout>
    },
    {
      path: "/explore",
      element: <SingleLayout><Explore/></SingleLayout>
    },
    {
      path: "/single/:id",
      element: <SingleLayout><Profile/></SingleLayout>
    }
  ]);
  return (
    <RouterProvider router={router}/>
  );
}

export default withAuthenticator(App);

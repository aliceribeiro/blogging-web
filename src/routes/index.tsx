import { createBrowserRouter } from "react-router-dom";

import Initial from "../pages/Initial";
import Login from "../pages/Login";
import PageNotFound from "../pages/PageNotFound";
import Posts from "../pages/Posts";
import PostDetails from "../pages/PostDetails";
import { ErrorBoundary } from "../pages/ErrorBoundary";
import { Paths } from "./paths";

const router = createBrowserRouter(
  [
    {
      path: Paths.BASE,
      index: true,
      element: <Initial />,
      errorElement: <ErrorBoundary />
    },
    {
      path: Paths.LOGIN,
      element: <Login />,
      errorElement: <ErrorBoundary />
    },
    {
      path: Paths.POSTS,
      element: <Posts />,
      errorElement: <ErrorBoundary />,
    },
    {
      path: Paths.POST_DETAILS,
      element: <PostDetails />,
      errorElement: <ErrorBoundary />,
    },
    {
      path: '*',
      element: <PageNotFound />,
    }
  ]
);

export default router;
import { createBrowserRouter } from "react-router-dom";

import FormCreatePost from "../pages/FormCreatePost";
import Login from "../pages/Login";
import PageNotFound from "../pages/PageNotFound";
import PostDetails from "../pages/PostDetails";
import Timeline from "../pages/Timeline";
import { ErrorBoundary } from "../pages/ErrorBoundary";
import { Paths } from "./paths";

const router = createBrowserRouter(
  [
    {
      path: Paths.BASE,
      index: true,
      element: <Timeline />,
      errorElement: <ErrorBoundary />,
    },
    {
      path: Paths.LOGIN,
      element: <Login />,
      errorElement: <ErrorBoundary />
    },
    {
      path: Paths.POST_DETAILS,
      element: <PostDetails />,
      errorElement: <ErrorBoundary />,
    },
    {
      path: Paths.CREATE_POST,
      element: <FormCreatePost />,
      errorElement: <ErrorBoundary />,
    },
    {
      path: '*',
      element: <PageNotFound />,
    }
  ]
);

export default router;


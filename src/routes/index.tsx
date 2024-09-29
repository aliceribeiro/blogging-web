import { createBrowserRouter } from "react-router-dom";

import FormCreatePost from "../pages/FormCreatePost";
import FormEditPost from "../pages/FormEditPost";
import Login from "../pages/Login";
import PageNotFound from "../pages/PageNotFound";
import PostDetails from "../pages/PostDetails";
import Timeline from "../pages/Timeline";
import { withProviders } from "../templates/withProviders";
import { ErrorBoundary } from "../pages/ErrorBoundary";
import { BasePaths, Paths } from "./paths";

// TODO: Fica melhor em cada página
const router = createBrowserRouter(
  [
    {
      path: Paths.BASE,
      index: true,
      element: withProviders(<Timeline />)(),
      errorElement: <ErrorBoundary />,
    },
    {
      path: Paths.LOGIN,
      element: withProviders(<Login />)(),
      errorElement: <ErrorBoundary />
    },
    {
      path: `${BasePaths.POST_DETAILS}/:postId`,
      element: withProviders(<PostDetails />)(),
      errorElement: <ErrorBoundary />,
    },
    {
      path: Paths.CREATE_POST,
      element: withProviders(<FormCreatePost />)(),
      errorElement: <ErrorBoundary />,
    },
    {
      path: `${BasePaths.EDIT_POST}/:postId`,
      element: withProviders(<FormEditPost />)(),
      errorElement: <ErrorBoundary />,
    },
    {
      path: '*',
      element: <PageNotFound />,
    }
  ]
);

export default router;

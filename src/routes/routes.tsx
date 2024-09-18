import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreatePost from "../pages/CreatePost";
import EditPost from "../pages/EditPost";
import Initial from "../pages/Initial";
import Login from "../pages/Login";
import Posts from "../pages/Posts";
import SeePost from "../pages/SeePost";
import { PATHS } from "./paths";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATHS.BASE} element={<Initial />} />
        <Route path={PATHS.LOGIN} element={<Login />} />
        <Route path={PATHS.POSTS} element={<Posts />} />
        <Route path={PATHS.SEE_POST} element={<SeePost />} />
        <Route path={PATHS.CREATE_POST} element={<CreatePost />} />
        <Route path={PATHS.EDIT_POST} element={<EditPost />} />
      </Routes>
    </BrowserRouter>
  );
}

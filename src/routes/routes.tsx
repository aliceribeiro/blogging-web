import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreatePost from "../pages/CreatePost";
import EditPost from "../pages/EditPost";
import Initial from "../pages/Initial";
import Login from "../pages/Login";
import Posts from "../pages/Posts";
import SeePost from "../pages/SeePost";
import { Paths } from "./paths";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Paths.BASE} element={<Initial />} />
        <Route path={Paths.LOGIN} element={<Login />} />
        <Route path={Paths.POSTS} element={<Posts />} />
        <Route path={Paths.SEE_POST} element={<SeePost />} />
        <Route path={Paths.CREATE_POST} element={<CreatePost />} />
        <Route path={Paths.EDIT_POST} element={<EditPost />} />
      </Routes>
    </BrowserRouter>
  );
}

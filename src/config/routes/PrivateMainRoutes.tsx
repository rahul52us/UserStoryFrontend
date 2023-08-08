import { lazy } from "react";
import { privateMain } from "../constant/routes";
const BlogIndex = lazy(() => import("../../pages/Dashboard/Blog/BlogIndex"))


// Blog Sections

export const mainPrivateRoutes = [
  {
    element: <BlogIndex />,
    path: privateMain.createBlog,
    privateRoutes:true
  }
];

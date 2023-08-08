import { Route, Routes } from "react-router-dom";
import { MainPublicRoutes } from "./MainPageRoutes";
import { AuthenticateRoutes } from "./AuthenticateRoutes";
import { DashboardRoutes } from "./DashbaordRoutes";
import MainLayout from "../layout/MainLayout/MainLayout";
import AuthenticateLayout from "../layout/authenticateLayout/AuthenticateLayout";
import DashboardLayout from "../layout/dashboardLayout/DashboardLayout";
import { observer } from "mobx-react-lite";
import { mainPrivateRoutes } from "./PrivateMainRoutes";
import PrivateMainLayout from "../layout/PrivateMainLayout/PrivateMainLayout";

const RouterIndex = observer(() => {
  return (
    <Routes>
      <Route element={<PrivateMainLayout />}>
        {mainPrivateRoutes.map((item, index) => {
          return <Route key={index} path={item.path} element={item.element} />;
        })}
      </Route>

      <Route element={<MainLayout />}>
        {MainPublicRoutes.map((item, index) => {
          return <Route key={index} path={item.path} element={item.element} />;
        })}
      </Route>

      <Route element={<AuthenticateLayout />}>
        {AuthenticateRoutes.map((item, index) => {
          return <Route path={item.path} key={index} element={item.element} />;
        })}
      </Route>
      <Route element={<DashboardLayout />}>
        {DashboardRoutes.map((item, index) => {
          return <Route path={item.path} key={index} element={item.element} />;
        })}
      </Route>
    </Routes>
  );
});

export default RouterIndex;
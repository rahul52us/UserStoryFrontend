import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loader from "../../component/Loader/Loader";

const AuthenticateLayout = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Outlet />
    </Suspense>
  );
};

export default AuthenticateLayout;
import { useEffect } from "react";
import { Suspense } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Loader from "../../component/Loader/Loader";
import { observer } from "mobx-react-lite";
import store from "../../../store/store";

const AuthenticateLayout = observer(() => {
  const {
    auth: { restoreUser },
  } = store;
  const navigate = useNavigate();

  useEffect(() => {
    if (restoreUser()) {
      navigate("/");
    }
  }, [navigate, restoreUser]);

  return (
    <Suspense fallback={<Loader />}>
      <Outlet />
    </Suspense>
  );
});

export default AuthenticateLayout;
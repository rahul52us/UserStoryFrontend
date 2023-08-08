import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loader from "../../component/Loader/Loader";
import { observer } from "mobx-react-lite";

const PrivateMainLayout = observer(() => {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <div>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
});

export default PrivateMainLayout;

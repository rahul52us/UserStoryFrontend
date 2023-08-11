import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./FooterLayout/FooterLayout";
import HeaderLayout from "./HeaderLayout/HeaderLayout";
import Loader from "../../component/Loader/Loader";
import { headerHeight } from "../../constant/variable";
import { observer } from "mobx-react-lite";
import { useColorModeValue } from "@chakra-ui/react";

const MainLayout = observer(() => {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh",backgroundColor:useColorModeValue("rgb(245, 245, 245)",'#1A202C')}}>
      <HeaderLayout />
      <div style={{ flex: "1 0 auto",marginTop:headerHeight }}>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
});

export default MainLayout;
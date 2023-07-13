import { Box, useColorModeValue } from "@chakra-ui/react";
import DashPageHeader from "../../../config/component/common/DashPageHeader/DashPageHeader";
import VideoGridLayout from "./Layout/VideoGridLayout";
import DashPageTitle from "../../../config/component/common/DashPageTitle/DashPageTitle";
import { headerHeight } from "../../../config/constant/variable";
import { dashboard } from "../../../config/constant/routes";

const VideosIndex = () => {
  const items = [
    { label: "Home", link: '/' },
    { label: "Dashboard", link: dashboard.home },
    { label: "Videos" },
  ];

  return (
    <Box
      bg={useColorModeValue("gray.100", "gray.700")}
      minHeight={`calc(100vh - ${headerHeight})`}
      m={-4}
      p={3}
    >
      <DashPageHeader
        title="Videos"
        btnTitle="CREATE"
        btnAction={() => alert("rahul")}
        breadcrumb={items}
      />
      <DashPageTitle title="Our Youtube Videos" subTitle="Videos container contains the all types of videos"/>
      <VideoGridLayout />
    </Box>
  );
};

export default VideosIndex;

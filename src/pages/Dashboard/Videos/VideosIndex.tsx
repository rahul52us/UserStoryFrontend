import { Box } from "@chakra-ui/react";
import DashPageHeader from "../../../config/component/common/DashPageHeader/DashPageHeader";
import VideoGridLayout from "./Layout/VideoGridLayout";
import DashPageTitle from "../../../config/component/common/DashPageTitle/DashPageTitle";
import { headerHeight } from "../../../config/constant/variable";
import { dashboard } from "../../../config/constant/routes";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import VideoForm from "./component/VideosForm";
import DashFormModel from "../../../config/component/common/DashFormModel/DashFormModel";

const VideosIndex = observer(() => {
  const [openVideoModel, setOpenVideoModel] = useState<any>({
    open: false,
    data: null,
  });

  const items = [
    { label: "Home", link: "/" },
    { label: "Dashboard", link: dashboard.home },
    { label: "Videos" },
  ];

  return (
    <Box minHeight={`calc(100vh - ${headerHeight})`} m={-4} p={3}>
      <DashPageHeader
        title="Videos"
        btnTitle="CREATE"
        btnAction={() => setOpenVideoModel({ open: true })}
        breadcrumb={items}
      />
      <DashPageTitle
        title="Our Youtube Videos"
        subTitle="Videos container contains the all types of videos"
      />
      <VideoGridLayout />
      <DashFormModel
        isCentered={true}
        title="Add Videos"
        open={openVideoModel.open}
        close={() => {
          setOpenVideoModel({ open: false, data: null });
        }}
      >
        <VideoForm
          close={() => {
            setOpenVideoModel({ open: false, data: null });
          }}
        />
      </DashFormModel>
    </Box>
  );
});

export default VideosIndex;

import { Box, Grid, useBreakpointValue } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import ProfileBanner from "./component/ProfileBanner";
import ProfileMainTabContainer from "./component/element/component/profileTabContainer/ProfileMainTabContainer";
import { observer } from "mobx-react-lite";
import ProfileChangePassword from "./component/TabsComponent/ProfileChangePassword";
import ProfileEdit from "./component/element/component/ProfileFormContainer/element/ProfileEdit/ProfileEdit";
import ProfileView from "./component/element/component/ProfileFormContainer/element/ProfileView/ProfileView";

const ProfileContainer = observer(
  ({
    classes,
    profileData,
    editTabLink,
    type,
    sideTab,
    changePassword,
    handleSubmitProfile,
    initialValues,
    validations,
  }: any) => {
    const LargerThanMd = useBreakpointValue({ xl: true });
    const location = useLocation();

    const tab: any = new URLSearchParams(location.search).get("profileTab");

    const getEditActiveComponent = ({
      classes,
      profileData,
      type,
      changePassword,
      handleSubmitProfile,
    }: any) => {
      switch (tab) {
        case "edit":
          return (
            <ProfileEdit
              type={type}
              profileData={profileData}
              classes={classes}
              handleSubmitProfile={handleSubmitProfile}
              initialValues={initialValues}
              validations={validations}
            />
          );
        case "change-password":
          return <ProfileChangePassword changePassword={changePassword} />;
        default:
          return <ProfileView type={type} profileData={profileData} />;
      }
    };

    const getCreateActiveComponent = () => {
      switch (type) {
        case "create":
          return (
            <ProfileEdit
              type={type}
              profileData={profileData}
              classes={classes}
              handleSubmitProfile={handleSubmitProfile}
              initialValues={initialValues}
              validations={validations}
            />
          );
        default:
          return (
            <ProfileEdit
              type={type}
              profileData={profileData}
              classes={classes}
              handleSubmitProfile={handleSubmitProfile}
              initialValues={initialValues}
              validations={validations}
            />
          );
      }
    };

    return (
      <Box p={{base: 1.5, lg : 0}}>
        <ProfileBanner />
        <Grid
          gridTemplateColumns={{ lg: "0.35fr 1fr" }}
          style={{
            marginLeft: LargerThanMd ? "100px" : "0",
            marginRight: LargerThanMd ? "100px" : "2px",
          }}
          gap={5}
          mt={3}
          mb={10}
        >
          <Box>
            <ProfileMainTabContainer
              profileData={profileData}
              type={type}
              sideTab={sideTab}
              editTabLink={editTabLink}
            />
          </Box>
          <Box border="1px solid #e9ecef" borderRadius={5}>
            {type === "edit"
              ? getEditActiveComponent({
                  classes,
                  profileData,
                  type,
                  changePassword,
                  handleSubmitProfile,
                })
              : getCreateActiveComponent()}
          </Box>
        </Grid>
      </Box>
    );
  }
);

export default ProfileContainer;

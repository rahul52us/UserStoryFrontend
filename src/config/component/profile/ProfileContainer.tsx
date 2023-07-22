import { useState } from "react";
import { Card, Container, Grid } from "@chakra-ui/react";
import ProfileSidebar from "./component/profileSidebar/ProfileSidebar";
import ProfileDetail from "./component/TabsComponent/ProfileDetail";
import ProfileChangePassword from "./component/TabsComponent/ProfileChangePassword";


interface ProfileContainerI {
  changePassword?: any;
  currentActiveTab:number
}

const ProfileContainer = ({changePassword,currentActiveTab} : ProfileContainerI) => {
  const [currentTab, setCurrentTab] = useState(currentActiveTab);

  const getCurrentTabElement = (): any => {
    switch (currentTab) {
      case 0:
        return <ProfileDetail />;
      case 1:
        return <ProfileChangePassword changePassword={changePassword} />;
      default:
        return <ProfileDetail />;
    }
  };

  return (
    <Container maxW={"8xl"}>
      <Card p={{ base: 2, sm: 5 }} mt={2} mb={2} borderRadius={5}>
        <Grid
          templateColumns={{
            base: "repeat(1,1fr)",
            lg: "1fr 3fr",
          }}
          gap={5}
        >
          <ProfileSidebar
            currentTab={currentTab}
            onChange={(value) => setCurrentTab(value)}
          />
          <Card p={5}>{getCurrentTabElement()}</Card>
        </Grid>
      </Card>
    </Container>
  );
};

export default ProfileContainer;

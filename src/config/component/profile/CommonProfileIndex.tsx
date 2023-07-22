import { Box } from "@chakra-ui/react";
import ProfileBanner from "./component/ProfileBanner";
import ProfileContainer from "./ProfileContainer";

interface CommonProfileIndexI {
  changePassword?: any;
  currentActiveTab?:any
}

const CommonProfileIndex = ({ changePassword, currentActiveTab }: CommonProfileIndexI) => {

  return (
    <Box>
      <ProfileBanner />
      <ProfileContainer
        changePassword={changePassword}
        currentActiveTab={parseInt(currentActiveTab)}
      />
    </Box>
  );
};

export default CommonProfileIndex;

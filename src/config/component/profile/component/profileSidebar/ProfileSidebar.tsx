import {
  Box,
  Card,
  Divider,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import store from "../../../../../store/store";
import { FaHome } from "react-icons/fa";

interface SidebarElementI {
  text: string;
  onChange?: (e: any) => void;
  currentTab?: number;
  selectedTab?: number;
}

const SidebarElement = ({
  text,
  onChange,
  currentTab,
  selectedTab,
}: SidebarElementI) => {
  return (
    <>
      <Box
        display={"flex"}
        alignItems={"center"}
        mb={2}
        mt={2}
        cursor={"pointer"}
        _hover={{ color: "blue" }}
        color={selectedTab === currentTab ? "blue" : ""}
        transition={"0.4s ease-in-out"}
        onClick={() => {
          if (onChange) {
            onChange(currentTab);
            localStorage.setItem("profile_current_active_tab", `${currentTab}`);
          }
        }}
      >
        <FaHome />
        <Text ml={3} fontWeight={500}>
          {text}
        </Text>
      </Box>
      <Divider />
    </>
  );
};

interface ProfileSidebarI {
  currentTab?: number;
  onChange?: (e: any) => void;
}

const ProfileSidebar = observer(({ currentTab, onChange }: ProfileSidebarI) => {
  const {
    auth: { user },
  } = store;

  const sideElement: any = [
    { key: 0, text: "Profile Details" },
    { key: 1, text: "Change Password" },
    { key: 2, text: "Profile Details" },
    { key: 3, text: "Profile Details" },
    { key: 4, text: "Profile Details" },
    { key: 5, text: "Profile Details" },
    { key: 6, text: "Profile Details" },
  ];

  return (
    <Card borderRadius={8} p={5} borderColor={"blue.400"} borderWidth={3}>
      <Heading
        fontSize={"sm"}
        color={useColorModeValue("gray.400", "gray.200")}
      >
        Welcome , {user?.name}
      </Heading>
      <Box mt={3}>
        {sideElement.map((item: any) => {
          return (
            <SidebarElement
              text={item.text}
              currentTab={item.key}
              onChange={onChange}
              selectedTab={currentTab}
            />
          );
        })}
      </Box>
    </Card>
  );
});

export default ProfileSidebar;

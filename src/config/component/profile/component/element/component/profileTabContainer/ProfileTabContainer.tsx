import { Box, Heading } from "@chakra-ui/react";
import TabElement from "./element/TabElement";
import { observer } from "mobx-react-lite";
import { IoIosBookmarks, IoIosPerson } from "react-icons/io";
import { MdExtension } from "react-icons/md";
import { AiOutlineShopping } from "react-icons/ai";
import {
  AiOutlineEdit,
  AiOutlineLock,
  AiOutlineLogout,
  AiOutlineMinusCircle,
} from "react-icons/ai";

const ProfileTabContainer = observer(() => {
  const data = [
    {
      title: "Dashboard",
      icon: <IoIosBookmarks size="18" fontWeight="bold" />,
    },
    {
      title: "My Profile",
      icon: <IoIosPerson size="18" fontWeight="bold" />,
    },
    {
      title: "Enrolled Courses",
      icon: <IoIosBookmarks size="18" fontWeight="bold" />,
    },
    {
      title: "My Quiz Attempts",
      icon: <MdExtension size="18" fontWeight="bold" />,
    },
    {
      title: "Order History",
      icon: <AiOutlineShopping size="18" fontWeight="bold" />,
    },
  ];

  const AccountSetting = [
    {
      title: "Edit Profile",
      icon: <AiOutlineEdit size="18" fontWeight="bold" />,
    },
    {
      title: "Withdraw",
      icon: <AiOutlineMinusCircle size="18" fontWeight="bold" />,
    },
    {
      title: "Change Password",
      icon: <AiOutlineLock size="18" fontWeight="bold" />,
    },
    {
      title: "Logout",
      icon: <AiOutlineLogout size="18" fontWeight="bold" />,
    },
  ];
  return (
    <Box border="1px solid #e9ecef" borderRadius={5} p={4}>
      <Box>
        <Heading fontSize="lg" color="#002058">
          Dashboard
        </Heading>
        <Box mt={6}>
          {data.map((item: any, index: number) => {
            return (
              <TabElement key={index} Icon={item.icon} title={item.title} />
            );
          })}
        </Box>
      </Box>
      <Box mt={6}>
        <Heading fontSize="lg" color="#002058">
          Account Settings
        </Heading>
        <Box mt={6}>
          {AccountSetting.map((item: any, index: number) => {
            return (
              <TabElement key={index} Icon={item.icon} title={item.title} />
            );
          })}
        </Box>
      </Box>
    </Box>
  );
});

export default ProfileTabContainer;

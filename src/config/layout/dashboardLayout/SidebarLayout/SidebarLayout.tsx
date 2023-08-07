import { useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  Flex,
  VStack,
  useMediaQuery,
} from "@chakra-ui/react";
import SidebarLogo from "./component/SidebarLogo";
import SidebarElement from "./element/SidebarElement";
import { observer } from "mobx-react-lite";
import store from "../../../../store/store";

const SidebarLayout = () => {
  const [menuItems] = useState<any>([
    {
      label: "Dashboard",
      path: "/dashboard",
    },
    {
      label: "Menu Item 2",
      path: "/dashboard/quiz",
      submenus: [
        {
          label: "Quiz Part",
          path: "/dashboard/quiz",
        },
        {
          label: "Course Part",
          path: "/dashboard/courses",
        },
      ],
    },
    {
      label: "Menu Item 3",
      path: "/dashboard/class",
      submenus: [
        {
          label: "Class Part",
          path: "/dashboard/class",
        },
        {
          label: "Videos Part",
          path: "/dashboard/videos",
        },
      ],
    },
    {
      label: "Users",
      path: "/dashboard/students",
      submenus: [
        {
          label: "Students",
          path: "/dashboard/students",
          submenus: [
            {
            label: "Students",
            path: "/dashboard/students/create"
            }
          ]
        },
        {
          label: "Teachers",
          path: "/dashboard/teachers",
        },
        {
          label: "Staff",
          path: "/dashboard/staffs",
        },
      ],
    },
  ]);

  return (
    <Flex direction="column" h="100vh" bg="#042954">
      <SidebarLogo />
      <VStack spacing={4} align="stretch">
        {menuItems.map((menuItem: any, index: any) => (
          <SidebarElement items={menuItem} key={index} />
        ))}
      </VStack>
    </Flex>
  );
};

const SidebarMainLayout = observer(() => {
  const {
    layout: { MobileSidebar, MobileSidebarFun },
  } = store;
  const [isLargerThan1020] = useMediaQuery("(min-width: 1020px)");

  return isLargerThan1020 ? (
    <SidebarLayout />
  ) : (
    <Drawer
      isOpen={MobileSidebar}
      onClose={() => {
        MobileSidebarFun(false);
      }}
    >
      <DrawerContent p={0} m={0}>
        <DrawerBody p={0} m={0}>
          <SidebarLayout />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
});

export default SidebarMainLayout;

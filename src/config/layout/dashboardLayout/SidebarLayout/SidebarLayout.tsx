import { useState } from "react";
import { Flex, VStack } from "@chakra-ui/react";
import SidebarLogo from "./component/SidebarLogo";
import SidebarElement from "./element/SidebarElement";

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
          path: "/dashboard/videos"
        },
      ],
    },
  ]);

  return (
    <Flex direction="column" h="100vh" bg="#042954">
      <SidebarLogo />
      <VStack spacing={4} align="stretch">
        {menuItems.map((menuItem: any, index: any) => (
          <SidebarElement
            items={menuItem}
            key={index}
          />
        ))}
      </VStack>
    </Flex>
  );
};

export default SidebarLayout;

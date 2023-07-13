import { useState, useEffect } from "react";
import { Flex, Text, VStack, Collapse, Box } from "@chakra-ui/react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

interface SubmenuItem {
  label: string;
  submenus?: SubmenuItem[];
}

const SidebarLayout = () => {
  const [menuItems] = useState<SubmenuItem[]>([
    {
      label: "Menu Item 1",
    },
    {
      label: "Menu Item 2",
      submenus: [
        {
          label: "Submenu Item 1",
        },
        {
          label: "Submenu Item 2",
        },
      ],
    },
    {
      label: "Menu Item 3",
      submenus: [
        {
          label: "Submenu Item 3.1",
        },
        {
          label: "Submenu Item 3.2",
          submenus: [
            {
              label: "Submenu Item 3.2.1",
            },
          ],
        },
      ],
    },
  ]);

  const [openSubmenus, setOpenSubmenus] = useState<string[]>([]);

  const toggleSubmenu = (submenuLabel: string) => {
    if (openSubmenus.includes(submenuLabel)) {
      setOpenSubmenus(openSubmenus.filter((label) => label !== submenuLabel));
    } else {
      setOpenSubmenus([...openSubmenus, submenuLabel]);
    }
  };

  const isSubmenuOpen = (submenuLabel: string) => {
    return openSubmenus.includes(submenuLabel);
  };

  useEffect(() => {
    const storedOpenSubmenus = localStorage.getItem("openSubmenus");
    if (storedOpenSubmenus) {
      setOpenSubmenus(JSON.parse(storedOpenSubmenus));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("openSubmenus", JSON.stringify(openSubmenus));
  }, [openSubmenus]);

  useEffect(() => {
    const currentPath = window.location.pathname;
    const selectedSubmenus: string[] = [];
    menuItems.forEach((menuItem) => {
      if (
        menuItem.submenus &&
        menuItem.submenus.some((submenu) => submenu.label === currentPath)
      ) {
        selectedSubmenus.push(menuItem.label);
      }
    });
    setOpenSubmenus(selectedSubmenus);
  }, [menuItems]);

  return (
    <Flex direction="column" h="100vh" py={4} px={2}>
      <VStack spacing={4} align="stretch">
        {menuItems.map((menuItem, index) => (
          <Box key={index}>
            <Text
              onClick={() => toggleSubmenu(menuItem.label)}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              bg={isSubmenuOpen(menuItem.label) ? "blue.500" : undefined}
              color={isSubmenuOpen(menuItem.label) ? "white" : undefined}
              borderRadius="md"
              px={2}
              py={1}
              cursor="pointer"
              _hover={{ bg: "blue.500", color: "white" }}
            >
              {menuItem.label}{" "}
              {menuItem.submenus &&
                (isSubmenuOpen(menuItem.label) ? (
                  <AiOutlineUp />
                ) : (
                  <AiOutlineDown />
                ))}
            </Text>
            {menuItem.submenus && (
              <Collapse in={isSubmenuOpen(menuItem.label)} animateOpacity>
                <VStack spacing={2} pl={4}>
                  {menuItem.submenus.map((submenu, submenuIndex) => (
                    <Text
                      key={submenuIndex}
                      bg={
                        submenu.label === window.location.pathname
                          ? "blue.200"
                          : undefined
                      }
                      px={2}
                      py={1}
                      borderRadius="md"
                      cursor="pointer"
                      _hover={{ bg: "blue.200" }}
                      onClick={() => toggleSubmenu(submenu.label)}
                    >
                      {submenu.label}
                    </Text>
                  ))}
                </VStack>
              </Collapse>
            )}
          </Box>
        ))}
      </VStack>
    </Flex>
  );
};

export default SidebarLayout;

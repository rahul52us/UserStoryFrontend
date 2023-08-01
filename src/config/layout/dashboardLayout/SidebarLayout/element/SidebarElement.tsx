import { useState, useEffect } from "react";
import { Box, Collapse, Flex, Text } from "@chakra-ui/react";
import { AiFillDashboard } from "react-icons/ai";
import { RiArrowDropRightLine, RiArrowDropDownLine } from "react-icons/ri";
import { NavLink, useLocation } from "react-router-dom";

interface SidebarElementI {
  items: any;
}

const SidebarElement = ({ items }: SidebarElementI) => {
  const location = useLocation();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isSelected, setSelected] = useState(false);

  useEffect(() => {
    if (items.submenus) {
      setDropdownOpen(false);
      setSelected(false);
      items.submenus.forEach((submenu: any) => {
        if (location.pathname === submenu.path) {
          setDropdownOpen(true);
          setSelected(true);
        }
      });
    }
  }, [location.pathname, items.submenus]);

  const handleToggleDropdown = () => {
    if (items.submenus) {
      setDropdownOpen((prevState) => !prevState);
      setSelected(true);
    }
  };

  return (
    <Box
      borderBottom="1px solid #021933"
      minH={35}
      display="Box"
      flexDirection="column"
      alignItems="center"
    >
      <Flex
        justifyContent="space-between"
        alignItems="center"
        pr={3}
        pl={3}
        cursor="pointer"
        onClick={handleToggleDropdown}
        bg={isSelected ? "#042954" : "initial"}
      >
        <NavLink
          to={items.path}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Flex alignItems="center">
            <AiFillDashboard color="white" fontSize="1.5rem" />
            <Text ml={2} color="white">
              {items.label}
            </Text>
          </Flex>
        </NavLink>
        {items.submenus &&
          (isDropdownOpen ? (
            <RiArrowDropDownLine fontSize="1.8rem" color="white" />
          ) : (
            <RiArrowDropRightLine fontSize="1.8rem" color="white" />
          ))}
      </Flex>
      {items.submenus && (
        <Collapse
          in={isDropdownOpen}
          animateOpacity
          style={{ backgroundColor: "#051f3e" }}
        >
          <Box mt={3.5} mb={3.5}>
            {items.submenus.map((submenu: any, index: number) => (
              <Box
                key={index}
                _hover={{
                  backgroundColor: "#042954",
                  transition: "background-color 0.3s ease",
                }}
                bg={location.pathname === submenu.path ? "#042954" : "initial"}
              >
                <NavLink
                  to={submenu.path}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Flex
                    alignItems="center"
                    mt={2}
                    mb={2}
                    ml={5}
                    p={1}
                    cursor="pointer"
                  >
                    <RiArrowDropRightLine fontSize="1.8rem" color="white" />
                    <Text color="white">{submenu.label}</Text>
                  </Flex>
                </NavLink>
              </Box>
            ))}
          </Box>
        </Collapse>
      )}
    </Box>
  );
};

export default SidebarElement;

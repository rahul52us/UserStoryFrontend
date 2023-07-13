import React from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Box, useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface BreadcrumbItems {
  label: string;
  link?: string;
}

interface BreadcrumbProps {
  items?: BreadcrumbItems[];
}

const CustomBreadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  const separatorColor = useColorModeValue("gray.400", "gray.600");
  const linkColor = useColorModeValue("blue.500", "blue.200");
  const activeColor = useColorModeValue("gray.700", "gray.300");

  return (
    <Breadcrumb separator={<Box color={separatorColor}>&gt;</Box>} fontWeight="medium" fontSize="sm">
      {items?.map((item, index) => (
        <BreadcrumbItem key={index} isCurrentPage={index === items.length - 1}>
          {item.link ? (
            <BreadcrumbLink
              as={Link}
              to={item.link}
              color={linkColor}
              _hover={{ color: activeColor }}
              _focus={{ outline: "none" }}
              _active={{ color: activeColor }}
            >
              {item.label}
            </BreadcrumbLink>
          ) : (
            <Box color={activeColor}>{item.label}</Box>
          )}
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
};

export default CustomBreadcrumb;

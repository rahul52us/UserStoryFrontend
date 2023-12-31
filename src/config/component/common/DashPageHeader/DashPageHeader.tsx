import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  useColorModeValue,
  useTheme,
} from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import CustomBreadcrumb from "../../CustomBreadcrumb/CustomBreadcrumb";

interface BreadcrumbItem {
  label: string;
  link?: string;
}

interface PageHeaderProps {
  title?: string;
  subTitle?: string;
  btnTitle?: string;
  titleIcon?:any;
  breadcrumb?: BreadcrumbItem[];
  btnAction?: () => void;
}

const DashPageHeader = observer(
  ({ title, subTitle, btnTitle, btnAction, breadcrumb, titleIcon }: PageHeaderProps) => {
    const theme = useTheme();
    const headingColor = useColorModeValue(
      theme.colors.gray[800],
      theme.colors.gray[200]
    );
    const textColor = useColorModeValue(
      theme.colors.gray[600],
      theme.colors.gray[400]
    );
    const buttonColor = useColorModeValue(
      theme.colors.blue[500],
      theme.colors.blue[200]
    );
    const buttonHoverColor = useColorModeValue(
      theme.colors.blue[600],
      theme.colors.blue[300]
    );

    return (
      <>
        <Flex justify="space-between" alignItems="center" ml={3} mr={5}>
          <Box>
            {breadcrumb ? (
              <CustomBreadcrumb items={breadcrumb} />
            ) : (
              <>
                <Heading fontSize={20} color={headingColor}>
                  {title}
                </Heading>
                <Text color={textColor}>{subTitle}</Text>
              </>
            )}
          </Box>
          <Box>
            <Button
              leftIcon={titleIcon}
              onClick={btnAction}
              colorScheme="blue"
              variant="outline"
              color={buttonColor}
              _hover={{ color: buttonHoverColor }}
            >
              {btnTitle}
            </Button>
          </Box>
        </Flex>
      </>
    );
  }
);

export default DashPageHeader;
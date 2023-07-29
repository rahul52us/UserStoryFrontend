import { Box, IconButton } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

interface socialMediaI {
  link?: string;
  title: string;
  icon?: any;
  hoverColor?: string;
  color?: string;
}

const SocialMediaLinkLogo = ({
  link,
  title,
  icon,
  hoverColor,
  color,
}: socialMediaI) => {
  const navigate = useNavigate();

  return (
    <Box>
      <IconButton
        onClick={() => {
          if (link) {
            navigate(link);
          }
        }}
        icon={icon}
        aria-label="facebook"
        borderRadius={"50%"}
        _hover={{ backgroundColor: hoverColor, color: color }}
        title={title}
        transition={"0.2s ease-in-out"}
      />
    </Box>
  );
};

export default SocialMediaLinkLogo;

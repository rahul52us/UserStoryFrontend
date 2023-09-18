import { observer } from "mobx-react-lite";
import CustomDrawer from "../Drawer/CustomDrawer";
import store from "../../../store/store";
import ColorPickerComponent from "../ColorPicker/ColorPicker";
import {
  Box,
  Button,
  Flex,
  Grid,
  SystemCSSProperties,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import theme from "../../theme/theme";

interface CustomColorBoxProps {
  color: string;
  colorName:string;
  selected: boolean;
  onClick: () => void;
}

const CustomColorBox: React.FC<CustomColorBoxProps> = ({
  color,
  colorName,
  selected,
  onClick,
}) => {
  console.log(selected);
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const fillDegree = hovered ? 360 : 0;

  const boxStyle: SystemCSSProperties = {
    width: "70px",
    height: "70px",
    backgroundColor: color,
    borderRadius: "50%",
    cursor: "pointer",
    position: "relative" as "relative",
    overflow: "hidden",
  };

  const fillStyle: SystemCSSProperties = {
    position: "absolute" as "absolute",
    width: "100%",
    height: "100%",
    background: `conic-gradient(${color} ${fillDegree}deg, transparent ${fillDegree}deg)`,
  };

  const colorNameStyle: SystemCSSProperties = {
    marginTop: "8px",
    textAlign: "center",
    color: "#333",
    fontSize: "14px",
    fontWeight: "bold",
  };

  return (
    <Box display="flex" flexDir="column" alignItems="center">
      <Box border={`${selected ? '2px' : '1px'} solid ${selected ? 'black' : 'lightgray'}`} p={2} borderRadius={5}>
        <Box
          style={boxStyle}
          onClick={onClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div style={fillStyle}></div>
        </Box>
      </Box>
      <Text style={colorNameStyle}>{colorName}</Text>
    </Box>
  );
};

const ThemeChangeContainer: React.FC = observer(() => {
  const {
    themeStore: {
      openThemeDrawer,
      setOpenThemeDrawer,
      resetTheme,
      setThemeConfig,
    },
  } = store;

  const colors = [
    { name: "Blue", code: "#007acc" },
    { name: "Green", code: "#19a974" },
    { name: "Yellow", code: "#d6a407" },
    { name: "Red", code: "#ff6b6b" },
    { name: "Purple", code: "#6b37ff" },
    { name: "Orange", code: "#ffaa00" },
  ];

  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const handleColorSelect = (color: any) => {
    theme.colors.custom.light.primary = color.code;
    setThemeConfig("colors.custom.light.primary", color.code);
    setSelectedColor(color.code);
  };

  return (
    <CustomDrawer
      open={openThemeDrawer.open}
      close={setOpenThemeDrawer}
      title="Select the Theme"
      size="xs"
    >
      <Flex flexDir="column">
        <Box
          bgColor="#E5F6FD"
          borderRadius={5}
          p={3}
          mb={5}
          fontSize="md"
          mt={3}
        >
          <Text color="#014361" fontSize="sm">
          "Welcome! Explore our style options below and select the ones that perfectly match your preferences."
          </Text>
        </Box>
        <Box>
          <ColorPickerComponent />
        </Box>
        <Box mt={5}>
          <Grid gridTemplateColumns={`repeat(2, 1fr)`} gap={5}>
            {colors.map((color: any, index: number) => (
              <CustomColorBox
                key={index}
                color={color.code}
                colorName={color.name}
                selected={selectedColor === color.code}
                onClick={() => handleColorSelect(color)}
              />
            ))}
          </Grid>
        </Box>
        <Button mt={5} onClick={() => resetTheme()}>
          Reset Theme
        </Button>
      </Flex>
    </CustomDrawer>
  );
});

export default ThemeChangeContainer;
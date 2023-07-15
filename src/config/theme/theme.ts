import { extendTheme } from "@chakra-ui/react";
import store from "../../store/store";

const {
  themeStore: { themeConfig },
} = store;

const theme = extendTheme(themeConfig);

export default theme;

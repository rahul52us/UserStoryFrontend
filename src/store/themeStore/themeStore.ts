import { action, makeObservable, observable } from "mobx";
import _ from 'lodash'

class ThemeStore {
  openThemeDrawer = {
    open: false,
  };
  backthemeConfig = {
    fonts: {
      size: {
        xs: "0.8rem",
        sm: "1rem",
        md: "1.5rem",
        lg: "1.8rem",
        xl: "2rem",
        "2xl": "2.5rem",
        "3xl": "3rem",
        "4xl": "3.5rem",
      },
    },
    colors: {
      brand: {
        50: "#f7fafc",
        100: "#edf2f7",
        200: "#e2e8f0",
        300: "#cbd5e0",
        400: "#a0aec0",
        500: "#718096",
        600: "#4a5568",
        700: "#2d3748",
        800: "#1a202c",
        900: "#171923",
      },
      light: {
        primary: {
          50: "#FFEBEE",
          100: "#FFCDD2",
          200: "#EF9A9A",
          300: "#E57373",
          400: "#EF5350",
          500: "#F44336",
          600: "#E53935",
          700: "#D32F2F",
          800: "#C62828",
          900: "#B71C1C",
        },
        secondary: "#ffffff",
      },
      dark: {
        primary: {
          50: "#FFEBEE",
          100: "#FFCDD2",
          200: "#EF9A9A",
          300: "#E57373",
          400: "#EF5350",
          500: "#F44336",
          600: "#E53935",
          700: "#D32F2F",
          800: "#C62828",
          900: "#B71C1C",
        },
        secondary: "#000000",
      },
      custom: {
        light: {
          primary: "rgba(255, 255, 255, 0.16)",
          secondary: "#ffffff",
        },
        dark: {
          primary: "#1A202C",
          secondary: "#000000",
        },
      },
    },
    config: {
      initialColorMode: "light",
      useSystemColorMode: false,
    },
  };

  themeConfig = {
    ...this.backthemeConfig,
  };

  constructor() {
    makeObservable(this, {
      themeConfig: observable,
      openThemeDrawer: observable,
      setOpenThemeDrawer: action,
      setThemeConfig: action,
    });

    const storedThemeConfig = localStorage.getItem(
      process.env.REACT_APP_THEME_STORE!
    );
    if (storedThemeConfig) {
      try {
        this.themeConfig = JSON.parse(storedThemeConfig);
      } catch (err) {
        this.resetTheme();
      }
    }
  }

  setThemeConfig = (key : any, value : any) => {
    _.set(this.themeConfig, key, value);
    localStorage.setItem(
      process.env.REACT_APP_THEME_STORE!,
      JSON.stringify(this.themeConfig)
    );
  };

  setOpenThemeDrawer = () => {
    this.openThemeDrawer.open = !this.openThemeDrawer.open;
  };

  resetTheme = () => {
    localStorage.removeItem(process.env.REACT_APP_THEME_STORE!);
    this.themeConfig = { ...this.backthemeConfig };
  };
}

export default ThemeStore;

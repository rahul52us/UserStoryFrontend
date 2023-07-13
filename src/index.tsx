import ReactDOM from "react-dom/client";
import "./index.css";
import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import theme from "./config/theme/theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
      <ColorModeProvider>
        <App />
      </ColorModeProvider>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);

reportWebVitals();

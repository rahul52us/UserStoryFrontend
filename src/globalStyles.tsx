import { Global, css } from "@emotion/react";

const globalStyles = css`
  /* Customize scrollbar styles */
  ::-webkit-scrollbar {
    width: 8px;
    height:8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--chakra-colors-blue-500);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    background-color: var(--chakra-colors-gray-100);
  }
`;

export const GlobalStyles = () => <Global styles={globalStyles} />;

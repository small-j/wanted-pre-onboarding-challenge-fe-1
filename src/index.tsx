import ReactDOM from "react-dom/client";
import React from "react";
import CustomRouter from "./CustomRouter";
import { GlobalStyle } from "./assets/GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./assets/theme";

const elem = document.getElementById("root");
if (!elem) throw new Error("root element is not exist");
const root = ReactDOM.createRoot(elem);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <CustomRouter />
    </ThemeProvider>
  </React.StrictMode>,
);

import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
    ${reset}
    * {
        box-sizing: border-box;
    }
    html {
        font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        width: 100vw;
        height: 100vh;
        max-width: 100%;
        max-height: 100%;
    }
    a {
    color: inherit;
    text-decoration: none;
    }
    input, button {
        background-color: transparent;
        border: none;
        outline: none;
    }
`;

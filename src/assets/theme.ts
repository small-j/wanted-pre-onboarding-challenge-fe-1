import { ThemeConsumer } from "styled-components";

const colors = {
  mainColor: "#70000FE",
  subColor: "#F6F0FF",
  textColor: "#9F9F9F",
  bgGray: "#E6E6E6",
  bgGraySub: "#FBFBFB",
  black: "#000000",
  white: "#FFFFFF",
};

const common = {
  mainColorComb: `
        background-color: ${colors.mainColor};
        color: ${colors.white};
    `,
  disabled: `
        background-color: ${colors.bgGraySub};
        color: ${colors.textColor};
    `,
};

const theme = {
  colors,
  common,
};

export default theme;

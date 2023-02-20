import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
}


`;

const lightTheme = {
  name: "Light Theme",
  bg: "#948fd8",
  header: {
    bg: "#ffffff",
    txt: "#373773",
    active: "#948fd8",
    color: "#ff405c",
  },
  button: {
    bg: "yellow",
  },
};

const darkTheme = {
  name: "Dark Theme",
  bg: "#ff405c",
  header: {
    bg: "#212644",
    txt: "#2a314d",
    active: "#ff405c",
  },
};

export const customTheme = {
  light: lightTheme,
  dark: darkTheme,
};

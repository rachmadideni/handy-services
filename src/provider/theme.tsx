import {
  ThemeProvider as StyledThemeProvider,
  createGlobalStyle,
  type DefaultTheme,
} from "styled-components";

// fonts
import Circular from "../assets/fonts/circular-std-medium-500.ttf";
import Koulen from "../assets/fonts/Koulen-Regular.ttf";

export const GlobalStyle = createGlobalStyle`
  html, body {
    display: block;
    margin: 0rem;
    padding: 0;
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'Circular';
    src: url(${Circular}) format('truetype');
  }
  
  @font-face {
    font-family: 'Koulen';
    src: url(${Koulen}) format('truetype');
  }
`;

const theme: DefaultTheme = {
  colors: {
    paleTeal: "#87CAC1",
    darkTurquoise: "#05C8C6",
    ebonyClay: "#232E41",
    aqua: "#E6F5F3",
    emeral: "#34D399",
    lightGray: "#D8E7FB",
    smoothGray: "#e0e0e0",
    white: "#ffffff",
  },
  fontFamily: {
    circular: "Circular Std, sans-serif",
    koulen: "Koulen",
  },
  bp: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
};

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
}

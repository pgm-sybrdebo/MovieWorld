import { useContext } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { ThemeContext } from "./ThemeContext";

const themes = {
  dark: {
    backgroundColor: "#191A32",
    textColor: '#DFE1EC',
    iconColor: '#DFE1EC',
    primaryColor: '#191A32',
    secondaryColor: '#dfe1ec',
    primaryShadow: 'rgba(255, 255, 255, 0.16)',
    secondaryShadow: 'rgba(255, 255, 255, 0.06)',
  },
  light: {
    backgroundColor: '#dfe1ec',
    textColor: '#191A32',
    iconColor: '#191A32',
    primaryColor: '#dfe1ec',
    secondaryColor: '#191A32',
    primaryShadow: 'rgba(0, 0, 0, 0.16)',
    secondaryShadow: 'rgba(0, 0, 0, 0.06)',
  }
  
}



const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    transition: all 0.2s;
  }

  body {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  h1 {
    font-size: 2rem;
    line-height: 1;
    font-weight: bold;

    @media (min-width: 52rem) {
        font-size: 3rem;
    }
  }

  h2 {
    font-size:1.8rem;
    line-height: 1;
    font-weight: bold;

    @media (min-width: 52rem) {
      font-size: 2rem;
    }
  }

  h3 {
    font-size: 1.5rem;
    font-weight: bold;

    @media (min-width: 52rem) {
        font-size: 2rem;
    }
  }

  p {
  font-size: 1rem;
  line-height: 1.5;
  }

  button {
    padding: 0;
    margin: 0;
  }

`;

const Theme = ({ children }) => {
  const { theme } = useContext(ThemeContext); 
  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
    background: black;
  }
  ul,img,button,summary{
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyle;
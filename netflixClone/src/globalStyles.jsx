import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    width: 100%;
    height: 100%;
    display: block;
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
    background: black;
    color: white;
  }
  ul,img,button,summary,h1,h2,h3,h4,h5,h6{
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyle;
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #EAEAEA;
    color: #B0BEC4;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px Nunito Sans, sans-serif;
  }

  a {
    text-decoration: none;

  }

  #root {
    /*max-width: 1300px;
    margin: 0 auto;
    padding: 0px 45px; */
  }

  button {
    cursor: pointer;
  }
`;

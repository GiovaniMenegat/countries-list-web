import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px Nunito Sans, sans-serif;
  }

  button {
    color: ${props => props.theme.colors.text};
  }

  input{
    color: ${props => props.theme.colors.text};
    background-color: ${props => props.theme.colors.input};
  }

  select {
    color: ${props => props.theme.colors.text};
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

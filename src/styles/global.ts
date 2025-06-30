import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html, body, #root {
    width: 100vw;
    height: 100vh;

    margin: 0;
    padding: 0;
    box-sizing: border-box;

    background-color:#f3f3f5;

    font-family: 'Inter', 'system-ui', 'sans-serif';
    color: #1F2937;
  }
  main {
    display: flex;

    height: 100%;

    justify-content: center;
    align-items: center;
  }
`;

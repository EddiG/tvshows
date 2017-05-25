import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  *, *:before, *:after {
    box-sizing: border-box;
  }

  html
  {
    height: 100%;
    width: 100%;
  }

  body {
    margin: 0;
    min-height: 100vh;
    font-size: 100%;
    line-height: 1.5;
    background-color: seagreen;
  }

  body {
    font-family:  sans-serif;
  }
`;

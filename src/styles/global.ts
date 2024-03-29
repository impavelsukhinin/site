import { createGlobalStyle } from 'styled-components'

const GlobalStyleBase = createGlobalStyle`
  @font-face {
    font-family: 'Muller';
    src: url('/Muller.otf');
  }

  ::selection {
    color: white;
    background: #000;
  }

  html,
  body,
  #root {
    font-size: 16px;
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Helvetica Neue', Helvetica, Arial, Times, system-ui;
    line-height: 1.42;
  }

  @media only screen and (max-width: 445px) {
    body,
    html {
      font-size: 14px;
    }
  }
`

/**
  @see https://github.com/styled-components/styled-components/issues/3738
*/
export const GlobalStyle = GlobalStyleBase as any

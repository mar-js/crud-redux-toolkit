import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --font-family: 'Josefin Sans', sans-serif;
    --font-weight-light: 200;
    --font-weight-regular: 400;
    --font-weight-bold: 600;

    --color-green: #5fd757;
    --color-red: #ff4242;
    --color-orange: #e97036;
    --color-blue: #4295ff;
    --color-white: #ffffff;
    --color-black: #333333;
    --color-black-opacity: #333333ba;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 10px;

    body {
      font-family: var(--font-family);
      background-color: var(--color-white);
      color: var(--color-black);

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-weight: var(--font-weight-bold)
      }


      a {
        text-decoration: none;
        font-weight: var(--font-weight-regular)
      }

      button {
        font-weight: var(--font-weight-bold)
      }
    }
  }
`

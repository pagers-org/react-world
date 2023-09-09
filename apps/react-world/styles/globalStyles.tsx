import { css } from '@emotion/react';

const globalStyles = css`
  @font-face {
    font-family: 'Titillium Web';
    src: url('/fonts/TitilliumWeb/TitilliumWeb-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Titillium Web';
    src: url('/fonts/TitilliumWeb/TitilliumWeb-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Titillium Web';
    src: url('/fonts/TitilliumWeb/TitilliumWeb-Semibold.ttf') format('truetype');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'Source Sans Pro';
    src: url('/fonts/SourceSansPro/SourceSansPro-Bold.otf') format('opentype');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Source Sans Pro';
    src: url('/fonts/SourceSansPro/SourceSansPro-Semibold.otf')
      format('opentype');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'Source Sans Pro';
    src: url('/fonts/SourceSansPro/SourceSansPro-Regular.otf')
      format('opentype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Source Sans Pro';
    src: url('/fonts/SourceSansPro/SourceSansPro-Light.otf') format('opentype');
    font-weight: 300;
    font-style: normal;
  }

  html {
    font-family: sans-serif;
    position: relative;
    min-height: 100vh;
    padding-bottom: 100px;
    box-sizing: border-box;
    font-size: 16px;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 1rem;
    line-height: 1.5;
    color: #373a3c;
    background-color: #fff;
    margin: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 0;
    margin-bottom: 0.5rem;
  }

  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  a {
    color: #5cb85c;
    text-decoration: none;
    background-color: transparent;
  }

  a:focus,
  a:hover {
    color: #3d8b3d;
    text-decoration: underline;
  }

  hr {
    margin-top: 1rem;
    margin-bottom: 1rem;
    border: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }
`;

export default globalStyles;

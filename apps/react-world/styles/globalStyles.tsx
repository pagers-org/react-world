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
`;

export default globalStyles;

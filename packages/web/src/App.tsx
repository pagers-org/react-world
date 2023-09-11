import { Global, ThemeProvider } from '@emotion/react';
import { color } from '@miso/common';

import Routes from '@/pages/routes';
import { globalStyles } from '@/styles/globalStyles';

const App = () => {
  return (
    <ThemeProvider theme={color}>
      <Global styles={globalStyles} />
      <Routes />
    </ThemeProvider>
  );
};

export default App;

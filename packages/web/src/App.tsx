import { Global, ThemeProvider } from "@emotion/react";
import { color } from "@miso/common";

import { globalStyles } from "styles/globalStyles";
import Routes from "pages/routes";

const App = () => {
  return (
    <ThemeProvider theme={color}>
      <Global styles={globalStyles} />
      <Routes />
    </ThemeProvider>
  );
};

export default App;

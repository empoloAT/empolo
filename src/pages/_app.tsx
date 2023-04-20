import "@fontsource/golos-ui";;
import type { AppProps } from "next/app";
import { FunctionComponent } from "react";
import "../styles/globals.css";

const App: FunctionComponent<AppProps> = ({
  Component,
  pageProps: { ...pageProps },
}) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    getLayout(<Component {...pageProps} />)
  );
};

export default App;

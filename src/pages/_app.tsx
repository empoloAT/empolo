import "@fontsource/golos-ui";;
import type { AppProps } from "next/app";
import { FunctionComponent } from "react";
import { ApolloProvider } from "@apollo/client";
import { client } from "../lib/apollo";
import "../styles/globals.css";

const App: FunctionComponent<AppProps> = ({
  Component,
  pageProps: { ...pageProps },
}) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <ApolloProvider client={ client }>
      {getLayout(<Component {...pageProps} />)}
    </ApolloProvider>
  );
};

export default App;

import "@fontsource/golos-ui";;
import type { AppProps } from "next/app";
import type { NextPage } from "next";
import { FunctionComponent, ReactElement, ReactNode } from "react";
import { ApolloProvider } from "@apollo/client";
import { client } from "../lib/apollo";
import "../styles/globals.css";

type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const App: FunctionComponent<AppProps> = ({
  Component,
  pageProps,
}: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <ApolloProvider client={ client }>
      {getLayout(<Component {...pageProps} />)}
    </ApolloProvider>
  );
};

export default App;

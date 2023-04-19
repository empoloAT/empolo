import "@fontsource/golos-ui";
import type { GlobalState } from "little-state-machine";
import { createStore, StateMachineProvider } from "little-state-machine";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { FunctionComponent } from "react";
import { SWRConfig } from "swr";
import "../styles/globals.css";

function log(store: GlobalState) {
  return store;
}

const middleWares = process.env.NODE_ENV === "development" ? [log] : [];

createStore(
  {
    scratchCode: "",
    referralCode: "",
    userDetails: { email: "", name: "" },
    loginStep: "",
  },
  { middleWares }
);

const App: FunctionComponent<AppProps> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <SessionProvider session={session}>
      <StateMachineProvider>
        <SWRConfig>{getLayout(<Component {...pageProps} />)}</SWRConfig>
      </StateMachineProvider>
    </SessionProvider>
  );
};

export default App;

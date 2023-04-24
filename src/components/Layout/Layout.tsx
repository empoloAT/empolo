import { FunctionComponent, ReactNode } from "react";
import { Header } from "components";

import styles from "./layout.module.scss";

type TProps = {
  children: ReactNode;
}

export const Layout: FunctionComponent<TProps> = ({ children }) => {
  return (
    <div className={styles.component}>
      <Header />
      <main className={styles.main}>
        {children}
      </main>
    </div>
  );
};

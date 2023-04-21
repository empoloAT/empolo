import { FunctionComponent, ReactNode } from "react";
import { Container, Header } from "components";

import styles from "./layout.module.scss";

type TProps = {
  children: ReactNode;
}

export const Layout: FunctionComponent<TProps> = ({ children }) => {
  return (
    <div className={styles.component}>
      <Container>
      <Header />
        <main className={styles.main}>
          {children}
        </main>
      </Container>
    </div>
  );
};

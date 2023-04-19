import { FunctionComponent, ReactNode } from "react";
import { Container, Header } from "components";

import styles from "./layout.module.scss";

type TProps = {
  children: ReactNode;
}

export const Layout: FunctionComponent<TProps> = ({ children }) => {
  return (
    <Container>
      <Header />
        <main className={styles.main}>
          {children}
        </main>
    </Container>
  );
};

import { FunctionComponent } from "react";
import { LogoButton, H1, Container } from "components";

import styles from "./empoloSection.module.scss";

type TProps = {
  title: string,
};

export const EmpoloContent: FunctionComponent<TProps> = ({ title }) => {
  return (
    <Container>
      <div className={styles.content}>
        <H1 className={styles.title}>{title}</H1>
        <LogoButton>Let{"\u2019"}s Talk</LogoButton>
      </div>
    </Container>
  );
};

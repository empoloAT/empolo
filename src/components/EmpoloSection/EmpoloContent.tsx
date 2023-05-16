import { FunctionComponent } from "react";
import { LogoButton, H1, Container } from "components";

import styles from "./empoloSection.module.scss";

type TProps = {
  title: string;
  onClick?: () => void;
};

export const EmpoloContent: FunctionComponent<TProps> = ({ title, onClick }) => {
  return (
    <Container>
      <div className={styles.content}>
        <H1 className={styles.title}>{title}</H1>
        <LogoButton
          onClick={onClick}
        >
          Let{"\u2019"}s Talk
        </LogoButton>
      </div>
    </Container>
  );
};

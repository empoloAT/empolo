import { FunctionComponent } from "react";
import { Container, H2, LogoButton } from "components";

import styles from "./cooperationSection.module.scss";

type TProps = {
  posts: {
    cooperationTitle: string
  }
};

export const CooperationSection: FunctionComponent<TProps> = ({ posts }) => {
  return (
    <section>
      <Container>
        <div className={styles.component}>
          <H2>{posts.cooperationTitle}</H2>
          <LogoButton>Let{"\u2019"}s Talk</LogoButton>
        </div>
      </Container>
    </section>
  );
};

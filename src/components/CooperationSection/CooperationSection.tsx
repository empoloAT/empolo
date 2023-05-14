import { FunctionComponent } from "react";
import { Container, H2, LogoButton } from "components";

import styles from "./cooperationSection.module.scss";

type TProps = {
  posts: {
    cooperationTitle: string;
  };
  onClick?: () => void;
};

export const CooperationSection: FunctionComponent<TProps> = ({ posts, onClick }) => {
  return (
    <section>
      <Container>
        <div className={styles.component}>
          <H2 className={styles.title}>{posts.cooperationTitle}</H2>
          <LogoButton
            onClick={onClick}
          >
            Let{"\u2019"}s Talk
          </LogoButton>
        </div>
      </Container>
    </section>
  );
};

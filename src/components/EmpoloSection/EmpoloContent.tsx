import { LogoButton, H1, Container } from "components";

import styles from "./empoloSection.module.scss";

export const EmpoloContent = () => {
  return (
    <Container>
      <div className={styles.content}>
        <H1 className={styles.title}>Empolo ist ein Kollektiv aus Experten aus allen digitalen Bereichen, die Unternehmen bei Ihrem Wachstum unterstützen.</H1>
        <LogoButton>Let{"\u2019"}s Talk</LogoButton>
      </div>
    </Container>
  );
};

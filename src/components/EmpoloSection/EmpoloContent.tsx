import { LogoButton, H1 } from "components";

import styles from "./empoloSection.module.scss";

export const EmpoloContent = () => {
  return (
    <div className={styles.content}>
      <H1 className={styles.title}>Empolo ist ein Kollektiv aus Experten aus allen digitalen Bereichen, die Unternehmen bei Ihrem Wachstum unterstützen.</H1>
      <LogoButton>Let{"\u2019"}s Talk</LogoButton>
    </div>
  );
};

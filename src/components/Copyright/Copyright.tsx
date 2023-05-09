import { P } from "components";

import styles from "./copyright.module.scss";

export const Copyright = () => {
  return (
    <div className={styles.component}>
      <P className={styles.title}>Empolo 2023 ©All rights reserved</P>
    </div>
  );
};

import { P } from "components";

import styles from "./contacts.module.scss";

export const Contacts = () => {
  return (
    <div className={styles.component}>
      <P className={styles.subtitle}>+43660 157 8989</P>
      <P className={styles.subtitle}>Eragasse 10 I 6900 Bregenz I AUT</P>
      <P className={styles.subtitle}>marko.kalabota@empolo.at</P>
    </div>
  );
};

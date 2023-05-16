import { P } from "components";

import styles from "./contacts.module.scss";

export const Contacts = () => {
  return (
    <address className={styles.component}>
      <a className={styles.subtitle} href="+436601578989">+43660 157 8989</a>
      <P className={styles.subtitle}>Eragasse 10 I 6900 Bregenz I AUT</P>
      <a className={styles.subtitle} href="mailto:marko.kalabota@empolo.at">marko.kalabota@empolo.at</a>
    </address>
  );
};

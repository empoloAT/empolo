import { P } from "components";

import styles from "./contacts.module.scss";

export const Contacts = () => {
  return (
    <address className={styles.component}>
      <a className={styles.subtitle} href="tel:+435572428608">+435572 428608</a>
      <P className={styles.subtitle}>Eragasse 10 I 6900 Bregenz I AUT</P>
      <a className={styles.subtitle} href="mailto:office@empolo.at">office@empolo.at</a>
    </address>
  );
};

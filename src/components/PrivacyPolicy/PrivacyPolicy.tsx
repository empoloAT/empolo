import Link from "next/link";

import styles from "./privacyPolicy.module.scss";

export const PrivacyPolicy = () => {
  return (
    <div className={styles.component}>
      <Link href="/">
        Privacy Policy
      </Link>
    </div>
  );
};

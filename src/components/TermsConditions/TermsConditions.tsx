import Link from "next/link";

import styles from "./termsConditions.module.scss";

export const TermsConditions = () => {
  return (
    <div className={styles.component}>
      <Link href="/">
        Terms & Conditions
      </Link>
    </div>
  );
};

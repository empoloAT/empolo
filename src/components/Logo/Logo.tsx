import Image from "next/image";

import styles from "./logo.module.scss";
import logoSrc from "./Logo.svg";
import companySrc from "./Company.svg";

export const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <Image className={styles.image} src={logoSrc} alt="Logo" />
      <Image className={styles.companyName} src={companySrc} alt="Company" />
    </div>
  );
};

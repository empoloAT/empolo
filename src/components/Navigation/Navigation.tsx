import Link from "next/link";

import styles from "./navigation.module.scss";

export const Navigation = () => {
  return (
    <nav className={styles.component}>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link href="/">
            About Us
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/">
            Services
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/">
            Projects
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/">
            Team
          </Link>
        </li>
      </ul>
    </nav>
  );
};

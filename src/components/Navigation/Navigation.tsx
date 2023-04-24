import Link from "next/link";
import { FunctionComponent } from "react"

import styles from "./navigation.module.scss";

export const Navigation: FunctionComponent = () => {
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
  )
};

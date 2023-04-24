import Link from "next/link";
import { FunctionComponent } from "react"

import styles from "./navigation.module.scss";

export const Navigation: FunctionComponent = () => {
  return (
    <nav className={styles.component}>
      <ul className={styles.list}>
        <Link href="/">
          <li className={styles.listItem}>
            <a href="">
              About Us
            </a>
          </li>
        </Link>
        <Link href="/">
          <li className={styles.listItem}>
            <a href="">
              Services
            </a>
          </li>
        </Link>
        <Link href="/">
          <li className={styles.listItem}>
            <a href="">
              Projects
            </a>
          </li>
        </Link>
        <Link href="/">
          <li className={styles.listItem}>
            <a href="">
              Team
            </a>
          </li>
        </Link>
      </ul>
    </nav>
  )
};

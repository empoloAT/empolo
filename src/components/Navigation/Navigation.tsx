import { FunctionComponent } from "react"

import styles from "./navigation.module.scss";

export const Navigation: FunctionComponent = () => {
  return (
    <nav className={styles.component}>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <a href="">
            About Us
          </a>
        </li>
        <li className={styles.listItem}>
          <a href="">
            Services
          </a>
        </li>
        <li className={styles.listItem}>
          <a href="">
            Projects
          </a>
        </li>
        <li className={styles.listItem}>
          <a href="">
            Team
          </a>
        </li>
      </ul>
    </nav>
  )
};

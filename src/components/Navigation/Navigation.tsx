import classNames from "classnames";
import { useContext } from "react";
import Link from "next/link";
import { BurgerContext } from "context";

import styles from "./navigation.module.scss";

type Props = {
  className?: string;
  direction?: "column";
};

export const Navigation = ({ className: propsClassName, direction }: Props) => {
  const navigationStyles = classNames(styles.component, propsClassName);
  const listDirection = classNames({ [styles.columnDirection]: direction === "column" });
  const listStyles = classNames(styles.list, listDirection)
  const { activeBurger, setActiveBurger} = useContext(BurgerContext);

  return (
    <nav className={navigationStyles}>
      <ul className={activeBurger ? styles.activeBurger : listStyles}>
        <li className={styles.link}>
          <Link href="#about-us">
            About Us
          </Link>
        </li>
        <li className={styles.link}>
          <Link href="#skill-cards">
            Services
          </Link>
        </li>
        <li className={styles.link}>
          <Link href="#real-cases">
            Projects
          </Link>
        </li>
        <li className={styles.link}>
          <Link href="#our-team">
            Team
          </Link>
        </li>
      </ul>
    </nav>
  );
};

import { useContext } from "react";
import { Navigation, CrossButton } from "components";
import { BurgerContext } from "context";


import styles from "./burgerMenu.module.scss";

export const BurgerMenu = () => {
  const { activeBurger, setActiveBurger } = useContext(BurgerContext);

  return (
    <div className={activeBurger ? styles.activeComponent : styles.component}>
      <div className={styles.burger}>
        <Navigation
          className={styles.navigation}
        />
        <CrossButton />
      </div>
    </div>
  );
};

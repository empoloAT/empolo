import Image from "next/image";
import { useContext } from "react";
import { Button } from "components";
import { BurgerContext } from "context";

import styles from "./button.module.scss";
import crossSrc from "./img/Cross.svg";

export const CrossButton = () => {
  const { activeBurger, setActiveBurger } = useContext(BurgerContext);
  const handleClick = () => 
    setActiveBurger((activeBurger) => !activeBurger);
    
  return (
    <Button
      className={styles.burgerButton}
      size="none"
    >
      <Image src={crossSrc} alt="Cross" fill/>
    </Button>
  );
};

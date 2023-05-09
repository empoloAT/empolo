import Image from "next/image";
import { useContext } from "react";
import { BurgerContext } from "context";
import { Button } from "components";

import styles from "./button.module.scss";
import burgerSrc from "./img/Burger.svg";

export const BurgerButton = () => {
  const { activeBurger, setActiveBurger} = useContext(BurgerContext);
  const handleBurgerClick = () =>
    setActiveBurger((activeBurger) => !activeBurger);

  return (
    <Button
      size="none"
      onClick={handleBurgerClick}
    >
      <Image src={burgerSrc} alt="Burger" />
    </Button>
  );
};

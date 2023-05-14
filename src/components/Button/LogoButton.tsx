import { ReactNode } from "react";
import { useToggle, useWindowSize } from "hooks";
import { Button } from "components";
import { ButtonArrow } from "./img/ButtonArrow";

import styles from "./button.module.scss";

type Props = {
  children: ReactNode;
  onClick?: () => void;
}

export const LogoButton = ({ children, onClick }: Props) => {
  const [ isHovered, toggleHover ] = useToggle();
  const { isLaptop } = useWindowSize();

  return (
    <Button
      className={styles.logoButton}
      size="l"
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      onClick={onClick}
    >
      {children}
      <ButtonArrow
        isHovered={isHovered}
        isLaptop={isLaptop}
      />
    </Button>
  )
}
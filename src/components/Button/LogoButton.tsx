import Image from "next/image";
import { ReactNode } from "react";
import { Button } from "components"
import logoSrc from "./img/ButtonArrow.svg";

import styles from "./button.module.scss";

type Props = {
  children: ReactNode;
}

export const LogoButton = ({ children }: Props) => {
  return (
    <Button
      size="l"
    >
      {children}
      <Image
        className={styles.logoButton}
        src={logoSrc} 
        alt="Arrow"
      />
    </Button>
  )
}
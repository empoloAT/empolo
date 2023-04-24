import Image from "next/image";
import { ReactNode } from "react";
import { Button } from "components"
import logoSrc from "./ButtonArrow.svg";

type Props = {
  children: ReactNode;
}

export const LogoButton = ({ children }: Props) => {
  return (
    <Button
      size="l"
    >
      {children}
      <Image src={logoSrc} alt="Arrow" />
    </Button>
  )
}
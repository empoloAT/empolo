import Link from "next/link";
import { useContext, useRef } from "react";
import {
  Logo,
  Navigation,
  Button,
  Container,
  BurgerButton
} from "components";
import { useWindowSize, useClickOutside } from "hooks";
import { BurgerContext } from "context";

import styles from "./header.module.scss";

export const Header = () => {
  const { isLaptop, isLaptopS } = useWindowSize();
  const { activeBurger, setActiveBurger } = useContext(BurgerContext);
  const burgerRef = useRef<HTMLDivElement>(null);
  useClickOutside(burgerRef, () => setActiveBurger(false));

  return (
    <Container>
      <div className={styles.component}>
        <Logo />
        {isLaptop ?
          <div className={styles.burgerContainer} ref={burgerRef}>
            {!isLaptopS &&
              <Link href="#contact-us">
                <Button
                  className={styles.headerButton}
                  size="s"
                >
                  Contact Now
                </Button>
              </Link>
            }
            <BurgerButton />
          </div>
          :
          <>
            <Navigation />
            <Link href="#contact-us">
              <Button
                className={styles.headerButton}
                size="s" 
              >
                Contact Now
              </Button>
            </Link>
          </>
        }
      </div>
    </Container>
  );
};

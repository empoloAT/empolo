import classNames from "classnames";
import { golos } from "styles/fonts/golos";
import { FunctionComponent, ReactNode, useState, useRef } from "react";
import { useWindowSize } from "hooks";
import { BurgerContext } from "context";
import { Header, Footer, BurgerMenu, ScrollButton, CookieBannerComponent } from "components";

import styles from "./layout.module.scss";

type TProps = {
  children: ReactNode;
}

export const Layout: FunctionComponent<TProps> = ({ children }) => {
  const [ activeBurger, setActiveBurger ] = useState(false);
  const { isLaptop } = useWindowSize();
  const headerRef = useRef<HTMLDivElement>(null);
  
  const handleClick = () => {
    if (headerRef.current) {
      headerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={headerRef} className={classNames(styles.component, golos.className)}>
      {activeBurger ?
        <style jsx global>{`
            body {
              overflow-y: hidden;
            }
        `}</style>
      :
        <style jsx global>{`
            body {
              overflow-y: auto;
            }
        `}</style>
      }
      <BurgerContext.Provider value={{ activeBurger, setActiveBurger }}>
        <Header />
        <main className={styles.main}>
          <ScrollButton 
            onClick={handleClick}
          />
          {isLaptop && (
            <BurgerMenu />
          )}
          {children}
        </main>
        <Footer />
        <CookieBannerComponent />
      </BurgerContext.Provider>
    </div>
  );
};

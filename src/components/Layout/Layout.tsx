import { FunctionComponent, ReactNode, useState } from "react";
import { useWindowSize } from "hooks";
import { BurgerContext } from "context";
import { Header, Footer, BurgerMenu } from "components";

import styles from "./layout.module.scss";

type TProps = {
  children: ReactNode;
}

export const Layout: FunctionComponent<TProps> = ({ children }) => {
  const [ activeBurger, setActiveBurger ] = useState(false);
  const { isLaptop } = useWindowSize();
  
  return (
    <div className={styles.component}>
      <BurgerContext.Provider value={{ activeBurger, setActiveBurger }}>
        <Header />
        <main className={styles.main}>
          {children}
          {isLaptop && (
            <BurgerMenu />
          )}
        </main>
        <Footer />
      </BurgerContext.Provider>
    </div>
  );
};

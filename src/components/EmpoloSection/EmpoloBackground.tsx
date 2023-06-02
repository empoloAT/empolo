import { FunctionComponent, useContext } from "react";
import { BurgerContext } from "context";
import styles from "./empoloSection.module.scss";

type TProps = {
  url: string;
};

export const EmpoloBackground: FunctionComponent<TProps> = ({ url }) => {
  const { activeBurger, setActiveBurger } = useContext(BurgerContext);
  
  return (
    <section className={styles.component}>
      <video src={url} className={styles.video} autoPlay loop muted playsInline />
      <div className={styles.shadow}></div>
      {activeBurger &&
        <div className={styles.activeBurgerShadow}></div>
      }
    </section>
  )
};

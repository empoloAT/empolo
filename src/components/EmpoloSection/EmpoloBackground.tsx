import { FunctionComponent } from "react";
import styles from "./empoloSection.module.scss";

type TProps = {
  url: string;
};

export const EmpoloBackground: FunctionComponent<TProps> = ({ url }) => {
  return (
    <section className={styles.component}>
      <video src={url} className={styles.video} autoPlay loop muted />
      <div className={styles.shadow}></div>
    </section>
  )
};

import { FunctionComponent } from "react";
import { P, H3 } from "components";

import styles from "./skillCard.module.scss";

type TProps = {
  number: string;
  title: string;
  subtitle: string;
};

export const SkillCard: FunctionComponent<TProps> = ({
  number,
  title,
  subtitle
}) => {
  return (
    <div className={styles.component}>
      <P className={styles.number}>{number}</P>
      <H3 className={styles.title}>{title}</H3>
      <P className={styles.subtitle}>{subtitle}</P>
    </div>
  );
};

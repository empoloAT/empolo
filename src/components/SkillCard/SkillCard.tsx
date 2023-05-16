import { FunctionComponent, Dispatch, SetStateAction } from "react";
import { P, H3 } from "components";

import styles from "./skillCard.module.scss";

type TProps = {
  number: string;
  title: string;
  subtitle: string;
  activeTab: number;
  setActiveTab: Dispatch<SetStateAction<number>>;
  index: number;
};

export const SkillCard: FunctionComponent<TProps> = ({
  number,
  title,
  subtitle,
  activeTab,
  setActiveTab,
  index
}) => {
  const isActive = index === activeTab;

  const handleClick = () => {
    setActiveTab(index);
  };

  return (
    <div className={styles.component} onClick={handleClick}>
      <P className={styles.number}>{number}</P>
      <H3 className={styles.title}>{title}</H3>
      {isActive && <P className={styles.subtitle}>{subtitle}</P>}
    </div>
  );
};

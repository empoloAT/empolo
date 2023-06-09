import Image from "next/image";
import { FunctionComponent } from "react";
import { H3, P } from "components";

import styles from "./coreBusinessCard.module.scss";

type TProps = {
  imageSrc: string;
  number: string;
  title: string;
  subtitle: string;
};

export const CoreBusinessCard: FunctionComponent<TProps> = ({
  imageSrc,
  number,
  title,
  subtitle
}) => {
  return (
    <div className={styles.component}>
      <Image
        src={imageSrc}
        alt="Image"
        className={styles.image}
      />
      <div>
        <P className={styles.number}>{number}</P>
        <H3 className={styles.title}>{title}</H3>
        <P className={styles.subtitle}>{subtitle}</P>
      </div>
    </div>
  );
};

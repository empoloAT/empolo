import Image from "next/image";
import { FunctionComponent } from "react";
import { H3, P } from "components";
import { useToggle } from "hooks";

import styles from "./realCasesImage.module.scss";

type TProps = {
  title: string,
  subtitle: string,
  src: string,
  width: number,
  height: number,
};

export const RealCasesImage: FunctionComponent<TProps> = ({
  title,
  subtitle,
  src,
  width,
  height
}) => {
  const [ isHovered, toggleHover ] = useToggle();
  
  return (
    <div className={styles.imageWrapper}>
      <Image
        className={styles.image}
        src={src}
        alt="Image"
        width={width}
        height={height}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
      />
      <div 
        className={isHovered ? styles.imageHovered : styles.imageNotHovered}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
      >
        <H3>{title}</H3>
        <P className={styles.subtitle}>{subtitle}</P>
      </div>
    </div>
  );
};

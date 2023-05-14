import Image from "next/legacy/image";
import { FunctionComponent } from "react";
import { useWindowSize } from "hooks";
import { H3, P } from "components";
import { useToggle } from "hooks";

import styles from "./realCasesImage.module.scss";

type TProps = {
  title: string;
  subtitle: string;
  src: string;
  width: number;
  height: number;
  className?: string;
};

export const RealCasesImage: FunctionComponent<TProps> = ({
  title,
  subtitle,
  src,
  width,
  height,
  className: propsClassName = "",
}) => {
  const [ isHovered, toggleHover ] = useToggle();
  const { isLaptop } = useWindowSize();

  return (
    <div className={`${styles.imageWrapper} ${propsClassName}`}>
      <Image
        className={styles.image}
        src={src}
        alt="Image"
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
        style={{ objectFit: "cover" }}
        width={width}
        height={height}
        layout="fill"
      />
      {isLaptop ?
        <div className={styles.imageHovered}>
          <H3>{title}</H3>
          <P className={styles.subtitle}>{subtitle}</P>
        </div>
      :
        <div
          className={isHovered ? styles.imageHovered : styles.imageNotHovered}
          onMouseEnter={toggleHover}
          onMouseLeave={toggleHover}
        >
          <H3>{title}</H3>
          <P className={styles.subtitle}>{subtitle}</P>
        </div>
      }
    </div>
  );
};

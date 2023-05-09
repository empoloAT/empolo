import Image from "next/image";

import styles from "./infiniteSlider.module.scss";
import DiePostSrc from "./img/DiePost.svg";
import OracleSrc from "./img/Oracle.svg";
import ParamountSrc from "./img/Paramount.svg";

export const InfiniteSlider = () => {
  return (
    <div className={styles.component}>
      <div className={styles.sliderTrack}>
        <Image className={styles.image} src={DiePostSrc} alt="Logo" />
        <Image className={styles.image} src={OracleSrc} alt="Logo" />
        <Image className={styles.image} src={ParamountSrc} alt="Logo" />
        <Image className={styles.image} src={DiePostSrc} alt="Logo" />
        <Image className={styles.image} src={OracleSrc} alt="Logo" />
        <Image className={styles.image} src={ParamountSrc} alt="Logo" />
      </div>
      <div className={styles.sliderTrack}>
        <Image className={styles.image} src={DiePostSrc} alt="Logo" />
        <Image className={styles.image} src={OracleSrc} alt="Logo" />
        <Image className={styles.image} src={ParamountSrc} alt="Logo" />
        <Image className={styles.image} src={DiePostSrc} alt="Logo" />
        <Image className={styles.image} src={OracleSrc} alt="Logo" />
        <Image className={styles.image} src={ParamountSrc} alt="Logo" />
      </div>
    </div>
  );
};

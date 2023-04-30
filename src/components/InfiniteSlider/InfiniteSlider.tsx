import Image from "next/image";

import styles from "./infiniteSlider.module.scss";
import DiePostSrc from "./img/DiePost.svg";
import OracleSrc from "./img/Oracle.svg";
import ParamountSrc from "./img/Paramount.svg";

export const InfiniteSlider = () => {
  return (
    <div className={styles.component}>
      <div className={styles.sliderTrack}>
        <Image src={DiePostSrc} alt="Logo" />
        <Image src={OracleSrc} alt="Logo" />
        <Image src={ParamountSrc} alt="Logo" />
        <Image src={DiePostSrc} alt="Logo" />
        <Image src={OracleSrc} alt="Logo" />
        <Image src={ParamountSrc} alt="Logo" />
      </div>
      <div className={styles.sliderTrack}>
        <Image src={DiePostSrc} alt="Logo" />
        <Image src={OracleSrc} alt="Logo" />
        <Image src={ParamountSrc} alt="Logo" />
        <Image src={DiePostSrc} alt="Logo" />
        <Image src={OracleSrc} alt="Logo" />
        <Image src={ParamountSrc} alt="Logo" />
      </div>
    </div>
  );
};

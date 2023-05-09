import Image from "next/image";

import styles from "./social.module.scss";
import facebookSrc from "./img/Facebook.svg";
import linkedInSrc from "./img/LinkedIn.svg";
import instagramSrc from "./img/Instagram.svg";
import twitterSrc from "./img/Twitter.svg";

export const Social = () => {
  return (
    <div className={styles.component}>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <a href="#">
            <Image src={facebookSrc} alt="Facebook" fill />
          </a>
        </li>
        <li className={styles.listItem}>
          <a href="#">
            <Image src={linkedInSrc} alt="LinkedIn" fill />
          </a>
        </li>
        <li className={styles.listItem}>
          <a href="#">
            <Image src={instagramSrc} alt="Instagram" fill />
          </a>
        </li>
        <li className={styles.listItem}>
          <a href="#">
            <Image src={twitterSrc} alt="Twitter" fill />
          </a>
        </li>
      </ul>
    </div>
  );
};

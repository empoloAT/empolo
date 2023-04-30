import Image from "next/image";
import { FunctionComponent } from "react";
import { H2, P, LogoButton } from "components";

import styles from "./OurTeam.module.scss";

type TProps = {
  posts: {
    ourTeamTitle: string,
  },
  urls: {
    seventhImageUrl: string,
  }
};

export const OurTeam: FunctionComponent<TProps> = ({ posts, urls }) => {
  return (
    <div className={styles.component}>
      <div className={styles.titleWrapper}>
        <H2>Our Team</H2>
        <P className={styles.subtitle}>{posts.ourTeamTitle}</P>
        <LogoButton>Join Our Team</LogoButton>
      </div>
      <div className={styles.imagesWrapper}>
        <Image
          className={styles.image}
          src={urls.seventhImageUrl}
          alt="Image"
          width={608}
          height={730}
        />
      </div>
    </div>
  );
};

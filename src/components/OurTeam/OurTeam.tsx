import Image from "next/image";
import { FunctionComponent } from "react";
import { useWindowSize } from "hooks";
import { H2, P, LogoButton, Container } from "components";

import styles from "./OurTeam.module.scss";

type TProps = {
  posts: {
    ourTeamTitle: string;
  },
  urls: {
    seventhImageUrl: string;
  }
};

export const OurTeam: FunctionComponent<TProps> = ({ posts, urls }) => {
  const { isLaptopM } = useWindowSize();

  return (
    <section className={styles.component}>
      <Container>
        {isLaptopM ?
          <div className={styles.contentWrapper}>
            <div className={styles.titleWrapper}>
              <H2>Our Team</H2>
              <P className={styles.subtitle}>{posts.ourTeamTitle}</P>
              <div className={styles.imagesWrapper}>
                <Image
                  className={styles.image}
                  src={urls.seventhImageUrl}
                  alt="Image"
                  fill
                />
              </div>
              <LogoButton>Join Our Team</LogoButton>
            </div>
          </div>
          :
          <div className={styles.contentWrapper}>
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
                fill
              />
            </div>
          </div>
        }
      </Container>
    </section>
  );
};

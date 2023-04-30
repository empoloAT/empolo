import Image from "next/image";
import { FunctionComponent } from "react";
import { Container, H2, H3, P } from "components";

import styles from "./aboutUsSection.module.scss";

type TProps = {
  firstUrl: string,
  secondUrl: string,
  posts: {
    firstTitle: string,
    secondTitle: string,
    thirdTitle: string,
    fourthTitle: string,
    fifthTitle: string,
  }
};

export const AboutUsSection: FunctionComponent<TProps> = ({
  firstUrl,
  secondUrl,
  posts
}) => {
  return (
    <section className={styles.component}>
      <Container>
        <H2 className={styles.mainTitle}>About Us</H2>
        <div className={styles.gridContainer}>
          <div className={styles.firstBlock}>
            <H3 className={styles.text}>{posts.firstTitle}</H3>
            <P className={styles.text}>{posts.secondTitle}</P>
          </div>
          <Image
            className={styles.image}
            src={firstUrl}
            alt="Image"
            width={668}
            height={440}
          />
          <Image
            className={styles.image}
            src={secondUrl}
            alt="Image"
            width={668}
            height={440}
          />
          <H3 className={styles.text}>{posts.thirdTitle}</H3>
          <H3 className={styles.text}>{posts.fourthTitle}</H3>
          <P className={styles.text}>{posts.fifthTitle}</P>
        </div>
      </Container>
    </section>
  );
};

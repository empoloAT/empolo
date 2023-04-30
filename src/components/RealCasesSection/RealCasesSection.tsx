import { FunctionComponent } from "react";
import { Container, H2, RealCasesImage } from "components";

import styles from "./realCasesSection.module.scss";

type TProps = {
  posts: {
    firstRealCasesTitle: string,
    firstRealCasesSubtitle: string,
    thirdRealCasesTitle: string,
    thirdRealCasesSubtitle: string,
    secondRealCasesTitle: string,
    secondRealCasesSubtitle: string,
    fourthRealCasesTitle: string,
    fourthRealCasesSubtitle: string,
  },
  urls: {
    thirdImageUrl: string,
    fifthImageUrl: string,
    fourthImageUrl: string,
    sixthImageUrl: string,
  },
};

export const RealCasesSection: FunctionComponent<TProps> = ({ posts, urls }) => {
  return (
    <section className={styles.component}>
      <Container>
        <H2>Real Cases</H2>
        <div className={styles.container}>
          <div className={styles.imagesContainer}>
            <RealCasesImage
              src={urls.thirdImageUrl}
              width={832}
              height={546}
              title={posts.firstRealCasesTitle}
              subtitle={posts.firstRealCasesSubtitle}
            />
            <RealCasesImage
              src={urls.fifthImageUrl}
              width={832}
              height={546}
              title={posts.thirdRealCasesTitle}
              subtitle={posts.thirdRealCasesSubtitle}
            />
          </div>
          <div className={styles.imagesContainer}>
            <RealCasesImage
              src={urls.fourthImageUrl}
              width={832}
              height={753}
              title={posts.secondRealCasesTitle}
              subtitle={posts.secondRealCasesSubtitle}
            />
            <RealCasesImage
              src={urls.sixthImageUrl}
              width={832}
              height={339}
              title={posts.fourthRealCasesTitle}
              subtitle={posts.fourthRealCasesSubtitle}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

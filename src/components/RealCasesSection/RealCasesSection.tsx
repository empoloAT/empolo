import { FunctionComponent } from "react";
import { Container, H2, RealCasesImage } from "components";

import styles from "./realCasesSection.module.scss";

type TProps = {
  posts: {
    firstRealCasesTitle: string;
    firstRealCasesSubtitle: string;
    thirdRealCasesTitle: string;
    thirdRealCasesSubtitle: string;
    secondRealCasesTitle: string;
    secondRealCasesSubtitle: string;
    fourthRealCasesTitle: string;
    fourthRealCasesSubtitle: string;
  },
  urls: {
    thirdImageUrl: string;
    fifthImageUrl: string;
    fourthImageUrl: string;
    sixthImageUrl: string;
  },
};

export const RealCasesSection: FunctionComponent<TProps> = ({ posts, urls }) => {
  return (
    <section id="realCases" className={styles.component}>
      <Container>
        <H2>Real Cases</H2>
        <div className={styles.container}>
            <RealCasesImage
              src={urls.thirdImageUrl}
              title={posts.firstRealCasesTitle}
              subtitle={posts.firstRealCasesSubtitle}
              width={832}
              height={546}
              className={styles.firstImage}
            />
            <RealCasesImage
              src={urls.fourthImageUrl}
              title={posts.secondRealCasesTitle}
              subtitle={posts.secondRealCasesSubtitle}
              width={832}
              height={753}
              className={styles.secondImage}
            />
            <RealCasesImage
              src={urls.fifthImageUrl}
              title={posts.thirdRealCasesTitle}
              subtitle={posts.thirdRealCasesSubtitle}
              width={832}
              height={546}
              className={styles.thirdImage}
            />
            <RealCasesImage
              src={urls.sixthImageUrl}
              title={posts.fourthRealCasesTitle}
              subtitle={posts.fourthRealCasesSubtitle}
              width={832}
              height={339}
              className={styles.fourthImage}
            />

        </div>
      </Container>
    </section>
  );
};

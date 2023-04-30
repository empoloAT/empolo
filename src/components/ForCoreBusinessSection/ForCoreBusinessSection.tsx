import { FunctionComponent } from "react";
import { Container, H2, CoreBusinessCard, InfiniteSlider } from "components";

import styles from "./forCoreBusinessSection.module.scss";
import arrowSrc from "./img/Arrow.svg";
import workerSrc from "./img/Worker.svg";
import listSrc from "./img/List.svg";
import globeSrc from "./img/Globe.svg";

type TProps = {
  posts: {
    firstCardTitle: string,
    firstCardSubTitle: string,
    secondCardTitle: string,
    secondCardSubTitle: string,
    thirdCardTitle: string,
    thirdCardSubTitle: string,
    fourthCardTitle: string,
    fourthCardSubTitle: string,
  }
};

export const ForCoreBusinessSection: FunctionComponent<TProps> = ({ posts }) => {
  const cardNumber = ["01.", "02.", "03.", "04."];

  return (
    <section className={styles.component}>
      <Container>
        <H2 className={styles.title}>For core business</H2>
        <div className={styles.cardsContainer}>
          <CoreBusinessCard
            imageSrc={arrowSrc}
            number={cardNumber[0]}
            title={posts.firstCardTitle}
            subtitle={posts.firstCardSubTitle}
          />
          <CoreBusinessCard 
            imageSrc={workerSrc}
            number={cardNumber[1]}
            title={posts.secondCardTitle}
            subtitle={posts.secondCardSubTitle} />
          <CoreBusinessCard
            imageSrc={listSrc}
            number={cardNumber[2]}
            title={posts.thirdCardTitle}
            subtitle={posts.thirdCardSubTitle}
          />
          <CoreBusinessCard
            imageSrc={globeSrc}
            number={cardNumber[3]}
            title={posts.fourthCardTitle}
            subtitle={posts.fourthCardSubTitle}
          />
        </div>
      </Container>
      <InfiniteSlider />
    </section>
  );
};

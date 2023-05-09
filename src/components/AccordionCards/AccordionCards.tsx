import { FunctionComponent } from "react";
import { SkillCard } from "components";

import styles from "./accordionCards.module.scss";

type TProps = {
  posts: {
    secondSkillCardsTitle: string;
    secondSkillCardsSubtitle: string;
    thirdSkillCardsTitle: string;
    thirdSkillCardsSubtitle: string;
    fourthSkillCardsTitle: string;
    fourthSkillCardsSubtitle: string;
    fifthSkillCardsTitle: string;
    fifthSkillCardsSubtitle: string;
    sixthSkillCardsTitle: string;
    sixthSkillCardsSubtitle: string;
    seventhCardsTitle: string;
    seventhCardsSubtitle: string;
  }
};

export const AccordionCards: FunctionComponent<TProps> = ({ posts }) => {
  return (
    <div className={styles.component}>
      <SkillCard
        number={"01."}
        title={posts.secondSkillCardsTitle}
        subtitle={posts.secondSkillCardsSubtitle}
      />
      {/* <SkillCard
        number={"02."}
        title={posts.thirdSkillCardsTitle}
        subtitle={posts.thirdSkillCardsSubtitle}
      />
      <SkillCard
        number={"03."}
        title={posts.fourthSkillCardsTitle}
        subtitle={posts.fourthSkillCardsSubtitle}
      />
      <SkillCard
        number={"04."}
        title={posts.fifthSkillCardsTitle}
        subtitle={posts.fifthSkillCardsSubtitle}
      />
      <SkillCard
        number={"05."}
        title={posts.sixthSkillCardsTitle}
        subtitle={posts.sixthSkillCardsSubtitle}
      />
      <SkillCard
        number={"06."}
        title={posts.seventhCardsTitle}
        subtitle={posts.seventhCardsSubtitle}
      /> */}
    </div>
  );
};

import { FunctionComponent } from "react";
import { H2, P, Container, LogoButton, AccordionCards } from "components";

import styles from "./skillCardsSection.module.scss";

type TProps = {
  posts: {
    firstSkillCardsTitle: string;
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
  };
  onClick: () => void;
};

export const SkillCardsSection: FunctionComponent<TProps> = ({ posts, onClick }) => {
  return (
    <section id="skillCards" className={styles.component}>
      <Container className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.titleContainer}>
            <H2>Skill Cards</H2>
            <P className={styles.subtitle}>{posts.firstSkillCardsTitle}</P>
            <LogoButton
              onClick={onClick}
            >
              Let{"\u2019"}s Talk
            </LogoButton>
          </div>
          <div className={styles.skillCardsContainer}>
            <AccordionCards posts={posts} />
          </div>
        </div>
      </Container>
    </section>
  )
};

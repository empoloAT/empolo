import { FunctionComponent } from "react";
import { H2, P, Container, LogoButton, AccordionCards } from "components";

import styles from "./skillCardsSection.module.scss";

type TProps = {
  posts: {
    firstSkillCardsTitle: string,
    secondSkillCardsTitle: string,
    secondSkillCardsSubtitle: string,
    thirdSkillCardsTitle: string,
    thirdSkillCardsSubtitle: string,
    fourthSkillCardsTitle: string,
    fourthSkillCardsSubtitle: string,
    fifthSkillCardsTitle: string,
    fifthSkillCardsSubtitle: string,
    sixthSkillCardsTitle: string,
    sixthSkillCardsSubtitle: string,
    seventhCardsTitle: string,
    seventhCardsSubtitle: string,
  }
};

export const SkillCardsSection: FunctionComponent<TProps> = ({ posts }) => {
  return (
    <section className={styles.component}>
      <Container>
        <div className={styles.container}>
          <div className={styles.titleContainer}>
            <H2>Skill Cards</H2>
            <P>{posts.firstSkillCardsTitle}</P>
            <LogoButton>Let{"\u2019"}s Talk</LogoButton>
          </div>
          <div className={styles.skillCardsContainer}>
            <AccordionCards posts={posts} />
          </div>
        </div>
      </Container>
    </section>
  )
};
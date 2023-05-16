import { FunctionComponent, useState } from "react";
import { Container, H2 } from "components"
import { AccordionItem } from "./AccordionItem";

import styles from "./accordionSEO.module.scss";

type TProps = {
  posts: {
    firstSEOTitle: string;
    firstSEOSubtitle: string;
    secondSEOTitle: string;
    secondSEOSubtitle: string;
    thirdSEOTitle: string;
    thirdSEOSubtitle: string;
    fourthSEOTitle: string;
    fourthSEOSubtitle: string;
  }
};

export const AccordionSEO: FunctionComponent<TProps> = ({ posts }) => {
  const [activeTab, setActiveTab] = useState('');

  return (
    <section className={styles.component}>
      <Container className={styles.wrapper}>
        <div className={styles.contentWrapper}>
          <H2 className={styles.mainTitle}>SEO</H2>
          <div className={styles.contentContainer}>
            <AccordionItem
              title={posts.firstSEOTitle}
              content={posts.firstSEOSubtitle}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            <AccordionItem
              title={posts.secondSEOTitle}
              content={posts.secondSEOSubtitle}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            <AccordionItem
              title={posts.thirdSEOTitle}
              content={posts.thirdSEOSubtitle}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            <AccordionItem
              title={posts.fourthSEOTitle}
              content={posts.fourthSEOSubtitle}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

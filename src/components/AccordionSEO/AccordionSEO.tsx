import { useState } from "react";
import { data } from "./data";
import { Container, H2 } from "components"
import { AccordionItem } from "./AccordionItem";

import styles from "./accordionSEO.module.scss";

export const AccordionSEO = () => {
  const [activeTab, setActiveTab] = useState('');

  return (
    <section className={styles.component}>
      <Container className={styles.wrapper}>
        <div className={styles.contentWrapper}>
          <H2 className={styles.mainTitle}>SEO</H2>
          <div className={styles.contentContainer}>
            {data.map(({ title, content }) => (
              <AccordionItem
                key={title}
                title={title}
                content={content}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

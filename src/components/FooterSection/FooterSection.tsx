import { FunctionComponent } from "react";
import { Container, OurTeam } from "components";

import styles from "./footerSection.module.scss";

type TProps = {
  posts: {
    ourTeamTitle: string,
  },
  urls: {
    seventhImageUrl: string,
  }
};

export const FooterSection: FunctionComponent<TProps> = ({ posts, urls }) => {
  return (
    <section className={styles.component}>
      <Container>
        <OurTeam posts={posts} urls={urls} />
      </Container>
  </section>
  );
};

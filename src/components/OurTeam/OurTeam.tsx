import { FunctionComponent } from "react";
import { useWindowSize } from "hooks";
import { H2, P, LogoButton, Container, OurTeamSlider } from "components";

import styles from "./OurTeam.module.scss";

type TProps = {
  posts: {
    ourTeamTitle: string;
    firstEmployeeName: string;
    firstEmployeeSpecialty: string;
    secondEmployeeName: string;
    secondEmployeeSpecialty: string;
    thirdEmployeeName: string;
    thirdEmployeeSpecialty: string;
  };
  urls: {
    seventhImageUrl: string;
    eighthImageUrl: string;
    ninthImageUrl: string;
  };
  onClick: () => void;
};

export const OurTeam: FunctionComponent<TProps> = ({ posts, urls, onClick }) => {
  const { isLaptopM } = useWindowSize();

  return (
    <section id="ourTeam" className={styles.component}>
      <Container>
        {isLaptopM ?
          <div className={styles.contentWrapper}>
            <div className={styles.titleWrapper}>
              <H2>Our Team</H2>
              <P className={styles.subtitle}>{posts.ourTeamTitle}</P>
              <OurTeamSlider
                posts={posts}
                urls={urls}
              />
              <LogoButton
                onClick={onClick}
              >
                Join Our Team
              </LogoButton>
            </div>
          </div>
          :
          <div className={styles.contentWrapper}>
            <div className={styles.titleWrapper}>
              <H2>Our Team</H2>
              <P className={styles.subtitle}>{posts.ourTeamTitle}</P>
              <LogoButton
                onClick={onClick}
              >
                Join Our Team
              </LogoButton>
            </div>
            <OurTeamSlider
              posts={posts}
              urls={urls}
            />
          </div>
        }
      </Container>
    </section>
  );
};

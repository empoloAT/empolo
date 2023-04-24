import Image from "next/image";
import { Container, H2, H3, P } from "components";

import firstImage from "./img/firstImage.jpg";
import secondImage from "./img/secondImage.jpg";
import styles from "./aboutUsSection.module.scss";

export const AboutUsSection = () => {
  return (
    <section className={styles.component}>
      <Container>
        <H2 className={styles.mainTitle}>About Us</H2>
        <div className={styles.gridContainer}>
          <div className={styles.firstBlock}>
            <H3 className={styles.text}>EMPOLO is a digital agency consisting of a group of experienced consultants, developers, creative directors, and content creators.</H3>
            <P className={styles.text}>Our experience in the digital world and our understanding of our clients' needs enable us to develop individual and tailored solutions. We are committed to providing our clients with first-class service and helping them achieve their goals.</P>
          </div>
          <Image
            className={styles.image}
            src={firstImage}
            alt="Image"
            width={668}
            height={440}
          />
          <Image
            className={styles.image}
            src={secondImage}
            alt="Image"
            width={668}
            height={440}
          />
          <H3 className={styles.text}>We are committed to providing our clients with first-class service.</H3>
          <H3 className={styles.text}>EMPOLO is a digital agency consisting of a group of experienced consultants, developers, creative directors, and content creators.</H3>
          <P className={styles.text}>Our experience in the digital world and our understanding of our clients' needs enable us to develop individual and tailored solutions. We are committed to providing our clients with first-class service and helping them achieve their goals. </P>
        </div>
      </Container>
    </section>
  );
};

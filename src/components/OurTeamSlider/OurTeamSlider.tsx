import Image from "next/image";
import { FunctionComponent } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import { P } from "components";

import "swiper/css/effect-cards";
import "swiper/scss";
import styles from "./ourTeamSlider.module.scss";

type TProps = {
  posts: {
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
};

export const OurTeamSlider: FunctionComponent<TProps> = ({ posts, urls }) => {
  return (
    <div className={styles.imagesWrapper}>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        loop={true}
      >
        <SwiperSlide
          className={styles.slide}
        >
          <div className={styles.imageWrapper}>
            <Image
              className={styles.image}
              src={urls.seventhImageUrl}
              alt="Image"
              fill
            />
            <P className={styles.name}>{posts.firstEmployeeName}</P>
            <P className={styles.specialty}>{posts.firstEmployeeSpecialty}</P>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className={styles.slide}
        >
          <div className={styles.imageWrapper}>
            <Image
              className={styles.image}
              src={urls.eighthImageUrl}
              alt="Image"
              fill
            />
            <P className={styles.name}>{posts.secondEmployeeName}</P>
            <P className={styles.specialty}>{posts.secondEmployeeSpecialty}</P>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className={styles.slide}
        >
          <div className={styles.imageWrapper}>
            <Image
              className={styles.image}
              src={urls.ninthImageUrl}
              alt="Image"
              fill
            />
            <P className={styles.name}>{posts.thirdEmployeeName}</P>
            <P className={styles.specialty}>{posts.thirdEmployeeSpecialty}</P>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

import { FunctionComponent } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from "swiper";
import { SkillCard } from "components";

import styles from "./accordionCards.module.scss";
import 'swiper/scss';

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
      <Swiper
        autoHeight={true}
        direction="vertical"
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        modules={[Mousewheel]}
      >
        <SwiperSlide>
          <SkillCard
            number={"01."}
            title={posts.secondSkillCardsTitle}
            subtitle={posts.secondSkillCardsSubtitle}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SkillCard
            number={"02."}
            title={posts.thirdSkillCardsTitle}
            subtitle={posts.thirdSkillCardsSubtitle}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SkillCard
            number={"03."}
            title={posts.fourthSkillCardsTitle}
            subtitle={posts.fourthSkillCardsSubtitle}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SkillCard
            number={"04."}
            title={posts.fifthSkillCardsTitle}
            subtitle={posts.fifthSkillCardsSubtitle}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SkillCard
            number={"05."}
            title={posts.sixthSkillCardsTitle}
            subtitle={posts.sixthSkillCardsSubtitle}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SkillCard
            number={"06."}
            title={posts.seventhCardsTitle}
            subtitle={posts.seventhCardsSubtitle}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

import { FunctionComponent, useState, useRef, useEffect } from "react";
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
  const indices = [0, 1, 2, 3, 4, 5];
  const [activeNumber, setActiveNumber] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() =>
      setActiveNumber(() =>
        activeNumber === indices.length - 1 ? 0 : activeNumber + 1
      ), 
      3000
    )
    console.log(activeNumber)

    return () => {
      resetTimeout();
    };
  });
  
  return (
    <div className={styles.component}>
      <SkillCard
        activeNumber={activeNumber}
        setActiveNumber={setActiveNumber}
        index={indices[0]}
        number={"01."}
        title={posts.secondSkillCardsTitle}
        subtitle={posts.secondSkillCardsSubtitle}
      />
      <SkillCard
        activeNumber={activeNumber}
        setActiveNumber={setActiveNumber}
        index={indices[1]}
        number={"02."}
        title={posts.thirdSkillCardsTitle}
        subtitle={posts.thirdSkillCardsSubtitle}
      />
      <SkillCard
        activeNumber={activeNumber}
        setActiveNumber={setActiveNumber}
        index={indices[2]}
        number={"03."}
        title={posts.fourthSkillCardsTitle}
        subtitle={posts.fourthSkillCardsSubtitle}
      />
      <SkillCard
        activeNumber={activeNumber}
        setActiveNumber={setActiveNumber}
        index={indices[3]}
        number={"04."}
        title={posts.fifthSkillCardsTitle}
        subtitle={posts.fifthSkillCardsSubtitle}
      />
      <SkillCard
        activeNumber={activeNumber}
        setActiveNumber={setActiveNumber}
        index={indices[4]}
        number={"05."}
        title={posts.sixthSkillCardsTitle}
        subtitle={posts.sixthSkillCardsSubtitle}
      />
      <SkillCard
        activeNumber={activeNumber}
        setActiveNumber={setActiveNumber}
        index={indices[5]}
        number={"06."}
        title={posts.seventhCardsTitle}
        subtitle={posts.seventhCardsSubtitle}
      />
    </div>
  );
};

import { FunctionComponent } from "react";
import { useToggle } from "hooks";
import { Button } from "components";

import styles from "./button.module.scss";
import { ScrollArrow } from "./img/ScrollArrow";

type TProps = {
  onClick?: () => void;
};

export const ScrollButton: FunctionComponent<TProps> = ({ onClick }) => {
  const [ isHovered, toggleHover ] = useToggle();
  
  return (
    <Button
      className={styles.scrollButton}
      size="none"
      onClick={onClick}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      <ScrollArrow
        isHovered={isHovered}
      />
    </Button>
  );
};

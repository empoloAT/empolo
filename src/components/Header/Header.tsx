import { Logo, Navigation } from "components";
import { Button } from "components";

import styles from "./header.module.scss";

export const Header = () => {
  return (
    <div className={styles.component}>
      <Logo />
      <Navigation />
      <Button
        className={styles.headerButton}
        size="s"
      >
        Contact Now
      </Button>
    </div>
  );
};

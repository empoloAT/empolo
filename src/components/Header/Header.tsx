import { Logo, Navigation, Button, Container } from "components";

import styles from "./header.module.scss";

export const Header = () => {
  return (
    <Container>
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
    </Container>
  );
};

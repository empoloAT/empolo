import { FunctionComponent } from "react";
import { P } from "components";

import styles from "./copyright.module.scss";

type TProps = {
  posts: {
    copyrightTitle: string;
  }
};

export const Copyright: FunctionComponent<TProps> = ({ posts }) => {
  return (
    <div className={styles.component}>
      <P className={styles.title}>{posts.copyrightTitle}</P>
    </div>
  );
};

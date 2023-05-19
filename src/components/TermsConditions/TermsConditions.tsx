import { FunctionComponent } from "react";
import Link from "next/link";

import styles from "./termsConditions.module.scss";

type TProps = {
  posts: {
    termsConditionsTitle: string;
  }
};

export const TermsConditions: FunctionComponent<TProps> = ({ posts }) => {
  return (
    <div className={styles.component}>
      <Link href="/">
        {posts.termsConditionsTitle}
      </Link>
    </div>
  );
};

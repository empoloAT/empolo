import { FunctionComponent } from "react";
import Link from "next/link";

import styles from "./privacyPolicy.module.scss";

type TProps = {
  posts: {
    privacyPolicyTitle: string;
  }
};

export const PrivacyPolicy: FunctionComponent<TProps> = ({ posts }) => {
  return (
    <div className={styles.component}>
      <Link href="/">
        {posts.privacyPolicyTitle}
      </Link>
    </div>
  );
};

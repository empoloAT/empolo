import classNames from "classnames";
import { golos } from "styles/fonts/golos"
import CookieConsent from "react-cookie-consent";
import { P } from "components";
import { GetAllPosts } from "utils/posts";

import styles from "./cookieBannerComponent.module.scss";

export const CookieBannerComponent = () => {
  const posts = GetAllPosts();

  return (
    <CookieConsent
      disableStyles={true}
      location="bottom"
      buttonText="Accept"
      cookieName="cookieConsent"
      expires={150}
      containerClasses={styles.container}
      buttonClasses={classNames(styles.button, golos.className)}
      contentStyle={{width: 1000}}
    >
      <P>{posts.cookieBannerTitle}</P>
    </CookieConsent>
  );
};

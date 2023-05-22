import classNames from "classnames";
import { golos } from "styles/fonts/golos"
import CookieConsent, { Cookies, getCookieConsentValue } from "react-cookie-consent";
import parseCookies from "next-cookies";
import { FunctionComponent } from "react";
import { P } from "components";
import { GetAllPosts } from "utils/posts";

import styles from "./cookieBannerComponent.module.scss";

type CookieBannerProps = {
  acceptedCookies: boolean;
};

export const CookieBannerComponent: FunctionComponent<CookieBannerProps> = ({ acceptedCookies }) => {
  const posts = GetAllPosts();
  
  if (acceptedCookies) {
    return null;
  }

  return (
    <div className={styles.component}>
    <CookieConsent
      disableStyles={true}
      location="bottom"
      buttonText="Accept"
      cookieName="cookieConsent"
      expires={150}
      containerClasses={styles.container}
      buttonClasses={classNames(styles.button, golos.className)}
    >
      <P>{posts.cookieBannerTitle}</P>
    </CookieConsent>
    </div>
  );
};

async function getServerSideProps(ctx: any) {
  const { myCookieConsent } = parseCookies(ctx.req);

  return {
    props: {
      acceptedCookies: getCookieConsentValue(myCookieConsent) === Cookies.ACCEPTED,
    },
  };
};

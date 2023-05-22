import { useRef } from "react";
import type { AppProps } from "next/app";
import type { ReactElement } from "react";
import { GetAllMedia } from "utils/media";
import { GetMainTitle } from "utils/mainTitle";
import { GetAllPosts } from "utils/posts";
import {
  Layout,
  EmpoloBackground,
  EmpoloContent,
  AboutUsSection,
  ForCoreBusinessSection,
  SkillCardsSection,
  RealCasesSection,
  CooperationSection,
  OurTeam,
  AccordionSEO,
  ContactUS
} from "components";

const Home = () => {
  const mediaUrls = GetAllMedia();
  const mainTitle = GetMainTitle();
  const posts = GetAllPosts();
  const contactRef = useRef<HTMLDivElement>(null);
  
  const handleClick = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <EmpoloBackground
        url={mediaUrls.videoUrl}
      />
      <EmpoloContent
        title={mainTitle}
        onClick={handleClick}
      />
      <AboutUsSection 
        firstUrl={mediaUrls.firstImageUrl}
        secondUrl={mediaUrls.secondImageUrl}
        posts={posts}
      />
      <ForCoreBusinessSection posts={posts} />
      <SkillCardsSection
        posts={posts}
        onClick={handleClick}
      />
      <RealCasesSection
        posts={posts}
        urls={mediaUrls}
      />
      <CooperationSection
        posts={posts}
        onClick={handleClick}
      />
      <OurTeam 
        posts={posts}
        urls={mediaUrls}
        onClick={handleClick}
      />
      <AccordionSEO
        posts={posts}
      />
      <div ref={contactRef}></div>
      <ContactUS
        posts={posts}
      />
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement, pageProps: AppProps) {
  return (
    <Layout pageProps={pageProps}>
      {page}
    </Layout>
  );
};

export default Home;

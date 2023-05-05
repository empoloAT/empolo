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
  FooterSection
} from "components";

const Home = () => {
  const mediaUrls = GetAllMedia();
  const mainTitle = GetMainTitle();
  const posts = GetAllPosts();

  return (
    <>
      <EmpoloBackground
        url={mediaUrls.videoUrl}
      />
      <EmpoloContent
        title={mainTitle}
      />
      <AboutUsSection 
        firstUrl={mediaUrls.firstImageUrl}
        secondUrl={mediaUrls.secondImageUrl}
        posts={posts}
      />
      <ForCoreBusinessSection posts={posts} />
      <SkillCardsSection posts={posts} />
      <RealCasesSection
        posts={posts}
        urls={mediaUrls}
      />
      <CooperationSection posts={posts} />
      <FooterSection 
        posts={posts}
        urls={mediaUrls}
      />
      <ForCoreBusinessSection posts={posts} />
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  );
};

export default Home;

import type { ReactElement } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_MEDIA } from "../data/media";
import { Layout, EmpoloBackground, EmpoloContent, AboutUsSection } from "components";

const Home = () => {
  const { data } = useQuery(GET_ALL_MEDIA);
  const videoUrl = data?.mediaItems.nodes[0].mediaItemUrl;
  const firstImageUrl = data?.mediaItems.nodes[1].mediaItemUrl;
  const secondImageUrl = data?.mediaItems.nodes[2].mediaItemUrl;

  return (
    <>
      <EmpoloBackground url={videoUrl} />
      <EmpoloContent />
      <AboutUsSection 
        firstUrl={firstImageUrl}
        secondUrl={secondImageUrl}
      />
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

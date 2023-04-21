import type { ReactElement } from "react";
import type { GetStaticProps } from "next";
import { Layout, EmpoloBackground, EmpoloContent, AboutUsSection } from "components";
import { GraphQLClient, gql } from "graphql-request";

export const getStaticProps: GetStaticProps = async() => {
  const wordpressEndpoint = process.env.WORDPRESS_GRAPHQL_API;

  const graphQLClient = new GraphQLClient(wordpressEndpoint);

  const query = gql`
    {
      mediaItems {
        nodes {
          mediaItemUrl
        }
      }
    }
  `

  const data = await graphQLClient.request(query);
  const mediaURL = JSON.parse(JSON.stringify(data?.mediaItems?.nodes[0].mediaItemUrl));

  return {
    props: {
      mediaURL
    }
  };
};

const Home = (mediaURL: any) => {
  return (
    <>
      <EmpoloBackground url={ mediaURL } />
      <EmpoloContent />
      <AboutUsSection />
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

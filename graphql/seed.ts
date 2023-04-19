import { GetStaticProps } from 'next'
import { GraphQLClient, gql } from 'graphql-request'

export const getStaticProps: GetStaticProps = async() => {
  const endpoint = process.env.WORDPRESS_API_URL as string;

  const graphQLClient = new GraphQLClient(endpoint);

  const GET_POSTS = gql`
    query GetAllPosts {
      posts {
        nodes {
          author {
            node {
              id
            }
          }
          title
        }
      }
    }
  `

  const data = await graphQLClient.request(GET_POSTS);

  return {
    props: { data }
  };
}

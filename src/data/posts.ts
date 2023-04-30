import { gql } from "@apollo/client";

export const GET_ALL_POSTS = gql`
  query GetAllPosts {
    posts (first:100) {
      nodes {
        id
        content
        title
      }
    }
  }
`;

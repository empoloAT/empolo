import { gql } from "@apollo/client";

export const GET_ALL_MEDIA = gql`
  query GetAllMedia {
    mediaItems {
      nodes {
        mediaItemUrl
      }
    }
  }
`;

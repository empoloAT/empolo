import { gql } from "@apollo/client";

export const GET_MAIN_TITLE = gql`
  query GetMainTitle {
    post(id: "cG9zdDoxMg==") {
      content
    }
  }
`;

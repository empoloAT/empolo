import { ApolloClient, InMemoryCache } from "@apollo/client";

const wordpressEndpoint = process.env.WORDPRESS_GRAPHQL_API_URL;

export const client = new ApolloClient({
  uri: "https://empolo.at/graphql",
  cache: new InMemoryCache(),
});

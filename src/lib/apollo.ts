import { ApolloClient, InMemoryCache } from "@apollo/client";

const wordpressEndpoint = process.env.WORDPRESS_GRAPHQL_API_URL;

export const client = new ApolloClient({
  uri: "http://empolo.at.www458.your-server.de/graphql",
  cache: new InMemoryCache(),
});

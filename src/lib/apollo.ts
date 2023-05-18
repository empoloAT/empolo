import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://empolo.at/graphql",
  cache: new InMemoryCache(),
});

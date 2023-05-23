import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://content.empolo.digital/graphql",
  cache: new InMemoryCache(),
});

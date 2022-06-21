import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    cache: new InMemoryCache()
})

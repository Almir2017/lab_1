import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    cache: new InMemoryCache()
})
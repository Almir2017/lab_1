import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'xxxxxxxxxxxxxxx',
    cache: new InMemoryCache()
})
import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    cache: new InMemoryCache()
})
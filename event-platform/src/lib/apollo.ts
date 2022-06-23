import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    cache: new InMemoryCache()
})
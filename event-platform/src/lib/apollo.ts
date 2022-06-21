import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oachne1m1001xie20ofkoq/master',
    cache: new InMemoryCache()
})
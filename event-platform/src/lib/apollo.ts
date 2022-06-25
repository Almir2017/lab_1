import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
<<<<<<< HEAD
    uri: import.meta.env.VITE_API_URL,
    headers: {
        'Authorization': `Bearer ${import.meta.env.VITE_API_ACCESS_TOKEN}`
    },
=======
    uri: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
>>>>>>> a33c02b621540d17f93c3186a64bb399429f8fa5
    cache: new InMemoryCache()
})

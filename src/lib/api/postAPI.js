// post api
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
    uri: process.env.SITE_URL_ENDPOINT,
    cache: new InMemoryCache(),
});

export async function getHomePagePosts() {
    try {
        const { data } = await client.query({
            query: gql`
                query AllPosts {
                    posts(first: 5) {
                        nodes {
                            author {
                                node {
                                    name
                                }
                            }
                            date
                            title
                            excerpt
                            modified
                            id
                            slug
                            visitCount
                            featuredImage {
                                node {
                                    mediaItemUrl
                                }
                            }
                        }
                    }
                }
            `,
        });

        return data.posts.nodes;
    } catch (error) {
        console.error('Error fetching posts:', error);
        return [];
    }
}

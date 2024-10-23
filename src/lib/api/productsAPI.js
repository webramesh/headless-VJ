import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://www.vin.handworknepal.com/graphql',
    cache: new InMemoryCache(),
});

export async function getAllProducts() {
    try {
        const { data } = await client.query({
            query: gql`
                query AllProducts {
                    produkter(first: 15) {
                        nodes {
                            featuredImage {
                                node {
                                    sourceUrl
                                }
                            }
                            fieldsProduct {
                                productLabels
                                pice
                            }
                            produktrekommendationer {
                                nodes {
                                    name
                                    slug
                                }
                            }
                            slug
                            title
                            id
                            produktslander {
                                nodes {
                                    name
                                }
                            }
                        }
                    }
                }
            `,
        });

        return data.produkter.nodes;
    } catch (error) {
        console.error('Error fetching posts:', error);
        return [];
    }
}

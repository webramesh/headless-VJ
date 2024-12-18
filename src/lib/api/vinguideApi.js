import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.SITE_URL_ENDPOINT,
  cache: new InMemoryCache(),
});

export async function getAllVinguidePosts(name, uri) {
  try {
    const { data } = await client.query({
      query: gql`
        query AllVinguidePosts($name: String!) {
          vinguide(where: { title: $name }) {
            nodes {
              id
              title
              slug
              landingId
              content
              uri
              faq {
                faq {
                  faqAnswer
                  faqQuestion
                }
              }
              vinguidePosts {
                shortTitle
                shortDescription
                pageTitle
                pageSubtitle
                fieldGroupName
                allProductTitle
                vinguidePosts {
                  nodes {
                    contentTypeName
                    date
                    id
                    slug
                    ... on Post {
                      id
                      excerpt
                      featuredImage {
                        node {
                          altText
                          sourceUrl
                        }
                      }
                      author {
                        node {
                          name
                          id
                        }
                      }
                      date
                      categories {
                        nodes {
                          name
                          slug
                          categoriesImagesAndOtherFields {
                            categorycolorpicker
                          }
                        }
                      }
                      title
                    }
                  }
                }
              }
            }
          }
        }
      `,
      variables: { name },
    });
    if (uri) {
      const filteredData = data.vinguide.nodes.filter((item) => {
        return item.uri === uri;
      });
      return filteredData[0];
    } else {
      return data.vinguide.nodes[0] || [];
    }
  } catch (error) {
    console.error('Error fetching vinguide posts:', error);
    return [];
  }
}

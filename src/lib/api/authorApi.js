'use server';
import { gql } from '@apollo/client';
import { getClient } from './apolloclient';

const client = getClient();

export async function getAllAuthors() {
  try {
    const { data } = await client.query({
      query: gql`
        query AllAuthors {
          users {
            nodes {
              id
              name
              slug
              customAvatar
              description
              authorDescriptionInfo {
                userDescriptionInfo
              }
            }
          }
        }
      `,
    });

    return data.users.nodes;
  } catch (error) {
    console.error('Error fetching authors:', error);
    return [];
  }
}

export async function getAuthorBySlug(slug) {
  try {
    const { data } = await client.query({
      query: gql`
        query AuthorBySlug($slug: ID!) {
          user(id: $slug, idType: SLUG) {
            id
            name
            slug
            customAvatar
            description
            seo {
              title
              robots
              description
              focusKeywords
              canonicalUrl
              additionalProfiles
              openGraph {
                locale
                type
                title
                description
                url
                siteName
                image {
                  height
                  secureUrl
                  type
                  url
                  width
                }
                twitterMeta {
                  card
                  description
                  image
                  creator
                  title
                  site
                }
              }
            }
            authorDescriptionInfo {
              userDescriptionInfo
            }
            posts(first: 9) {
              nodes {
                id
                title
                content
                date
                slug
                excerpt
                uri
                featuredImage {
                  node {
                    altText
                    sourceUrl
                  }
                }
                author {
                  node {
                    name
                  }
                }
              }
            }
          }
        }
      `,
      variables: { slug },
    });
    return data.user;
  } catch (error) {
    console.error('Error fetching author:', error);
    return null;
  }
}

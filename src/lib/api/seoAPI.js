'use server';
import { gql } from '@apollo/client';
import { getClient } from './apolloclient';

const client = getClient();

export async function getContentTypeSEO(contentTypeId) {
  try {
    const { data } = await client.query({
      query: gql`
        query ContentTypeSEO($contentTypeId: ID!) {
          contentType(id: $contentTypeId) {
            id
            seo {
              title
              robots
              description
              focusKeywords
              canonicalUrl
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
          }
        }
      `,
      variables: { contentTypeId },
    });

    return data.contentType;
  } catch (error) {
    console.error('Error fetching content type SEO:', error);
    return null;
  }
}

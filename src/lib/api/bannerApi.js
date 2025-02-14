'use server';
import { gql } from '@apollo/client';
import { getClient } from './apolloclient';

const client = getClient();

export async function getAllBanners() {
  try {
    const { data } = await client.query({
      query: gql`
        query Banner {
          allBanner {
            nodes {
              bannerFields {
                bannerUrl
                sidebarBannerImage {
                  node {
                    altText
                    sourceUrl
                  }
                }
              }
              featuredImage {
                node {
                  altText
                  sourceUrl
                }
              }
              bannerId
            }
          }
        }
      `,
      fetchPolicy: 'no-cache',
    });
    const banners = data.allBanner.nodes;
    if (!banners || banners.length === 0) return null;

    // Get random banner
    const randomIndex = Math.floor(Math.random() * banners.length);
    return banners[randomIndex];
  } catch (error) {
    console.error('Error fetching banners:', error);
    return [];
  }
}

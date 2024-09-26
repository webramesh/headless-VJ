import { request } from 'graphql-request';
import ClientHome from './clientHome';

const WORDPRESS_GRAPHQL_ENDPOINT = 'https://www.vin.handworknepal.com/graphql';

const GET_HERO_POSTS = `
  query GetHeroPosts {
    posts(first: 4, where: { orderby: { field: DATE, order: DESC } }) {
      nodes {
        id
        title
        date
        excerpt
        slug
        featuredImage {
          node {
            sourceUrl
            altText
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
`;

const GET_NEWS_POSTS = `
  query GetNewsPosts {
    nyheter(first: 6, where: {orderby: {field: DATE, order: DESC}}) {
      nodes {
        id
        title
        date
        excerpt
        slug
        featuredImage {
          node {
            sourceUrl
            altText
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
`;

const GET_TRENDING_POSTS = `
  query GetTrendingPosts {
    popularPosts(first: 6) {
      id
      title
      visitCount
      excerpt
      date
      slug
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
`;

async function getPosts() {
  try {
    const heroData = await request(WORDPRESS_GRAPHQL_ENDPOINT, GET_HERO_POSTS);
    const newsData = await request(WORDPRESS_GRAPHQL_ENDPOINT, GET_NEWS_POSTS);
    const trendingData = await request(WORDPRESS_GRAPHQL_ENDPOINT, GET_TRENDING_POSTS);
    return {
      heroPosts: heroData.posts.nodes,
      newsPosts: newsData.nyheter.nodes,
      trendingPosts: trendingData.popularPosts,
    };
  } catch (error) {
    console.error('Error fetching posts:', error);
    return {
      heroPosts: [],
      newsPosts: [],
      trendingPosts: [],
    };
  }
}

export default async function Home() {
  const { heroPosts, newsPosts, trendingPosts } = await getPosts();
  console.log('Hero Posts:', heroPosts);
  console.log('News Posts:', newsPosts);
  console.log('Trending Posts:', trendingPosts);
  return <ClientHome initialHeroPosts={heroPosts} initialNewsPosts={newsPosts} initialTrendingPosts={trendingPosts} />;
}
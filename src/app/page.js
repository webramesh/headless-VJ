import { request } from "graphql-request";
import ClientHome from "./clientHome";

const WORDPRESS_GRAPHQL_ENDPOINT = "https://www.vin.handworknepal.com/graphql";

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

const GET_WINE_CATEGORIES = `
  query GetWineCategories {
    categories {
      nodes {
        categoryId
        count
        name
        categoriesImagesAndOtherFields {
          categoriesImage {
            node {
              sourceUrl
            }
          }
          shortDescription
          categorycolorpicker
        }
      }
    }
  }
`;

async function getPosts() {
  try {
    const heroData = await request(WORDPRESS_GRAPHQL_ENDPOINT, GET_HERO_POSTS);
    const newsData = await request(WORDPRESS_GRAPHQL_ENDPOINT, GET_NEWS_POSTS);
    const trendingData = await request(
      WORDPRESS_GRAPHQL_ENDPOINT,
      GET_TRENDING_POSTS
    );
    const wineData = await request(
      WORDPRESS_GRAPHQL_ENDPOINT,
      GET_WINE_CATEGORIES
    );
    return {
      heroPosts: heroData.posts.nodes,
      newsPosts: newsData.nyheter.nodes,
      trendingPosts: trendingData.popularPosts,
      wineCategories: wineData.categories.nodes,
    };
  } catch (error) {
    console.error("Error fetching posts:", error);
    return {
      heroPosts: [],
      newsPosts: [],
      trendingPosts: [],
      wineCategories: [],
    };
  }
}

export default async function Home() {
  const { heroPosts, newsPosts, trendingPosts, wineCategories } =
    await getPosts();
  console.log("Hero Posts:", heroPosts);
  console.log("News Posts:", newsPosts);
  console.log("Trending Posts:", trendingPosts);
  console.log("Wine Categories:", wineCategories);
  return (
    <ClientHome
      initialHeroPosts={heroPosts}
      initialNewsPosts={newsPosts}
      initialTrendingPosts={trendingPosts}
      initialWineCategories={wineCategories}
    />
  );
}

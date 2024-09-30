import { request } from "graphql-request";
import ClientCategory from "../clientCategory.jsx";

const WORDPRESS_GRAPHQL_ENDPOINT = "https://www.vin.handworknepal.com/graphql";

const GET_CATEGORY_POSTS = `
  query GetCategoryPosts {
    posts {
      nodes {
        id
        title
        date
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
        content
      }
    }
  }
`;

async function getCategoryPosts() {
  try {
    const data = await request(WORDPRESS_GRAPHQL_ENDPOINT, GET_CATEGORY_POSTS);
    return {
      posts: data.posts.nodes,
    };
  } catch (error) {
    console.error("Error fetching category posts:", error);
    return {
      posts: [],
    };
  }
}

export default async function CategoryPage() {
  const { posts } = await getCategoryPosts();
  return <ClientCategory initialPosts={posts} />;
}
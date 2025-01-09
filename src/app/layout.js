import './globals.css';
import ApolloProvider from '../app/Components/ApolloProvider';
import Footer from './Components/Footer';
import ScrollToTopButton from './Components/ScrollToTopButton';
import Navbar from './Components/Navbar';
import { getFooterMenu, getMainMenu } from '../lib/api/menuAPI';
import { PageProvider } from '../context/PageContext';
import { OrdlistaProvider } from '../context/OrdlistaContext';
import { getAllOrdlistaCategories } from '../lib/api/ordilistaAPI';
import { getAllCategories, getPostsByCategory } from '../lib/api/postAPI';
import { CategoryAndPostsProvider } from '../context/CategoriesAndPostsContext';
import { FilterProvider } from '../context/FilterContext';
import { getAllCategoriesWithSuggestedPosts } from '../lib/api/postaccordion';

export default async function RootLayout({ children }) {
  const menuData = await getMainMenu();
  const footerMenu = await getFooterMenu();
  const ordlista = await getAllOrdlistaCategories();
  const categoriesWithSuggestedPosts = await getAllCategoriesWithSuggestedPosts();

  const categoryPosts = [];

  async function getCategoriesAndPosts() {
    try {
      const categories = await getAllCategories();

      if (!categories || !categories.length) {
        console.error('No categories found');
        return [];
      }

      // Fetch posts for all categories in parallel
      const categoryPromises = categories.map(async (category) => {
        const { name: categoryName, slug: categorySlug, id } = category;

        try {
          const { posts } = await getPostsByCategory(categorySlug);

          if (!posts || !posts.length) {
            console.warn(`No posts found for category: ${categoryName}`);
            return null;
          }

          return {
            id,
            categorySlug,
            categoryName,
            postTitles: posts.map((post) => post.title),
            postDetails: posts.map((post) => ({
              title: post.title,
              slug: post.slug,
            })),
          };
        } catch (error) {
          console.error(`Error fetching posts for category: ${categoryName}`, error);
          return null;
        }
      });

      // Await all category promises and filter out null results
      const resolvedCategoryPosts = (await Promise.all(categoryPromises)).filter(Boolean);

      categoryPosts.push(...resolvedCategoryPosts);

      return categoryPosts;
    } catch (error) {
      console.error('Error fetching categories and posts:', error);
      return [];
    }
  }

  await getCategoriesAndPosts();

  return (
    <html lang="sv-SE">
      <head>
        {/* PWA Primary */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="theme-color" content="#F3EFE0" />
        <meta name="description" content="Vinjournalen är ett nätmagasin som fokuserar på ämnet vin" />

        {/* Android */}
        <meta name="mobile-web-app-capable" content="yes" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icons/icon512_maskable.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icons/icon512_maskable.png" />

        {/* iOS */}
        <link rel="apple-touch-icon" href="/icons/icon192.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/icons/icon512_maskable.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/icon512_maskable.png" />
        <link rel="apple-touch-icon" sizes="167x167" href="/icons/icon512_maskable.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Vinjournalen" />

        {/* Microsoft */}
        <meta name="msapplication-TileImage" content="/icons/icon512_maskable.png" />
        <meta name="msapplication-TileColor" content="#F3EFE0" />
        <meta name="msapplication-tap-highlight" content="no" />
      </head>
      <body>
        <ApolloProvider>
          <FilterProvider>
            <PageProvider>
              <CategoryAndPostsProvider
                categoryPosts={categoryPosts}
                categoriesWithSuggestedPosts={categoriesWithSuggestedPosts}
              >
                <OrdlistaProvider ordlista={ordlista}>
                  <Navbar menuData={menuData} />

                  {children}
                  <ScrollToTopButton />
                  <Footer menuItems={footerMenu} />
                </OrdlistaProvider>
              </CategoryAndPostsProvider>
            </PageProvider>
          </FilterProvider>
        </ApolloProvider>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return [];
}

export const dynamicParams = true;

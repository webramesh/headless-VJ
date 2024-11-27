import { Inter, Outfit } from 'next/font/google';
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

const inter = Inter({ subsets: ['latin'] });
const outfit = Outfit({ subsets: ['latin'] });

export default async function RootLayout({ children }) {
  const menuData = await getMainMenu();
  const footerMenu = await getFooterMenu();

  const ordlista = await getAllOrdlistaCategories();
  const categoryPosts = [];
  async function getCategoriesAndPosts() {
    try {
      const categories = await getAllCategories();

      if (!categories.length) {
        console.error('No categories found');
        return [];
      }

      for (const category of categories) {
        const { name: categoryName, slug: categorySlug, id: id } = category;

        // Fetch posts for the current category
        const { posts } = await getPostsByCategory(categorySlug);

        const postTitles = posts.map((post) => post.title);

        categoryPosts.push({
          id,
          categorySlug,
          categoryName,
          postTitles,
        });
      }

      return categoryPosts;
    } catch (error) {
      console.error('Error fetching categories and posts:', error);
      return [];
    }
  }

  await getCategoriesAndPosts();

  return (
    <html lang="en">
      <body className={`${outfit.className} ${inter.className}`}>
        <ApolloProvider>
          <FilterProvider>
            <PageProvider>
              <CategoryAndPostsProvider categoryPosts={categoryPosts}>
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

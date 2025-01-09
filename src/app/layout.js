import './globals.css';
import ApolloProvider from '../app/Components/ApolloProvider';
import Footer from './Components/Footer';
import ScrollToTopButton from './Components/ScrollToTopButton';
import Navbar from './Components/Navbar';
import { getFooterMenu, getMainMenu } from '../lib/api/menuAPI';
import { PageProvider } from '../context/PageContext';
import { OrdlistaProvider } from '../context/OrdlistaContext';
import { getAllOrdlistaCategories } from '../lib/api/ordilistaAPI';
import { CategoryAndPostsProvider } from '../context/CategoriesAndPostsContext';
import { FilterProvider } from '../context/FilterContext';
import { getAllCategoriesWithSuggestedPosts } from '../lib/api/postaccordion';

export default async function RootLayout({ children }) {
  const menuData = await getMainMenu();
  const footerMenu = await getFooterMenu();
  const ordlista = await getAllOrdlistaCategories();
  const categoriesWithSuggestedPosts = await getAllCategoriesWithSuggestedPosts();

  const categoryPosts = [];

  return (
    <html lang="sv-SE">
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

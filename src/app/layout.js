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

const inter = Inter({ subsets: ['latin'] });
const outfit = Outfit({ subsets: ['latin'] });

export const metadata = {
  title: 'Vinjournalen.se',
  description:
    'Vinjournalen är ett nätmagasin som fokuserar på ämnet vin. Vi skriver om vin och mat i kombination, men ger även vintips samt skriver om vinregioner.',
  keywords: ['vin', 'vinjournalen', 'vinprovning', 'vin tips', 'vinregioner', 'vin och mat'],
  openGraph: {
    title: 'Vinjournalen.se',
    description:
      'Vinjournalen är ett nätmagasin som fokuserar på ämnet vin. Vi skriver om vin och mat i kombination, men ger även vintips samt skriver om vinregioner.',
    images: [
      {
        url: 'https://www.vinjournalen.se/wp-content/uploads/2020/01/VinjournalenLogotype-scaled.jpg', // Path to the logo or relevant image
        width: 2048,
        height: 495,
        alt: 'Vinjournalen.se',
      },
    ],
    url: 'https://www.vinjournalen.se/', // Set your website URL
  },
  twitter: {
    card: 'summary_large_image', // 'summary' or 'summary_large_image'
    title: 'Vinjournalen.se',
    description:
      'Vinjournalen är ett nätmagasin som fokuserar på ämnet vin. Vi skriver om vin och mat i kombination, men ger även vintips samt skriver om vinregioner.',
    images: [
      {
        url: 'https://www.vinjournalen.se/wp-content/uploads/2020/01/VinjournalenLogotype-scaled.jpg', // Path to the logo or relevant image
        alt: 'Vinjournalen.se',
      },
    ],
    site: '@vinjournalense', // Twitter handle for your site
  },
};

// Added revalidation
// export const revalidate = 0

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
        </ApolloProvider>
      </body>
    </html>
  );
}

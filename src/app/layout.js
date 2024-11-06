import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import ApolloProvider from '../app/Components/ApolloProvider';
import Footer from './Components/Footer';
import ScrollToTopButton from './Components/ScrollToTopButton';
import Navbar from './Components/Navbar';
import { getFooterMenu, getMainMenu } from '../lib/api/menuAPI';
import { OrdlistaProvider } from '../context/OrdlistaContext';
import { getAllOrdlistaCategories } from '../lib/api/ordilistaAPI';

const inter = Inter({ subsets: ['latin'] });
const outfit = Outfit({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

// Added revalidation
// export const revalidate = 0

export default async function RootLayout({ children }) {
  const menuData = await getMainMenu();
  const footerMenu = await getFooterMenu();

  const [ordlista] = await Promise.all([getAllOrdlistaCategories()]);
  return (
    <html lang="en">
      <body className={`${outfit.className} ${inter.className}`}>
        <ApolloProvider>
          <OrdlistaProvider ordlista={ordlista}>
            <Navbar menuData={menuData} />
            {children}
            <ScrollToTopButton />
            <Footer menuItems={footerMenu} />
          </OrdlistaProvider>
        </ApolloProvider>
      </body>
    </html>
  );
}

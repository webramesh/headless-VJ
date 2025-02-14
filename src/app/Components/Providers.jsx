import React from 'react';
import ApolloProvider from './ApolloProvider';
import { FilterProvider } from '@/src/context/FilterContext';
import { PageProvider } from '@/src/context/PageContext';
import { CategoryAndPostsProvider } from '@/src/context/CategoriesAndPostsContext';
import { OrdlistaProvider } from '@/src/context/OrdlistaContext';
import { getAllOrdlistaCategories } from '@/src/lib/api/ordilistaAPI';
import { getAllCategoriesWithSuggestedPosts } from '@/src/lib/api/postaccordion';

const Providers = async ({ children }) => {
  const [ordlista, categoriesWithSuggestedPosts] = await Promise.all([
    getAllOrdlistaCategories(),
    getAllCategoriesWithSuggestedPosts(),
  ]);
  return (
    <ApolloProvider>
      <FilterProvider>
        <PageProvider>
          <CategoryAndPostsProvider categoriesWithSuggestedPosts={categoriesWithSuggestedPosts}>
            <OrdlistaProvider ordlista={ordlista}>{children}</OrdlistaProvider>
          </CategoryAndPostsProvider>
        </PageProvider>
      </FilterProvider>
    </ApolloProvider>
  );
};

export default Providers;

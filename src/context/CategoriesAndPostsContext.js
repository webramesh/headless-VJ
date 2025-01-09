'use client';

import { createContext, useContext } from 'react';

const CategoriesAndPostcontext = createContext();

export function CategoryAndPostsProvider({ children, categoriesWithSuggestedPosts }) {
  const contextValue = {
    categoriesWithSuggestedPosts,
  };

  return <CategoriesAndPostcontext.Provider value={contextValue}>{children}</CategoriesAndPostcontext.Provider>;
}

export function useCategoriesWithSuggestedPosts() {
  const context = useContext(CategoriesAndPostcontext);
  if (context === undefined) {
    throw new Error('useCategoriesWithSuggestedPosts must be used within an CategoryAndPostsProvider');
  }
  return context.categoriesWithSuggestedPosts;
}

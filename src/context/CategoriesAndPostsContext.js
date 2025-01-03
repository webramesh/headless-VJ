'use client';

import { createContext, useContext } from 'react';

const CategoriesAndPostcontext = createContext();

export function CategoryAndPostsProvider({ children, categoryPosts, categoriesWithSuggestedPosts }) {
  const contextValue = {
    categoryPosts,
    categoriesWithSuggestedPosts,
  };

  return <CategoriesAndPostcontext.Provider value={contextValue}>{children}</CategoriesAndPostcontext.Provider>;
}

export function useCategoryAndPosts() {
  const context = useContext(CategoriesAndPostcontext);
  if (context === undefined) {
    throw new Error('useCategoryAndPosts must be used within an CategoryAndPostsProvider');
  }
  return context.categoryPosts;
}

export function useCategoriesWithSuggestedPosts() {
  const context = useContext(CategoriesAndPostcontext);
  if (context === undefined) {
    throw new Error('useCategoriesWithSuggestedPosts must be used within an CategoryAndPostsProvider');
  }
  return context.categoriesWithSuggestedPosts;
}

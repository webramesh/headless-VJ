'use client';
import { createContext, useContext } from 'react';

const CategoriesAndPostcontext = createContext();

export function CategoryAndPostsProvider({ children, categoryPosts }) {
  return <CategoriesAndPostcontext.Provider value={categoryPosts}>{children}</CategoriesAndPostcontext.Provider>;
}

export function useCategoryAndPosts() {
  const context = useContext(CategoriesAndPostcontext);
  if (context === undefined) {
    throw new Error('useCategoryAndPosts must be used within an CategoryAndPostsProvider');
  }
  return context;
}

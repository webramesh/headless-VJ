'use server';

import { searchContent } from '../../lib/api/searchApi';

export async function handleSearch(searchTerm) {
  return await searchContent(searchTerm);
}
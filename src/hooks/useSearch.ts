import { useContext } from 'react';

import { SearchContext } from '@/providers';

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('Error');
  }
  return context;
};

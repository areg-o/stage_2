import type { ReactNode } from 'react';

import { SearchProvider } from '../Search';

export function AppProvider({ children }: { children: ReactNode }) {
  return <SearchProvider>{children}</SearchProvider>;
}

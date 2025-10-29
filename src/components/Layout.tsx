import { Outlet } from 'react-router-dom';

import { MenuBar } from '@/components';

export function Layout() {
  return (
    <div className="flex flex-row justify-between h-screen">
      <MenuBar />
      <Outlet />
    </div>
  );
}

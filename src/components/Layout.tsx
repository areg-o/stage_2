import { Outlet } from 'react-router-dom';

import { MenuBar, Search } from '@/components';

export function Layout() {
  return (
    <div className="flex flex-row justify-between h-screen">
      <MenuBar />
      <div className="w-full h-full ml-[15vw]">
        <Search />
        <Outlet />
      </div>
    </div>
  );
}

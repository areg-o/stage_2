import { Logo, Menu } from '@/components';

export function MenuBar() {
  return (
    <div className="menu-bar flex flex-col items-center w-[15vw] border-r-2 h-screen p-[2vw] font-nunito">
      <Logo />
      <Menu />
    </div>
  );
}

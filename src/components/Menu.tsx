import { Link } from 'react-router-dom';

export function Menu() {
  return (
    <>
      <nav className="flex flex-col justify-between mt-[5vh] text-[1.5vw] h-[11vh]">
        <Link to="/" className="cursor-pointer hover:text-[#605BFF] text-[#8e8e8e]">
          Dashboard
        </Link>
        <Link to="/add" className="cursor-pointer hover:text-[#605BFF] text-[#8e8e8e]">
          Add
        </Link>
      </nav>
    </>
  );
}

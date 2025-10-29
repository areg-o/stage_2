import { Link } from 'react-router-dom';

export function Menu() {
  return (
    <>
      <nav className="flex flex-col justify-center mt-[5vh]">
        <Link to="/" className="cursor-pointer text-[#605BFF] hover:text-black">
          Dashboard
        </Link>
        <Link to="/add" className="cursor-pointer text-[#605BFF] hover:text-black">
          Add
        </Link>
      </nav>
    </>
  );
}

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-100 flex h-20 items-center justify-center">
      <div className="flex w-4/5 items-center bg-gray-100 py-5 px-5 shadow-md">
        <h1 className="grow">
          <Link to={`/`}>Lvnt Ltd</Link>
        </h1>
        <div className="m-1">
          <Link to={`/register`}>Sign Up</Link>
          <Link to={`/login`}>Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

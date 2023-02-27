const Navbar = () => {
  return (
    <nav className="flex h-20 w-4/5 items-center bg-gray-100 py-5 px-5 shadow-md">
      <h1 className="grow">
        <a className="" href="/">
          Lvnt Ltd
        </a>
      </h1>
      <div className="m-1">
        <a className="" href="/register">
          Sign Up
        </a>
        <a className="ml-1.5" href="/login">
          Login
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

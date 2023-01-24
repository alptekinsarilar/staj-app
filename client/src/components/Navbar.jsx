const Navbar = () => {
  return (
    <nav className="h-20 w-4/5 flex items-center py-5 px-5 shadow-md">
      <h1 className="grow">Lvnt Ltd</h1>
      <div className="m-1">
        <a className="" href="#">
          Sign Up
        </a>
        <a className="ml-1.5" href="#">Login</a>
      </div>
    </nav>
  );
};

export default Navbar;

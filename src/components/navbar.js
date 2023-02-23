import { Link } from "gatsby";
import React from "react";

const Navbar = () => {
  return (
    <header className="bg-primary-200">
      <nav className="container flex flex-row items-baseline justify-between py-6">
        <Link to="/" className="text-xl font-medium">
          Lindenhof Pätz
        </Link>
        <div className="flex flex-row items-baseline justify-end">
          <Link className="text-xl font-medium " to="/about">
            About
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 flex justify-center items-center bg-white/10 backdrop-blur-md border-b border-white/10 shadow-lg">
      <div className="logo transition-transform duration-300 hover:-translate-y-0.5">
        <Link to="/">
          <img
            src="/assets/images/Logo.svg"
            alt="Logo"
            className="w-10 h-9 drop-shadow-md"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;

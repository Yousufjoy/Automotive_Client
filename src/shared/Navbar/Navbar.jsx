import { useState } from "react";
import logo from "../../assets/imgs/logo2.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <nav className="p-2">
        <div className="container mx-auto flex justify-between items-center">
          <a
            href="#"
            className="text-2xl font-bold text-[#3A3A3A] flex items-center"
          >
            <img src={logo} alt="" />
          </a>

          <div className="hidden md:flex items-center">
            <NavLink
              to="/"
              className="px-3 py-2  transition duration-300 ease-in-out hover:text-[#767676] text-lg text-[#F7A034]"
            >
              Home
            </NavLink>

            <NavLink
              to="/addproduct"
              className="px-3 py-2  transition duration-300 ease-in-out hover:text-[#767676] text-lg text-[#F7A034]"
            >
              Add Product
            </NavLink>

            <NavLink
              to="/mycart"
              className="px-3 py-2  transition duration-300 ease-in-out hover:text-[#767676] text-lg text-[#F7A034]"
            >
              My Cart
            </NavLink>

            <NavLink
              to="/login"
              className="px-3 py-2  transition duration-300 ease-in-out hover:text-[#767676] text-lg text-[#F7A034]"
            >
              Login
            </NavLink>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white transition duration-300 ease-in-out"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <NavLink
              to="/"
              className="block text-black hover:text-[#F7A034] px-4 py-2 transition duration-300 ease-in-out"
            >
              Home
            </NavLink>

            <NavLink
              to="/addproduct"
              className="block text-black hover:text-[#F7A034] px-4 py-2 transition duration-300 ease-in-out"
            >
              Add Product
            </NavLink>

            <NavLink
              to="/mycart"
              className="block text-black hover:text-[#F7A034] px-4 py-2 transition duration-300 ease-in-out"
            >
              My Cart
            </NavLink>
            <NavLink
              to="/login"
              className="block text-black hover:text-[#F7A034] px-4 py-2 transition duration-300 ease-in-out"
            >
              Login
            </NavLink>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;

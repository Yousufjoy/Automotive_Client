import { useState } from "react";
import logo from "../../assets/imgs/logo2.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
      <nav className="bg-[#EBEBEB] p-2">
        <div className="container mx-auto flex justify-between items-center">
          <a
            href="#"
            className="text-2xl font-bold text-[#3A3A3A] flex items-center"
          >
            <img src={logo} alt="" />
          </a>

          <div className="hidden md:flex items-center">
            <a
              href="#"
              className="text-[#3A3A3A] hover:text-[#F7A034] px-3 py-2  hover:underline"
            >
              Home
            </a>
            <a
              href="#"
              className="text-[#3A3A3A] hover:text-[#F7A034] px-3 py-2  hover:underline"
            >
              Add Product
            </a>
            <a
              href="#"
              className="text-[#3A3A3A] hover:text-[#F7A034] px-3 py-2  hover:underline"
            >
              My Cart
            </a>
            <a
              href="#"
              className="text-[#3A3A3A] hover:text-[#F7A034] px-3 py-2  hover:underline"
            >
              Login
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
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
          <div className="md:hidden ">
            <a
              href="#"
              className="block text-black hover:text-[#F7A034] px-4 py-2"
            >
              Home
            </a>
            <a
              href="#"
              className="block  text-black hover:text-[#F7A034]  px-4 py-2"
            >
              Add Product
            </a>
            <a
              href="#"
              className="block  text-black hover:text-[#F7A034]  px-4 py-2"
            >
              My Cart
            </a>
            <a
              href="#"
              className="block  text-black hover:text-[#F7A034]  px-4 py-2"
            >
              Login
            </a>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;

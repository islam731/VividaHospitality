import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
});


    const menuToggleHandler = () => {
        setMenuOpen((p) => !p);
        console.log(menuOpen);
    };
    useEffect(() => {
      const handleResize = () => {
          setSize({
              width: window.innerWidth,
              height: window.innerHeight,
          });
      };
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
      if (size.width > 768) {
          setMenuOpen(true);
      }
  });

  return (
    <>
      <nav className={`${menuOpen? "absolute w-screen h-screen bg-black overflow-hidden lg:bg-transparent lg:h-40 lg:w-full":"absolute w-full h-full lg:h-40" }`}  >
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
          <Link to="/" onClick={menuToggleHandler} class="flex items-center">
            <img
              src="../../logo.svg"
              class="h-24 lg:h-28 lg:mr-4"
              alt="Vivida Logo"
            />
          </Link>
          <button
            type="button"
            class=" items-center p-2 ml-3 text-sm text-gray-500 rounded-lg  lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 :text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
          >
            <span class="sr-only" >Open main menu</span>
            <svg
              onClick={menuToggleHandler}
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div  className={` ${menuOpen?  "h-screen w-screen bg-black lg:h-fit lg:w-fit lg:bg-transparent z-10" : "invisible lg:visible"
                    }`}>
            <ul class="font-medium flex flex-col p-4 lg:p-0 mt-4  lg:flex-row lg:space-x-8 lg:mt-0 ">
              <li class="px-10 mx-auto lg:mx-0 ">
                <Link
                  to="/"
                  class="block py-2 pl-3 pr-4 rounded lg:bg-transparent  lg:p-0 text-white lg:hover:text-blue-700 "
                  onClick={menuToggleHandler}
                >
                  Home
                </Link>
              </li>
              <li class="px-10 mx-auto lg:mx-0">
                <Link
                  to="/Why-Us"
                  onClick={menuToggleHandler}
                  class="block py-2 pl-3 pr-4 text-gray-900  hover:text-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 text-white lg:hover:text-blue-500"
                >
                  Why Vivida
                </Link>
              </li>
              <li class="px-10 mx-auto lg:mx-0">
                <Link
                  to="/What-We-Offer"
                  onClick={menuToggleHandler}
                  class="block py-2 pl-3 pr-4 text-white rounded hover:text-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 lg:hover:text-blue-500 "
                >
                  Services
                </Link>
              </li>
              <li class="px-10 mx-auto lg:mx-0">
                <Link
                  to="/Our-Partners"
                  onClick={menuToggleHandler}
                  class="block py-2 pl-3 pr-4 text-white rounded hover:text-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 "
                >
                  Partners
                </Link>
              </li>
              <li class="px-10 mx-auto lg:mx-0">
                <Link
                  to="/Contact-Us"
                  onClick={menuToggleHandler}
                  class="block py-2 pl-3 pr-4 text-white rounded hover:text-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 "
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

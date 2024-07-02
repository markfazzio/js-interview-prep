"use client";

import { useState } from "react";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-green-800 text-white fixed w-full top-0 left-0 px-10">
      <div className="max-w-screen-xl">
        <div className="md:hidden flex items-center">
          <div>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="m-2 p-2 w-10 h-10 text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
              onClick={() => {
                setIsMobileMenuOpen(!isMobileMenuOpen);
              }}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          {isMobileMenuOpen ? (
            <div className="ml-auto">
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                >
                  <path
                    fill="#fff"
                    d="M20.746 3.329a1 1 0 0 0-1.415 0l-7.294 7.294-7.294-7.294a1 1 0 1 0-1.414 1.414l7.294 7.294-7.294 7.294a1 1 0 0 0 1.414 1.415l7.294-7.295 7.294 7.295a1 1 0 0 0 1.415-1.415l-7.295-7.294 7.295-7.294a1 1 0 0 0 0-1.414Z"
                  />
                </svg>
              </button>
            </div>
          ) : undefined}
        </div>

        <div
          className={`${
            !isMobileMenuOpen ? "hidden" : ""
          } w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4   md:flex-row md:mt-0 md:border-0">
            <li>
              <a
                href="#objects"
                className="block py-3 px-4 text-white hover:bg-green-700 rounded dark:text-white"
                aria-current="page"
              >
                Objects
              </a>
            </li>
            <li>
              <a
                href="#functions"
                className="block py-3 px-4 text-white hover:bg-green-700 rounded dark:text-white"
              >
                Functions
              </a>
            </li>
            <li>
              <a
                href="#arrays"
                className="block py-3 px-4 text-white hover:bg-green-700 rounded dark:text-white"
              >
                Arrays
              </a>
            </li>
            <li>
              <a
                href="#values"
                className="block py-3 px-4 text-white hover:bg-green-700 rounded dark:text-white"
              >
                Variables
              </a>
            </li>
            <li>
              <a
                href="#utilities"
                className="block py-3 px-4 text-white hover:bg-green-700 rounded dark:text-white"
              >
                Utilities
              </a>
            </li>
            <li>
              <a
                href="#strings"
                className="block py-3 px-4 text-white hover:bg-green-700 rounded dark:text-white"
              >
                Strings
              </a>
            </li>
            <li>
              <a
                href="#numbers"
                className="block py-3 px-4 text-white hover:bg-green-700 rounded dark:text-white"
              >
                Numbers
              </a>
            </li>
            <li>
              <a
                href="#sets"
                className="block py-3 px-4 text-white hover:bg-green-700 rounded dark:text-white"
              >
                Sets
              </a>
            </li>
            <li>
              <a
                href="#glossary"
                className="block py-3 px-4 text-white hover:bg-green-700 rounded dark:text-white"
              >
                Glossary
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

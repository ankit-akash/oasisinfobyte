import React, { useState } from "react";
import { logo } from "../assets";
import "./NavBar.css";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <div className="flex justify-between">
        <img
          src={logo}
          className="h-20 transition-all ease-in-out hover:scale-105 cursor-pointer"
        />
        <div className="hidden md:flex">
          <ul className="flex flex-row">
            <li className="mr-4 transition-all ease-in-out hover:scale-110 cursor-pointer">
              Home
            </li>
            <li className="mr-4 transition-all ease-in-out hover:scale-110 cursor-pointer">
              About Me
            </li>
            <li className="mr-4 transition-all ease-in-out hover:scale-110 cursor-pointer">
              Skills
            </li>
            <li className="mr-4 transition-all ease-in-out hover:scale-110 cursor-pointer">
              Portfolio
            </li>
            <li className="mr-4 transition-all ease-in-out hover:scale-110 cursor-pointer">
              Companies
            </li>
            <li className="mr-4 transition-all ease-in-out hover:scale-110 cursor-pointer">
              Contact Me
            </li>
          </ul>
        </div>
        <div>
          {!toggle ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;

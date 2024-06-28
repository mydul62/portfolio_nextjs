"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { MdLightMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(false);
  const pathname = usePathname()
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
      setTheme(storedTheme === "true");

  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const htmlElement = document.querySelector("html");
    htmlElement.setAttribute("data-theme", theme ? "light" : "black");
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => !prevTheme);
  };
  const navpath = [
             {
             path:'/',
             listName: 'Home'
            },
            {
            path:'/projects',
            listName: 'Projects'
            },
             {
             path:'/aboutme',
             listName: 'AboutMe'
             },
  ]
  return (
    <nav className="relative bg-[#149cca] shadow">
    <div className="max-w-7xl w-[90%]  py-3 mx-auto md:flex md:justify-between md:items-center">
      <div className="flex items-center justify-between">
        <Link href="/">
         <h1 className=' text-white text-2xl font-bold'>MyduL<span className=' text-green-500'>IsLam</span></h1>
        </Link>

        <div className="flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
            aria-label="toggle menu"
          >
            <svg
              className={`w-6 h-6 ${isOpen ? 'hidden' : 'block'}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 8h16M4 16h16"
              />
            </svg>

            <svg
              className={`w-6 h-6 ${isOpen ? 'block' : 'hidden'}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`absolute inset-x-0 z-20 w-full items-center px-6 py-4 transition-all duration-300 ease-in-out bg-white md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:flex md:items-center ${
          isOpen ? 'translate-x-0 opacity-100' : ' opacity-0 md:opacity-100 -translate-x-full md:translate-x-0'
        }`} 
      >
        <div className="flex flex-col md:flex-row md:mx-6">
        {
        navpath && navpath.map(nav=>(
          <Link key={nav.path} href={`${nav.path}`} className={`my-2   md:mx-4 md:my-0 ${pathname ===nav.path && "border-b-2  border-green-400 rounded-md"}`}>
          {nav.listName}
        </Link>
        ))
      }
        </div>
        <div className=' mr-3'>
        <button className='btn btn-sm  bg-green-500  rounded-xl' onClick={toggleTheme}>
           Hire Me
          </button>
        </div>

        <div className="flex justify-center items-center gap-2 ">
          <button className='py-1 px-2 rounded-2xl bg-white' onClick={toggleTheme}>
            {theme ? <MdLightMode color='#000' size={15}  /> : <CiLight color='#000' size={15} />}
          </button>
        </div>
      </div>
    </div>
  </nav>
  );
};

export default Navbar;

import React from 'react';
import { FaReddit, FaFacebookF, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className=" border-t border-[#eeeeee34] border- ">
      <div className="max-w-7xl w-[90%] py-3  flex flex-col items-center justify-between  mx-auto space-y-4 sm:space-y-0 sm:flex-row">
        <a href="#">
          <h2>Mydul Islam</h2>
        </a>

        <p className="text-sm  ">© Copyright 2024. All Rights Reserved by Mydul.</p>

        <div className="flex -mx-2">
          <a
            href="#"
            className="mx-2   transition-colors duration-300 hover:text-blue-500"
            aria-label="Reddit"
          >
            <FaReddit className="w-5 h-5" />
          </a>

          <a
            href="#"
            className="mx-2   transition-colors duration-300 hover:text-blue-500"
            aria-label="Facebook"
          >
            <FaFacebookF className="w-5 h-5" />
          </a>

          <a
            href="#"
            className="mx-2   transition-colors duration-300 hover:text-blue-500"
            aria-label="Github"
          >
            <FaGithub className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

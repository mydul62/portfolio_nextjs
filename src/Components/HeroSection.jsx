import Image from "next/image";
import { IoDownloadOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import Photo from "./Photo";
import Stats from "./Stats";
import Link from "next/link";
const HeroSection = () => {
  return (
    <div className="max-w-7xl w-[90%] pb-4 flex flex-col justify-around items-center   min-h-[calc(100vh-56px-50px)] md:pt-12 pt-6 mx-auto">
      <div className="flex lg:flex-row flex-col-reverse  lg:gap-0 gap-4  justify-between">
        <div className="w-full lg:w-[60%]">
          <div className="space-y-4 lg:text-left text-center">
           <h1>J.r Front-End Developer| </h1>
            <h2 className="text-3xl  font-semibold lg:text-4xl">
            HI, I`m <br />Md Mydul Islam. <br />  

            </h2>

            <p className=" ">
            Passionate MERN Stack Developer | Transforming ideas into seamless and visually stunning web solutions. Skilled in teamwork and collaboration to achieve exceptional results.
            </p>

            <div className="flex  gap-6">
           <Link href={'/contactme'}> <button className="w-full px-6 py-2  text-sm tracking-wider  uppercase transition-colors duration-300 transform  rounded-lg lg:w-auto border-2 border-[#149cca]  hover:bg-transparent bg-[#149cca]">
              Contact me
            </button></Link>
            <button className="w-full px-6 py-2  text-sm tracking-wider hover:bg-[#149cca] hover:border-[#149cca]  uppercase transition-colors duration-300 transform border-2  rounded-lg lg:w-auto focus:outline-none ">
            <a href="resume_mydul.pdf" className=" flex justify-center items-center gap-2" download={'mydul islam'}>Download Resume<IoDownloadOutline size={15} />
            </a>
            </button>
            </div>
            <div className=" flex lg:justify-start justify-center pt-4 gap-8">
            <div className="border p-3 rounded-full hover:text-white text-green-500 hover:bg-blue-400 hove border-green-500" >
            <FaFacebookF className=" " size={20} />
            </div>
            <div className="border p-3 rounded-full hover:text-white text-green-500 hover:bg-blue-400 hove border-green-500" >
            <FaLinkedinIn className=" " size={20} />
            </div>
            <div className="border p-3 rounded-full hover:text-white text-green-500 hover:bg-blue-400 hove border-green-500" >
            <CiTwitter className=" " size={20} />
            </div>
            <div className="border p-3 rounded-full hover:text-white text-green-500 hover:bg-blue-400 hove border-green-500" >
            <FaGithub className=" " size={20} />
            </div>
            </div>
          </div>
        </div>

        <div className="flex items-start justify-center lg:justify-end w-full mt-6 lg:mt-0 lg:w-[40%]">
         
         <Photo/>
          
        </div>
      </div>
      <Stats></Stats>
    </div>
  );
};

export default HeroSection;

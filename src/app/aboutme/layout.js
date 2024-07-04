import Image from "next/image";
import Aboutnav from "@/Components/Aboutnav";


export default function layout({ children }) {

  return (
      <div className="min-h-[calc(100vh-56px-50px)]" >
       <div className=" w-80 mx-auto">
      
       </div>
      <div className=" flex md:flex-row flex-col justify-between items-start   max-w-7xl mx-auto w-[90%]">
      <div className="z-20 md:w-[40%] mx-auto mt-11 rounded-xl">
      <div className="divider divider-success text-2xl md:text-3xl">About Me</div>
      <Image
      src="/computer.png"
      width={380}
      height={380}
      alt="Picture of the author"
    />
      </div>
      <div className="md:w-1/2 pb-3">
      <Aboutnav/>
      <div className="pt-3">
      {children}
      </div>
      </div>
      </div>
      </div>
  );
}

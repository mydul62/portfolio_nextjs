"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";


const navlist =[
      {
      path:'/aboutme',
      listName: 'AboutMe'
      },
      {
      path:'/aboutme/Skills',
      listName: 'Skills'
      },
      {
      path:'/aboutme/educations',
      listName: 'Educations'
      }
]
const Aboutnav = () => {
const pathname = usePathname()
  return (
    <div className="  flex justify-around gap-2 lg:gap-3 border-2 w-[90%]  py-3 rounded-full mt-16  items-center">
     {
      navlist.map((item,index)=>(
        < Link className={`${pathname === item.pathname && 'bg-green-500 rounded-md'}`} key={index} href={item.path} >{item.listName}</ Link>
      ))
      
      }
    </div>
  );
};

export default Aboutnav;
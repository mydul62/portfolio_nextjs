"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navlist = [
  {
    path: "/aboutme",
    listName: "AboutMe",
  },
  {
    path: "/aboutme/Skills",
    listName: "Skills",
  },
  {
    path: "/aboutme/educations",
    listName: "Educations",
  },
];

const Aboutnav = () => {
  const pathname = usePathname();

  return (
    <div className="flex justify-around gap-2 lg:gap-3 border-2 w-full md::w-[80%] rounded-full mt-16 items-center">
      {navlist.map((item, index) => (
        <Link
          key={index}
          href={item.path}
          className={`md:py-2 py-1 px-2 rounded-full ${
            pathname === item.path ? "bg-green-700" : "bg-transparent"
          }`}
        >
          {item.listName}
        </Link>
      ))}
    </div>
  );
};

export default Aboutnav;

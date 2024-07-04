import React from "react";
import "./portfollio.css"
const Portfollio = () => {
  const portfolioItems = [
    {
      title: "Diagnostic center management",
      liveLink: "https://labratory.netlify.app",
      CodeLink: "https://github.com/mydul62/labratory",
      imageUrl: "https://i.ibb.co/dLq7JjM/rsz-5labratorynetlifyapp.png"
    },
    {
      title: "Electronic gadget repaire center",
      liveLink: " https://repaireranger.netlify.app",
      codeLink: "https://github.com/Porgramming-Hero-web-course/b9a11-client-side-mydul62",
      imageUrl: "https://i.ibb.co/74DtBN2/rsz-2repairerangernetlifyapp-1.png"
    },
    {
      title: "Tourism management website",
      liveLink: "https://citytour-web.netlify.app",
      CodeLink: " https://github.com/programming-hero-web-course-4/B9A10-client-side-mydul62",
      imageUrl: "https://i.ibb.co/dMHZP99/rsz-citytour-webnetlifyapp.png"
    },
    {
      title: "Residential selling website",
      liveLink:"https://homehaven-auth.web.app/",
      CodeLink: " https://github.com/programming-hero-web-course-4/b9a9-real-estate-mydul62",
      imageUrl: "https://i.ibb.co/wzptfRB/rsz-homehaven-authwebapp.png"
    }
  ];

  return (
    <section
      id="portfullio"
      className="bg-gradient-to-tl "
    >
      <div className=" border-[#8d44ad6b]">
        <div className="grid grid-cols-1 gap-8 md:mt-0 mt-12 xl:mt-12 xl:gap-12 lg:grid-cols-1">
          {portfolioItems.map((item, index) => (
            <div key={index} className=" bg-[#eaeaea0c] rounded-md  flex flex-col lg:flex-row gap-4">
            <div
              className="portfolio-card  flex w-full lg:w-[65%] items-end  overflow-hidden bg-cover rounded-lg h-[300px] lg:h-96"
              style={{ backgroundImage: `url(${item.imageUrl})` }}
            >
            </div>
            <div className=" flex-1 space-y-4 lg:space-y-6 p-4">
            <h2  className=" text-lg lg:text-2xl">{item.title}</h2>
            <div className=" space-y-4">
            <h3 className="inline-block border-b-2 text-[16px] border-green-400">Technology Used</h3>
            <div className=" flex flex-wrap gap-2 *:text-[8px]">
            <button className="btn btn-sm">TailwindDaisyUI & Mamba UI</button>
            <button className="btn btn-sm">Node js</button>
            <button className="btn btn-sm">Express Js</button>
            <button className="btn btn-sm">Mongodb</button>
            <button className="btn btn-sm">Tailwind</button>
            <button className="btn btn-sm">React router dom</button>
            <button className="btn btn-sm">Firebase</button>
            </div>
            <div  className=" w-24  lg:w-28 flex items-center">
            <button className=" btn btn-sm w-full rounded-none btn-outline">Details</button>
            <button className=" btn btn-sm w-full rounded-none btn-outline"><a target=" " href={item.liveLink}>View</a></button>
            <button className=" btn btn-sm w-full rounded-none btn-outline"><a href={item?.CodeLink} target=" ">Code</a></button>
            </div> 
            </div>
            </div>
            </div>
        
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfollio;

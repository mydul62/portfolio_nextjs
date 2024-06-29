import React from "react";

const page = () => {
  return (
    <div className=" space-y-6">
      
      <div>
      <h1>Front-end skills</h1>
        <div className=" flex flex-wrap gap-2 *:text-[12px]">
          <button className="btn btn-sm">Tailwind</button>
          <button className="btn btn-sm">TailwindDaisyUI & Mamba UI</button>
          <button className="btn btn-sm">Firebase</button>
          <button className="btn btn-sm">Next Js</button>
          <button className="btn btn-sm">HTML5</button>
          <button className="btn btn-sm">CSS3</button>
        </div>
      </div>
      <div>
      <h1>Bankend-end skills</h1>
        <div className=" flex flex-wrap gap-2 *:text-[12px]">
          <button className="btn btn-sm">Node js</button>
          <button className="btn btn-sm">Express Js</button>
          <button className="btn btn-sm">Mongodb</button>
        </div>
      </div>
      <div>
      <h1>Programing Language</h1>
        <div className=" flex flex-wrap gap-2 *:text-[12px]">
          <button className="btn btn-sm">c</button>
          <button className="btn btn-sm">c++</button>
          <button className="btn btn-sm">Java</button>
          <button className="btn btn-sm">Javascript</button>
        </div>
      </div>
      <div>
      <h1>Front-end Technologies</h1>
        <div className=" flex flex-wrap gap-2 *:text-[12px]">
          <button className="btn btn-sm">Figma</button>
          <button className="btn btn-sm">photoshop</button>
          <button className="btn btn-sm">Canva</button>
          <button className="btn btn-sm">World</button>
          <button className="btn btn-sm">Powerpoint</button>
        </div>
      </div>
    </div>
  );
};

export default page;

"use client"
import CountUp from 'react-countup';
import React from 'react';

const stats = [
   {
      num: 1,
      text: "Years of experience"
   },
   {
      num: 40,
      text: "Projects"
   },
   {
      num: 10,
      text: "Technologies mastered"
   },
   {
      num: 200,
      text: "GitHub commits"
   }
];

const Stats = () => {
  return (
    <section>
      <div className="w-full ">
        <div className="grid grid-cols-2 lg:grid-cols-4 py-8 gap-8 lg:gap-16  justify-between">

          {stats.map((item, index) => (
            <div key={index} className="text-center flex flex-col items-center justify-center">
             <div className=' flex justify-center items-center'>
             <CountUp 
                end={item.num} 
                duration={5} 
                delay={2} 
                className="text-[26px] xl:text-5xl font-extrabold"
              ></CountUp><span className=' text-4xl'>+</span>
             </div>
              <p className="mt-2 text-sm lg:text-lg">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

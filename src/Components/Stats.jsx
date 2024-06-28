"use client"
import CountUp from 'react-countup';
import React from 'react';

const stats = [
   {
      num: 1,
      text: "Years of experience"
   },
   {
      num: 26,
      text: "Projects"
   },
   {
      num: 8,
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
        <div className="flex gap-20 pt-12 justify-between">
          {stats.map((item, index) => (
            <div key={index} className="text-center">
             <div className=' flex justify-center items-center'>
             <CountUp 
                end={item.num} 
                duration={5} 
                delay={2} 
                className="text-3xl xl:text-5xl font-extrabold"
              ></CountUp><span className=' text-4xl'>+</span>
             </div>
              <p className="mt-2 text-lg">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

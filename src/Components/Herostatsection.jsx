import { useEffect, useState } from "react";

const Counter = ({ end, suffix, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1000; 
    const incrementTime = 20;
    const step = end / (duration / incrementTime);

    const counter = setInterval(() => {
      start += step;
      if (start >= end) {
        clearInterval(counter);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, incrementTime);

    return () => clearInterval(counter);
  }, [end]);

  return (
    <div className="text-center">
      <h3 className="text-5xl font-extrabold text-white">
        {count}
        {suffix}
      </h3>
      <p className="text-gray-200 mt-2 text-sm md:text-base">{label}</p>
    </div>
  );
};

const HeroStat = () => {
  return (
    <section className="bg-[#0a1128] py-16">
  <div className="max-w-7xl mx-auto bg-gradient-to-r from-[#05A1A8] via-[#21AC72] to-[#38B646] rounded-2xl shadow-md text-white py-12 px-6 md:px-8">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
      <Counter end={2012} suffix="" label="Year Of Establishment" />
      <Counter end={300} suffix="+" label="Projects Delivered" />
      <Counter end={120} suffix="+" label="Employees & Growing" />
      <Counter end={13} suffix="+" label="Years of R&D Experience in Embedded" />
    </div>
  </div>
</section>

  );
};

export default HeroStat;

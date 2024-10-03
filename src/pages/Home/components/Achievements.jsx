import React from "react";
import { counter1, counter2, counter3, counter4 } from "../../../constant/images";

const achievements = [
  { icon: counter4, sector: "Years of Experience", number: 7 },
  { icon: counter1, sector: "Expert Employees", number: 150 },
  { icon: counter2, sector: "Completed Projects", number: 215 },
  { icon: counter3, sector: "Satisfied Clients", number: 200 },
];
const Achievements = () => {
  return (
    // <div className=" section-padding">
    <div className="relative bg-gradient-to-r from-[#044ed943] via-[#044ed943] to-[#67189f5f]">
      <div className="absolute h-full w-full z-[-1] bg-[url('../images/all-img/section-bg-7.png')] bg-cover bg-no-repeat bg-center"></div>
      <div className="container section-padding">
        <div className="text-center">
          <div className="mini-title">Some Facts</div>
          <div className="column-title ">
            Our Great <span className="shape-bg">Achievements</span>
          </div>
        </div>
        <div className="grid  xl:grid-cols-4 md:grid-cols-2  grid-cols-1 gap-[30px] pt-10">
          {achievements.map((item, index) => (
            <div
              className="bg-white shadow-box7 text-center pt-[64px] pb-8 px-[50px]  rounded-[8px] relative my-4"
              key={index}
            >
              <img
                src={item.icon}
                alt=""
                className=" absolute left-1/2 -translate-x-1/2 -top-10"
              />
              <h4 className=" text-[44px] leading-[66px] text-black font-bold mb-1 ">
                <span className="counter">{item.number}</span> +
              </h4>
              <p>{item.sector}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;

/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    name: "Web Development",
    icon: "streamline:web",
    description:
      "We craft dynamic websites for a standout online presence. Our expert developers blend creativity with ensuring an impactful digital experience.",
  },
  {
    name: "App Development",
    icon: "carbon:application-mobile",
    description:
      "Designing and creating application specifically for mobile devices such as smartphones and tablets.",
  },
  {
    name: "AI & Software Development",
    icon: "hugeicons:artificial-intelligence-02",
    description:
      "Experience tailored technology crafted specifically for your unique success and growth. Our AI and software development",
  },
];

const Services = () => {
  return (
    <div className="feature-area bg-[url('../images/all-img/section-bg-6.png')] bg-cover bg-no-repeat bg-center section-padding">
      <div className="container">
        <div className="text-center">
          {/* <div className="mini-title">Course Categories</div> */}
          <div className="column-title ">
            <span className="shape-bg">Our Services</span>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[2rem] pt-10">
          {services.map((item, index) => (
            <div className="bg-white shadow-box rounded-[8px]  p-10 group hover:bg-[#4a8ddd]  transition duration-150 hover:-translate-y-1">
            <div
              className="h-[72px] w-[72px] rounded-full flex flex-col items-center justify-center text-[#4a8ddd] bg-green-paste mb-8
            text-5xl group-hover:bg-black group-hover:bg-opacity-[0.1] group-hover:text-white transition duration-150"
            >
              <iconify-icon icon={item.icon}></iconify-icon>
            </div>
            <h4 className=" lg:text-2xl text-[22px] leading-[30px] mb-4 transition duration-150 group-hover:text-white">
              {item.name}
            </h4>
            <div className="transition duration-150 group-hover:text-white">
              {item.description}
            </div>
          </div>
          ))}
        </div>
        <div className="text-center pt-[70px]">
          <Link to="/services" className="btn btn-black">
            Explore more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;

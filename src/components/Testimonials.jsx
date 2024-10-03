import React from "react";
import altirumlogo from "../assets/images/testimonials/altirum-logo.png";
import evolvialogo from "../assets/images/testimonials/evolvia-logo.png";
import finnovalogo from "../assets/images/testimonials/finnova-logo.png";
import medmagnetlogo from "../assets/images/testimonials/medmagnet-logo.png";

const Testimonials = () => {
  const teamData = [
    {
      companyName: "Altirum Inc.",
      name: "Kirra Lawson, CEO",
      img: altirumlogo,
      comment:
        "Impressed with the machine learning solutions from alexplorers. They optimized our systems, providing insights that elevated our operations. Great team to work with.",
    },
    {
      companyName: "Evolvia",
      name: "Aiden Harris, CEO",
      img: evolvialogo,
      comment:
        "aiexplorers exceeded our expectations with their custom software development. They translated our vision into a powerful efficient, and scalable solution, I lighly recommend their services",
    },
    {
      companyName: "FinNova",
      name: "Daniel Ferl, President",
      img: finnovalogo,
      comment:
        "aiexplorers delivered exceptional Al solutions, enhancing our processes and decision-making. Their expertise in artificial intelligence is truly commendable.",
    },
    {
      companyName: "MedMagnet",
      name: "Shubham Rawal, Founder",
      img: medmagnetlogo,
      comment:
        "The chatbots developed by aiexplorers have revolutionized our customer interactions Seamless intelligent, and user-friendly- exactly what our business needed",
    },
  ];
  return (
    <div className=" section-padding">
      <div className="container">
        <div className="text-center">
          <div className="mini-title">Testimonials</div>
          <div className="column-title ">
            For Our Clients,
            <span className=""> We Create </span>
            <span className="shape-bg"> Artistic Endeavours.</span>
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-[30px] pt-10">
          {teamData.map((item, index) => (
            <div
              className=" bg-white shadow-box3 rounded-[8px] transition-all duration-100 pt-10 pb-[28px] px-6 text-center hover:shadow-box4
                border-t-4 border-transparent hover:border-secondary "
              key={index}
            >
              <div className="w-[10rem] rounded-full  relative mx-auto mb-8">
                <img
                  src={item.img}
                  alt=""
                  className=" w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="course-content -mt-10">
                <h4 className=" lg:text-2xl text-1xl mb-1 font-bold">
                  {item.companyName}
                </h4>
                <h6 className="mb-3 text-gray-600">{item.name}</h6>
                <div>{item.title}</div>
                <p className="text-md">{item.comment}</p>
                {/* <ul className="space-x-4 flex justify-center pt-6">
                  <li>
                    <a
                      href="#"
                      className=" h-10 w-10 rounded bg-red-paste text-primary flex flex-col justify-center items-center text-2xl transition
                                    hover:bg-primary hover:text-white"
                    >
                      <iconify-icon icon="bxl:facebook"></iconify-icon>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className=" h-10 w-10 rounded bg-green-paste text-secondary flex flex-col justify-center items-center text-2xl transition
                                    hover:bg-secondary hover:text-white"
                    >
                      <iconify-icon icon="bxl:twitter"></iconify-icon>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className=" h-10 w-10 rounded bg-[#EEE8FF] text-#8861DB flex flex-col justify-center items-center text-2xl transition
                                    hover:bg-[#8861DB] hover:text-white"
                    >
                      <iconify-icon icon="bxl:linkedin"></iconify-icon>
                    </a>
                  </li>
                </ul> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

import React, { useState } from "react";
import Header from "../../components/Header";
import PageBanner from "../../components/PageBanner";
import robotImg from "../../assets/images/services-page.jpg";
import { portfolio, services } from "../../constant";

import Footer from "../../components/Footer";


const Services = () => {
  const [selectedService, setSelectedService] = useState("");

  // Filtered portfolio based on selected service
  const filteredPortfolio = portfolio.filter((item) =>
    selectedService ? item.service === selectedService : true
  );
  return (
    <>
      <Header />
      <PageBanner title={"Services"} />
      <div className="about-area section-padding">
        <div className="container">
          <div className="flex flex-col-reverse lg:grid grid-cols-12 gap-[30px]">
            <div className="xl:col-span-7 lg:col-span-6 col-span-12">
              <h4 className="column-title mb-6">
                Creative Digital <span className="shape-bg"> Products</span>
              </h4>
              <div className="mb-6">
                <p>
                  We provide a wide range of designer, branding, marketing and
                  development services, as well as offer business consultations
                  for startup projects. Come see us at our office! We provide a
                  wide range of designer, branding, marketing and development
                  services, as well as offer business consultations for startup
                  projects. Come see us at our office!
                </p>
              </div>
              <button className="btn btn-black">Get Started</button>
            </div>
            <div className="xl:col-span-5 lg:col-span-6 col-span-12">
              <img src={robotImg} alt="" className=" block w-full rounded-lg" />
            </div>
          </div>
        </div>
      </div>

      <div className="feature-area bg-[url('../images/all-img/section-bg-1.png')] bg-cover bg-no-repeat bg-center section-padding">
        <div className="container">
          <div className="text-center">
            <div className="column-title ">
              Our <span className="shape-bg">Amazing</span> Services
            </div>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px] pt-10">
            {services.map((item) => (
              <div className="bg-white shadow-box rounded-[8px]  p-10 group hover:bg-[#4a8ddd]  transition duration-150 hover:-translate-y-1">
                <div
                  className="h-[72px] w-[72px] rounded-full flex flex-col items-center justify-center text-[#4a8ddd] bg-green-paste mb-8
                text-5xl group-hover:bg-black group-hover:bg-opacity-[0.1] group-hover:text-white transition duration-150"
                >
                  <iconify-icon icon={item.icon}></iconify-icon>
                </div>
                <h4 className=" lg:text-2xl text-[22px] leading-[30px] mb-4 transition duration-150 group-hover:text-white">
                  {item.title}
                </h4>
                <div className="transition duration-150 group-hover:text-white">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className=" section-padding">
        <div className="container">
          <div className="text-center">
            <div className="mini-title">Portfolio</div>
            <div className="column-title ">
              Transforming Ideas into{" "}
              <span className="shape-bg">Achievements</span>
            </div>
          </div>
          <div className="w-full flex justify-end">
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="p-3 border border-gray-300 rounded w-full sm:w-[20rem] mt-5 outline-none accent-[#2563eb]"
            >
              <option className="cursor pointer" value="">All</option>
              <option className="cursor pointer" value="Web Development">Web Development</option>
              <option className="cursor pointer" value="App Development">App Development</option>
              <option className="cursor pointer" value="Chatbot Development">Chatbot Development</option>
              {/* Add more options if necessary */}
            </select>
          </div>
          <div className="grid lg:grid-cols-3  sm:grid-cols-2 grid-cols-1 gap-7 pt-10">
            {filteredPortfolio.map((item) => (
              <div
                className="group bg-white shadow-box3 rounded-md transition-all duration-100 text-center hover:shadow-box4   "
                key={item.id}
              >
                <div className=" h-[350px] rounded-t-md  relative mx-auto  overflow-hidden">
                  <img
                    src={item.img}
                    alt=""
                    className=" w-full h-full object-contain rounded-t-md "
                  />
                  <div className="absolute left-0 top-0 w-full h-full bg-black/30 group-hover:block hidden transition-all duration-500 ease-in-out"></div>
                </div>
                <div className="course-content p-6">
                  <h4 className=" lg:text-2xl text-1xl mb-1 font-bold">
                    {item.name}
                  </h4>
                  <div>{item.service}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Services;

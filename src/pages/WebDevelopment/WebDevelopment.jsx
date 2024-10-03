import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import PageBanner from "../../components/PageBanner";
import webdevImg from "../../assets/images/web-dev.jpg";
import contact from "../../assets/images/contact-1.jpg";
import { portfolio } from "../../constant";

const WebDevelopment = () => {
  return (
    <>
      <Header />
      <PageBanner title={"Web Development"} />
      <div className="mt-[3rem]">
        <div className="text-center w-full container">
          <h5 className="text-xl">
            Welcome to AIEXPLORERS innovative website development services
          </h5>
          <h4 className="mb-6 text-3xl lg:text-5xl leading-normal mt-3 bg-gradient-to-r from-[#67189f] via-[#153282] to-[#67189f] bg-clip-text text-transparent">
            Crafting Innovative Websites for Exceptional Digital Experiences
          </h4>
        </div>
      </div>
      <div className="about-area section-padding">
        <div className="container">
          <div className="flex flex-col lg:grid grid-cols-12 gap-[30px]">
            <div className="xl:col-span-5 lg:col-span-6 col-span-12">
              <img
                src={webdevImg}
                alt=""
                className="h-[50vh] object-cover lg:h-auto block w-full rounded-lg"
              />
            </div>
            <div className="xl:col-span-7 lg:col-span-6 col-span-12">
              <h4 className="column-title mb-6">
                Web Development <span className="shape-bg"> Company</span>
              </h4>
              <div className="mb-6">
                <p>
                  <strong>AiExplorers</strong> is known for the best website
                  designing and development services. Businesses looking for the
                  fast growth and reduced workload choose us to develop their
                  website that amplify their brand value.
                </p>
              </div>
              <button className="btn btn-black">Get Started</button>
            </div>
          </div>
        </div>
      </div>

      <div className="feature-area bg-[url('../images/all-img/section-bg-1.png')] bg-cover bg-no-repeat bg-center section-padding">
        <div className="container">
          <div className="text-center">
            <div className="column-title">Why Web Development?</div>
            <p className="-mt-3">
              Web development is essential for businesses looking to establish a
              strong online presence, enhance user engagement, and drive growth.
            </p>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-[30px] pt-10">
            <div className="bg-white shadow-box rounded-[8px]  p-10 group hover:bg-[#4a8ddd]  transition duration-150 hover:-translate-y-1">
              <div
                className="h-[72px] w-[72px] rounded-full flex flex-col items-center justify-center text-[#4a8ddd] bg-green-paste mb-8
                text-5xl group-hover:bg-black group-hover:bg-opacity-[0.1] group-hover:text-white transition duration-150"
              >
                <iconify-icon icon="bi:graph-up"></iconify-icon>
              </div>
              <h4 className=" lg:text-2xl text-[22px] leading-[30px] mb-4 transition duration-150 group-hover:text-white">
                Increased Accessibility
              </h4>
              <div className="transition duration-150 group-hover:text-white">
                Website offer universal access across various devices and
                platforms, allowing users to access services or tools directly
                from a web browser without the need for installation. This
                accessibility can significantly expand your user base and
                improve user engagement.
              </div>
            </div>

            <div className="bg-white shadow-box rounded-[8px]  p-10 group hover:bg-[#4a8ddd]  transition duration-150 hover:-translate-y-1">
              <div
                className="h-[72px] w-[72px] rounded-full flex flex-col items-center justify-center text-[#4a8ddd] bg-green-paste mb-8
                text-5xl group-hover:bg-black group-hover:bg-opacity-[0.1] group-hover:text-white transition duration-150"
              >
                <iconify-icon icon="solar:hand-money-outline"></iconify-icon>
              </div>
              <h4 className=" lg:text-2xl text-[22px] leading-[30px] mb-4 transition duration-150 group-hover:text-white">
                Cost Effectiveness
              </h4>
              <div className="transition duration-150 group-hover:text-white">
                Developing a website often requires less time and resources
                compared to native mobile apps, making it a cost-effective
                solution for businesses. With a single codebase for multiple
                platforms, you can reach a broader audience without incurring
                additional development costs.
              </div>
            </div>

            <div className="bg-white shadow-box rounded-[8px]  p-10 group hover:bg-[#4a8ddd]  transition duration-150 hover:-translate-y-1">
              <div
                className="h-[72px] w-[72px] rounded-full flex flex-col items-center justify-center text-[#4a8ddd] bg-green-paste mb-8
                text-5xl group-hover:bg-black group-hover:bg-opacity-[0.1] group-hover:text-white transition duration-150"
              >
                <iconify-icon icon="raphael:customer"></iconify-icon>
              </div>
              <h4 className=" lg:text-2xl text-[22px] leading-[30px] mb-4 transition duration-150 group-hover:text-white">
                Enhanced Customer Experience
              </h4>
              <div className="transition duration-150 group-hover:text-white">
                Website can provide instant assistance to customers at any time,
                improving customer satisfaction and loyalty.
              </div>
            </div>

            <div className="bg-white shadow-box rounded-[8px]  p-10 group hover:bg-[#4a8ddd]  transition duration-150 hover:-translate-y-1">
              <div
                className="h-[72px] w-[72px] rounded-full flex flex-col items-center justify-center text-[#4a8ddd] bg-green-paste mb-8
                text-5xl group-hover:bg-black group-hover:bg-opacity-[0.1] group-hover:text-white transition duration-150"
              >
                <iconify-icon icon="mdi:clock-fast"></iconify-icon>
              </div>
              <h4 className=" lg:text-2xl text-[22px] leading-[30px] mb-4 transition duration-150 group-hover:text-white">
                Increased Efficiency
              </h4>
              <div className="transition duration-150 group-hover:text-white">
                Website can capture leads and qualify potential customers,
                helping businesses generate more revenue.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-area section-padding">
        <div className="container">
          <div className="flex flex-col-reverse lg:grid grid-cols-12 gap-[30px]">
            <div className="xl:col-span-5 lg:col-span-6 col-span-12">
              <h4 className="column-title mb-6">
                Leverage AI to enhance your website's capabilities
              </h4>
              <div className="mb-6">
                <p>
                  <strong>AiExplorers</strong> offers top-notch website design
                  and development services tailored to drive your business
                  forward and Chatbot Integration for Growth
                </p>
              </div>
              <button className="btn btn-black">Contact Us</button>
            </div>
            <div className="xl:col-span-7 lg:col-span-6 col-span-12">
              <img
                src={contact}
                alt=""
                className="h-[50vh] object-cover lg:h-auto block w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="feature-area bg-[url('../images/all-img/section-bg-1.png')] bg-cover bg-no-repeat bg-center section-padding">
        <div className="container">
          <div className="text-center">
            <div className="column-title">Our Web Development <span className="shape-bg">{" "}process</span></div>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-[30px] pt-10">
            <div className="bg-white shadow-box rounded-[8px]  p-10 group hover:bg-[#4a8ddd]  transition duration-150 hover:-translate-y-1">
              <div
                className="h-[72px] w-[72px] rounded-full flex flex-col items-center justify-center text-[#4a8ddd] bg-green-paste mb-8
                text-5xl group-hover:bg-black group-hover:bg-opacity-[0.1] group-hover:text-white transition duration-150"
              >
                1.
              </div>
              <h4 className=" lg:text-2xl text-[22px] leading-[30px] mb-4 transition duration-150 group-hover:text-white">
                Discovery & Planning
              </h4>
              <div className="transition duration-150 group-hover:text-white">
                Defining the project's goals and requirements, conducting market
                research to identify the target audience, and develop a detailed
                project plan and timeline.
              </div>
            </div>

            <div className="bg-white shadow-box rounded-[8px]  p-10 group hover:bg-[#4a8ddd]  transition duration-150 hover:-translate-y-1">
              <div
                className="h-[72px] w-[72px] rounded-full flex flex-col items-center justify-center text-[#4a8ddd] bg-green-paste mb-8
                text-5xl group-hover:bg-black group-hover:bg-opacity-[0.1] group-hover:text-white transition duration-150"
              >
                2.
              </div>
              <h4 className=" lg:text-2xl text-[22px] leading-[30px] mb-4 transition duration-150 group-hover:text-white">
                Design & Prototyping
              </h4>
              <div className="transition duration-150 group-hover:text-white">
                Developing wireframes and user interface designs, creating
                interactive prototypes for user testing, and refine designs
                based on feedback and usability testing.
              </div>
            </div>

            <div className="bg-white shadow-box rounded-[8px]  p-10 group hover:bg-[#4a8ddd]  transition duration-150 hover:-translate-y-1">
              <div
                className="h-[72px] w-[72px] rounded-full flex flex-col items-center justify-center text-[#4a8ddd] bg-green-paste mb-8
                text-5xl group-hover:bg-black group-hover:bg-opacity-[0.1] group-hover:text-white transition duration-150"
              >
                3.
              </div>
              <h4 className=" lg:text-2xl text-[22px] leading-[30px] mb-4 transition duration-150 group-hover:text-white">
                Development & Coding
              </h4>
              <div className="transition duration-150 group-hover:text-white">
                Writing clean code, implementing features per specifications,
                and conducting regular testing and debugging to ensure quality
                and performance.
              </div>
            </div>

            <div className="bg-white shadow-box rounded-[8px]  p-10 group hover:bg-[#4a8ddd]  transition duration-150 hover:-translate-y-1">
              <div
                className="h-[72px] w-[72px] rounded-full flex flex-col items-center justify-center text-[#4a8ddd] bg-green-paste mb-8
                text-5xl group-hover:bg-black group-hover:bg-opacity-[0.1] group-hover:text-white transition duration-150"
              >
                4.
              </div>
              <h4 className=" lg:text-2xl text-[22px] leading-[30px] mb-4 transition duration-150 group-hover:text-white">
                Testing & Deployment
              </h4>
              <div className="transition duration-150 group-hover:text-white">
                Testing thoroughly to fix issues, optimizing for various devices
                and operating systems, and deploying to App Store or Google Play
                for a smooth launch.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" section-padding">
        <div className="container">
          <div className="text-center">
            <div className="column-title ">
              Some of our{" "}
              <span className="shape-bg">Finest Works</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-3  sm:grid-cols-2 grid-cols-1 gap-7 pt-10">
            {portfolio
              .filter((item) => item.service === "Web Development")
              .map((item) => (
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
      <Footer />
    </>
  );
};

export default WebDevelopment;

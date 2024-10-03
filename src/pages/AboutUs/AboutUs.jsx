import React from "react";
import PageBanner from "../../components/PageBanner";
import Testimonials from "../../components/Testimonials";
import Achievements from "../Home/components/Achievements";
import About from "./components/About";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import techteamImg from "../../assets/images/tech-team.jpg";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <>
      <Header />
      <PageBanner title={"About Us"} />
      <About />
      <div className="feature-area bg-[url('../images/all-img/section-bg-6.png')] bg-cover bg-no-repeat bg-center section-padding">
        <div className="container">
          <div className="text-center">
            <div className="mini-title">welcome to</div>
            <div className="column-title ">
              <span className="shape-bg">AIEXPLORERS</span>
            </div>
          </div>
          <div className="pt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="">
              <img
                src={techteamImg}
                alt=""
                className="block w-full rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-10 items-start">
              <p>
                At aiexplorers, we are dedicated to delivering cutting-edge
                solutions that redefine the boundaries of digital innovation.
                Our dynamic team is driven by a passion for transforming ideas
                into reality, pushing the envelope in the ever-evolving digital
                landscape. We are dedicated to driving your success.
              </p>
              <Link to='/contact-us' className="btn btn-black">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Achievements />
      <Testimonials />
      <Footer />
    </>
  );
};

export default AboutUs;

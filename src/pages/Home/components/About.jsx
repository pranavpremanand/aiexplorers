import React from "react";
import about from "../../../assets/images/home-about.jpg";
const About = () => {
  return (
    <div className="about-area section-padding">
      <div className="container">
        <div className="grid grid-cols-12 gap-[30px]">
          <div className="xl:col-span-7 lg:col-span-6 col-span-12">
            <img src={about} alt="" className=" block w-full" />
          </div>
          <div className="xl:col-span-5 lg:col-span-6 col-span-12">
            <div className="mini-title primary-txt">About Us</div>
            <h4 className="column-title ">
              <span className="shape-bg">Who We Are</span>
            </h4>
            <div className=" mb-8">
              Our team here at aiexplorers are innovators, problem solvers, and
              partners committed to advancing your success.
              <br />
              <br />
              At <strong>aiexplorers</strong>, we’re not just a software firm; we’re a family
              dedicated to advancing your success. Our commitment to innovation
              and partnership ensures we deliver the best of the best
            </div>
            <a href="#" className="btn btn-black">
              Enquire Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

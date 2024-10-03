import React from "react";
import aboutusImg from "../../../assets/images/about-us-img.jpg";

const About = () => {
  return (
    <div className="about-area section-padding">
      <div className="container">
        <div className="grid grid-cols-12 gap-[30px]">
          <div className="xl:col-span-7 lg:col-span-6 col-span-12">
            <img src={aboutusImg} alt="" className=" block w-full rounded-lg" />
          </div>
          <div className="xl:col-span-5 lg:col-span-6 col-span-12">
            <div className="mini-title">About AIExplorers</div>
            <h4 className="column-title mb-6">
              Fueling Digital <span className="shape-bg">Brilliance</span>
            </h4>
            <div className="mb-6">
              <h5 className="text-3xl font-bold mb-1">Our Mission</h5>
              <p>
                Our mission is to empower businesses with innovative and
                tailored digital solutions. We believe in harnessing the power
                of technology to drive success and growth for our clients.
              </p>
            </div>
            <div className=" mb-6">
              <h5 className="text-3xl font-bold mb-1">Our Vision</h5>
              <p>
                Our vision is to pioneer transformative digital solutions,
                empowering businesses to thrive in an ever-evolving
                technological landscape with innovation and excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

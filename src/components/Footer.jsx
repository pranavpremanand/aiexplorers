/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "../assets/images/logo/logo (2).png";

const Footer = () => {
  return (
    <footer className="py-5 bg-[#0C1327]">
      <div className="container flex items-center justify-between">
      <a href="#">
        <img src={logo} className="h-[5rem]" alt="" />
      </a>
      <small className="text-white">Copyright © 2024 AIExplorers</small>
      </div>
    </footer>
  );
};

export default Footer;

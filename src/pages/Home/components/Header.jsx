/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef, useState } from "react";
import logo from "../../../assets/images/logo/logo (2).png";
import banner from "../../../assets/images/banner/home-banner.png";
import { Link, useLocation } from "react-router-dom";
import MobileMenu from "../../../components/MobileMenu";
import { pages } from "../../../constant";
const Header = () => {
  const scrollNav = useRef(null);
  const [activeMobileMenu, setActiveMobileMenu] = useState(false);
  let body = document.querySelector("body");

  const { pathname } = useLocation();

  useEffect(() => {
    // scrolling nav
    window.addEventListener("scroll", () => {
      let windowScroll = window.scrollY > 100;
      scrollNav.current?.classList?.toggle("rt-sticky-active", windowScroll);
    });
  }, []);

  body.classList.contains("modal-open")
    ? (document.documentElement.scrollTop = 0)
    : "";
  return (
    <section className="relative xl:min-h-screen bg-[url('../images/banner/1.png')] bg-cover bg-no-repeat bg-center overflow-hidden xl:pb-[130px]">
      <div className="bg-gradient-to-r from-[#044FD9] via-[#044FD9] to-[#66189f] absolute left-0 top-0 h-full w-full z-[-1] opacity-70"></div>
      <header className="site-header ">
        <div
          className="main-header py-2 header-normal2  rt-sticky top-0 w-full z-[999] "
          ref={scrollNav}
        >
          <div className="container">
            <div className=" flex items-center justify-between ">
              <Link
                to={"/"}
                className="brand-logo flex-none lg:mr-10 md:w-auto max-w-[120px]  "
              >
                <img src={logo} className="h-[5rem]" alt="" />
              </Link>
              <div className="flex items-center flex-1">
                <div className="flex-1 main-menu relative mr-[74px]">
                  <ul className="menu-active-classNamees">
                    {/* <li className={`menu-item-has-children `}>
                      <a href="#">Home</a>
                      <ul className="sub-menu">
                        <li>
                          <Link to={"/react-templates/edumim"}> Home One</Link>
                        </li>
                        <li>
                          <Link to={"/react-templates/edumim/home-two"}>
                            Home Two
                          </Link>
                        </li>
                        <li>
                          <Link to={"/react-templates/edumim/home-three"}>
                            Home Three
                          </Link>
                        </li>
                      </ul>
                    </li> */}
                    {pages.map((page, index) => (
                      <li key={index}>
                        <Link
                          to={page.path}
                          className={
                            pathname === page.path
                              ? "text-[#0C1327]"
                              : "text-white"
                          }
                        >
                          {page.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-none flex space-x-[18px]">
                  <div className=" block lg:hidden">
                    <button
                      type="button"
                      className=" text-3xl md:w-[56px] h-10 w-10 md:h-[56px] rounded bg-white flex flex-col items-center justify-center menu-click"
                      onClick={() => setActiveMobileMenu(!activeMobileMenu)}
                    >
                      <iconify-icon
                        icon="cil:hamburger-menu"
                        rotate="180deg"
                      ></iconify-icon>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="container">
        <div className=" lg:hidden block">
          <div className="border border-gray rounded-md  h-[46px] modal-search">
            <input
              type="text"
              className=" block w-full rounded-md  h-full border-none ring-0 focus:outline-none  focus:ring-0"
              placeholder="Search.."
            />
          </div>
        </div>
      </div>
      {activeMobileMenu && (
        <MobileMenu
          activeMenu={activeMobileMenu}
          setActiveMenu={setActiveMobileMenu}
        />
      )}
     <div className="container relative">
        <div className="xl:max-w-[570px] xl:pt-[129px] lg:py-28 md:py-20 py-14  lg:space-y-10 space-y-6">
          <div className=" lg:text-[77px] lg:leading-[106.4px]  md:text-6xl md:leading-[72px] text-black font-bold text-5xl leading-[62px]">
            Welcome to <span className="uppercase">aiexplorers</span>
          </div>
          <div className=" plain-text text-white leading-[30px] border-l-2 border-primary pl-4">
          At aiexplorers, we are pioneering digital solutions to transform the way businesses operate and thrive in the ever-evolving digital landscape.
          </div>
          <div className="md:flex md:space-x-4 space-y-3 md:space-y-0 pt-5">
            
            <a href="#" className="btn btn-black">
              Get Started Now
            </a>
          </div>
        </div>
        <img
          src={banner}
          className="w-1/3 hidden xl:block absolute right-0 top-1/2 -translate-y-1/2 mt-[60px] "
          alt=""
        />
      </div>
    </section>
  );
};

export default Header;

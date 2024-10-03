/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo/logo (2).png";
import MobileMenu from "./MobileMenu";
import { pages } from "../constant";

const Header = () => {
  const [activeMobileMenu, setActiveMobileMenu] = useState(false);
  const { pathname } = useLocation();

  const scrollNav = useRef(null);
  useEffect(() => {
    // scrolling nav
    window.addEventListener("scroll", () => {
      let windowScroll = window.scrollY > 100;
      scrollNav.current?.classList?.toggle("rt-sticky-active", windowScroll);
      scrollNav.current?.classList?.toggle("sticky", windowScroll);
    });
  }, []);

  return (
    <>
      <header
        className="site-header bg-[#4a8ddd] top-0 w-full z-[999] rt-sticky "
        ref={scrollNav}
      >
        <div className="main-header py-2">
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
      {activeMobileMenu && (
        <MobileMenu
          activeMenu={activeMobileMenu}
          setActiveMenu={setActiveMobileMenu}
        />
      )}
    </>
  );
};

export default Header;

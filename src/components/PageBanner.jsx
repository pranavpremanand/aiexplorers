import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import pagebanner from "../assets/images/page-banner.jpg";

const PageBanner = ({ title }) => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);
  return (
    <div
      className="breadcrumbs bg-cover bg-center bg-no-repeat -z-10"
      style={{ backgroundImage: `url(${pagebanner})` }}
    >
      <div className="text-center section-padding bg-sky-200/80">
        <div className="container">
          <h2 className="">{title}</h2>
          <nav>
            <ol className="flex items-center justify-center space-x-3 text-gray-800 mt-2">
              <li className="breadcrumb-item z-50">
                <Link to={"/"}> Home</Link>
              </li>
              <li className="breadcrumb-item">-</li>
              <li className="text-primary z-50 flex items-center">{title}</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default PageBanner;

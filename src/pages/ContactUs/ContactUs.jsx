import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import PageBanner from "../../components/PageBanner";
import { call, mail, map } from "../../constant/images";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <>
      <Header />
      <PageBanner title={"Contact Us"} />
      <div class="nav-tab-wrapper tabs  section-padding">
        <div class="container">
          <div class=" grid grid-cols-12 gap-[30px]">
            <div class="xl:col-span-5 lg:col-span-6 col-span-12 ">
              <div class="mini-title">Contact Us</div>
              <h4 class="column-title ">
                Get In Touch <span class="shape-bg">Today</span>
              </h4>
              <div>
                By providing us with your information you are consenting to the
                collection and use of your information in accordance with our
                Privacy Policy.
              </div>
              <ul class=" list-item space-y-6 pt-8">
                <li class="flex">
                  <div class="flex-none mr-6">
                    <div class="">
                      <img src={mail} alt="" class="" />
                    </div>
                  </div>
                  <div class="flex-1">
                    <h4 class=" lg:text-xl text-lg mb-1">Email-Us :</h4>
                    <Link to="mailto:info@aiexplorers.digital">
                      info@aiexplorers.digital
                    </Link>
                  </div>
                </li>
                <li class="flex">
                  <div class="flex-none mr-6">
                    <div class="">
                      <img src={call} alt="" class="" />
                    </div>
                  </div>
                  <div class="flex-1">
                    <h4 class=" lg:text-xl text-lg mb-1">Call Us:</h4>
                    <Link to="tel:+919860678288">+91 9860678288</Link>
                  </div>
                </li>
                {/* <li class="flex">
                  <div class="flex-none mr-6">
                    <div class="">
                      <img src={map} alt="" class="" />
                    </div>
                  </div>
                  <div class="flex-1">
                    <h4 class="lg:text-xl text-lg mb-1">Office :</h4>
                    <div>Mountain Green Road 2389, NY, USA</div>
                  </div>
                </li> */}
              </ul>
            </div>
            <div class="xl:col-span-7 lg:col-span-6 col-span-12">
              <div class="bg-white shadow-box7 p-8 rounded-md">
                <form action="">
                  <div className="grid sm:grid-cols-2 gap-5 mb-5">
                    <div className="">
                      <input
                        required
                        type="text"
                        placeholder="Name"
                        className="outline-none rounded-md p-3 outline-0"
                      />
                    </div>
                    <div className="">
                      <input
                        required
                        type="email"
                        placeholder="Email"
                        className="outline-none rounded-md p-3 outline-0"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5 mb-5">
                    <div className="">
                      <input
                        required
                        type="text"
                        placeholder="Phone number"
                        className="outline-none rounded-md p-3 outline-0"
                      />
                    </div>
                    <div className="">
                      <input
                        required
                        type="text"
                        placeholder="Country"
                        className="outline-none rounded-md p-3 outline-0"
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <textarea
                      required
                      name=""
                      id=""
                      rows="5"
                      placeholder="Message"
                      className="outline-none rounded-md p-3 outline-0 w-full"
                    />
                  </div>
                  <button className="btn btn-black mt-5 w-full">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;

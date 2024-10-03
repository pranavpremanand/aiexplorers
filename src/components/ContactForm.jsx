import React from "react";
import contactimg from '../assets/images/contactus.jpg'

const ContactForm = () => {
  return (
    <div className=" section-padding">
      <div className="container">
        <div className="text-center">
          <div className="mini-title">Let’s work together
          </div>
          <div className="column-title ">
          Get in touch today and receive a complimentary
            <span className="shape-bg"> consultation.</span>
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-[30px] pt-10">
          <div className="relative md:h-auto h-[40vh]">
            <img src={contactimg} alt="" className="rounded-lg h-full w-full object-cover" />
            <div className="absolute left-0 top-0 w-full h-full bg-[#044FD9]/10 rounded-lg"></div>
          </div>
          <form action="">
            <div className="grid grid-cols-2 gap-5 mb-5">
              <div className="">
                <input required type="text" placeholder="Name" className="outline-none rounded-md p-3 outline-0" />
              </div>
              <div className="">
                <input required type="email" placeholder="Email" className="outline-none rounded-md p-3 outline-0" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5 mb-5">
              <div className="">
                <input required type="text" placeholder="Phone number" className="outline-none rounded-md p-3 outline-0" />
              </div>
              <div className="">
                <input required type="text" placeholder="Country" className="outline-none rounded-md p-3 outline-0" />
              </div>
            </div>
            <div className="w-full">
              <textarea required name="" id="" rows='5' placeholder="Message" className="outline-none rounded-md p-3 outline-0 w-full" />
            </div>
            <button className="btn btn-black mt-5 w-full">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

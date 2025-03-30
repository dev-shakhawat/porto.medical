import React from "react";

// icons
import { IoCallOutline } from "react-icons/io5";
import { GoMail } from "react-icons/go";
import { GoClock } from "react-icons/go";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Header = () => {
  return (
    <div>
      <div className="container">
        <div className="flex justify-between ">
          <div className="flex gap-10 ">
            <a className="flex items-center gap-2 text-primary font-semibold font-primary  " href="tel:+1234567890"> <IoCallOutline className="text-2xl" /> (800) 123-4567</a>
            <div className="flex">
               <a className="timeMail hover:underline mr-[10px]"  href="mailto:mail@example.com"><GoMail className="text-lg" /> <span>mail@example.com</span></a>
               <a className="timeMail  "  href="mailto:mail@example.com"><GoClock className="text-lg" /> <span>Mon - Sat 9:00am - 6:00pm / Sunday - CLOSED</span></a>
            </div>
          </div>
          <div className="flex items-center">
            <ul className="flex gap-[30px] mr-[30px] ">
                <li><FaInstagram className="" /></li>
                <li><FaFacebookF className="" /></li>
                <li><FaXTwitter className="" /></li>
            </ul>
            <button type="button" className="btn text-[12px] h-[52px] py-3 px-6  ">make an appointment</button>
          </div>
        </div>
      </div>
      <hr className="text-tertiary/10" />
    </div>
  );
};

export default Header;

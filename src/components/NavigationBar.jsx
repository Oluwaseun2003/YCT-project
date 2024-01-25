/* eslint-disable react/prop-types */
import logo from "../assets/logo.png";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaRegIdCard } from "react-icons/fa";
import { SiHomeadvisor } from "react-icons/si";
import { MdPayment } from "react-icons/md";
import { MdOutlineCoPresent, MdOutlineLibraryBooks } from "react-icons/md";
import { PiExam } from "react-icons/pi";
import { FaHotel } from "react-icons/fa6";
import { IoIosSettings } from "react-icons/io";
import { FaAngleRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";

const navLinks = [
  {
    name: "Dashboard",
    icon: LuLayoutDashboard,
  },
  {
    name: "Bio Data",
    icon: FaRegIdCard,
  },
  {
    name: "Advisor",
    icon: SiHomeadvisor,
  },
  {
    name: "Payments & Receipt",
    icon: MdPayment,
  },
  {
    name: "Course Registration",
    icon: MdOutlineCoPresent,
  },
  {
    name: "Examination",
    icon: PiExam,
  },
  {
    name: "Hostel Management",
    icon: FaHotel,
  },
  {
    name: "Result Checker",
    icon: MdOutlineLibraryBooks,
  },
  {
    name: "Settings",
    icon: IoIosSettings,
  },
];

const variants = {
  expanded: { width: "300px" },
  nonExpanded: { width: "100px" },
};

const NavigationBar = ({ isExpanded, setIsExpanded }) => {
  const [activeNavIndex, setActiveNavIndex] = useState(0);

  return (
    <motion.div
      animate={isExpanded ? "expanded" : "nonExpanded"}
      variants={variants}
      className="px-3 py-7 flex flex-col w-[272px] bg-shades-white h-screen relative"
    >
      <div className="p-2 flex items-center justify-center">
        <img src={logo} alt="logo" className="w-[79px] h-[76]" />
      </div>

      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-5 h-5 bg-green-base rounded-full absolute -right-[10px] top-[115px] flex items-center justify-center"
      >
        <FaAngleRight className="text-shades-white w-2" />
      </div>

      <div className="mt-9 flex flex-col space-y-6 gap-0">
        {navLinks.map((item, index) => (
          <div
            key={index}
            className={
              "flex items-center space-x-3 px-4 " +
              (activeNavIndex === index
                ? " bg-green-base text-shades-white font-medium z-10 rounded p-3"
                : "text-grey-60")
            }
            onClick={() => setActiveNavIndex(index)}
          >
            <item.icon
              className={isExpanded ? "text-[20px]" : "text-[20px] w-20"}
            />
            <span className={isExpanded ? "block" : "hidden"}>
              {item?.name}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default NavigationBar;

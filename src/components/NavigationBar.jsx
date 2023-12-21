import logo from "../assets/logo.png";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaRegIdCard } from "react-icons/fa";
import { SiHomeadvisor } from "react-icons/si";
import { MdPayment } from "react-icons/md";
import { MdOutlineCoPresent, MdOutlineLibraryBooks } from "react-icons/md";
import { PiExam } from "react-icons/pi";
import { FaHotel } from "react-icons/fa6";
import { IoIosSettings } from "react-icons/io";
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

const NavigationBar = () => {
    const [activeNavIndex, setActiveNavIndex] = useState(0);
  
    return (
      <div className="px-3 py-7 flex flex-col w-1/5 bg-shades-white h-screen">
        <div className="flex items-center justify-center">
          <img src={logo} alt="logo" className="w-[79px] h-[76]" />
        </div>
        <div className="mt-9 flex flex-col space-y-8 gap-0">
          {navLinks.map((item, index) => (
            <div
              key={index}
              className={
                "flex items-center space-x-3 px-2" +
                (activeNavIndex === index
                  ? " bg-green-base text-shades-white font-medium z-10 rounded p-2"
                  : "")
              }
              onClick={() => setActiveNavIndex(index)}
            >
              <item.icon className="w-4" />
              <span className="text-[16px]">{item?.name}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default NavigationBar;
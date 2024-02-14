/* eslint-disable react/prop-types */
import React from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa';

import logo from '../assets/logo.png';
import { LuLayoutDashboard } from 'react-icons/lu';
import { FaRegIdCard } from 'react-icons/fa';
import { SiHomeadvisor } from 'react-icons/si';
import { MdPayment } from 'react-icons/md';
import { MdOutlineCoPresent, MdOutlineLibraryBooks } from 'react-icons/md';
import { PiExam } from 'react-icons/pi';
import { FaHotel } from 'react-icons/fa6';
import { IoIosSettings } from 'react-icons/io';

const navLinks = [
  { name: 'Dashboard', icon: LuLayoutDashboard, path: '/dashboard' },
  { name: 'Bio Data', icon: FaRegIdCard, path: '/bio-data' },
  { name: 'Advisor', icon: SiHomeadvisor, path: '/advisor' },
  { name: 'Payments & Receipt', icon: MdPayment, path: '/payments' },
  { name: 'Course Registration', icon: MdOutlineCoPresent, path: '/course-registration' },
  { name: 'Examination', icon: PiExam, path: '/examination' },
  { name: 'Hostel Management', icon: FaHotel, path: '/hostel-management' },
  { name: 'Result Checker', icon: MdOutlineLibraryBooks, path: '/result-checker' },
  { name: 'Settings', icon: IoIosSettings, path: '/settings' },
];

const variants = {
  expanded: { width: '280px' },
  nonExpanded: { width: '90px' },
};



const SideBar = ({ isExpanded, setIsExpanded }) => {
  const [activeNavIndex, setActiveNavIndex] = useState(0);
  const location = useLocation();

  React.useEffect(() => {
    const foundIndex = navLinks.findIndex(item => item.path === location.pathname);
    if (foundIndex !== -1) {
      setActiveNavIndex(foundIndex);
    }
  }, [location]);

  return (
    <motion.div
      animate={isExpanded ? 'expanded' : 'nonExpanded'}
      variants={variants}
      className="px-3 py-7 flex flex-col w-full bg-shades-white h-screen sticky top-0"
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

      <div className="mt-9 flex flex-col space-y-6">
        {navLinks.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            activeClassName="bg-green-base text-shades-white font-medium z-10 rounded p-[10px]"
            className={`flex items-center space-x-3 px-2 text-[14px] ${
              activeNavIndex === index ? 'bg-green-base text-shades-white font-medium z-10 rounded p-[10px]' : 'text-grey-60'
            }`}
            onClick={() => setActiveNavIndex(index)}
          >
            <item.icon
              className={isExpanded ? 'text-[20px]' : 'text-[20px] w-20'}
            />
            <span className={isExpanded ? 'block' : 'hidden'}>
              {item?.name}
            </span>
          </NavLink>
        ))}
      </div>
    </motion.div>
  );
};

export default SideBar;

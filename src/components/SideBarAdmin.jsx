/* eslint-disable react/prop-types */
import React from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa';

import logo2 from '../assets/logo2.png';
import { LuLayoutDashboard } from 'react-icons/lu';
import { FaUser, FaBuilding, FaUserFriends } from 'react-icons/fa';
import { IoIosSettings, IoIosSearch } from 'react-icons/io';

const navLinks = [
  { name: 'Dashboard', icon: LuLayoutDashboard, path: '/admin-dashboard' },
  { name: 'Hall Management', icon: FaBuilding, path: '/hall-management' },
  { name: 'Student', icon: FaUser, path: '/student-details' },
  { name: 'Invigilators', icon: FaUserFriends, path: '/invigilator-details' },
  { name: 'Settings', icon: IoIosSettings, path: '/admin-settings' },
];

const variants = {
  expanded: { width: '280px' },
  nonExpanded: { width: '90px' },
};



const SideBarAdmin = ({ isExpanded, setIsExpanded }) => {
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
      className="px-3 py-7 flex flex-col w-full bg-green-300 h-screen sticky top-0"
    >
      <div className="p-2 flex items-center justify-center mb-4">
        <img src={logo2} alt="logo" className="w-[79px] h-[76]" />
      </div>

      <div className={isExpanded ? "flex items-center h-10 bg-grey-50 px-4 rounded-lg border border-grey-40" : "hidden"}>
        <label htmlFor="search" className="text-grey-base mr-1">
          <IoIosSearch className="cursor-pointer text-xl" />
        </label>
        <input
          type="text"
          id="search"
          placeholder="Search"
          className="flex-grow bg-grey-50 px-2 py-1 text-grey-base rounded focus:ring-0"
        />
      </div>

      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-5 h-5 bg-green-base rounded-full absolute -right-[10px] top-[115px] flex items-center justify-center"
      >
        <FaAngleRight className="text-shades-white w-2" />
      </div>

      <div className="mt-5 flex flex-col space-y-6">
        {navLinks.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            activeClassName="bg-green-base text-shades-white font-medium z-10 rounded p-[10px]"
            className={`flex items-center space-x-3 px-2 text-[14px] ${
              activeNavIndex === index ? 'bg-green-base text-shades-white font-medium z-10 rounded p-[10px]' : 'text-grey-40'
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

export default SideBarAdmin;

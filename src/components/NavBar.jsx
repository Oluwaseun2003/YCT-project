import { IoIosNotificationsOutline, IoIosSearch  } from "react-icons/io";

import profilePicture from "../assets/profile picture.jpg";

const Navbar = () => {
  return (
    <div className="bg-shades-white p-4 px-12 flex justify-between items-center">
      <div className="flex items-center w-[630px] h-12 bg-grey-50 px-4 rounded-xl">
        <label htmlFor="search" className="text-white mr-2">
          <IoIosSearch className="cursor-pointer text-xl" />
        </label>
        <input
          type="text"
          id="search"
          placeholder="Search here..."
          className="flex-grow bg-grey-50 px-2 py-1 text-white rounded focus:ring-0"
        />
      </div>

      <div className="flex items-center">
        <div className="mr-3 bg-grey-50 p-2 rounded-full">
          <IoIosNotificationsOutline className="text-white text-2xl" />
        </div>
        <div className="w-[40px] h-[40px] border-4 border-shades-white rounded-full overflow-hidden">
          <img
            src={profilePicture}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <span className="font-bold">Olufemi</span>
      </div>
    </div>
  );
};

export default Navbar;

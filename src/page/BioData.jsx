import { Link } from "react-router-dom";
import SideBar from "../components/SideBar";
import Navbar from "../components/NavBar";
import { useState } from "react";
import profilePicture from "../assets/profile picture.jpg";
import { HiArrowNarrowRight } from "react-icons/hi";
import dicovercircle from "../assets/discover-circle.png";

const BioData = ({ setLoggedIn }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <>
      <div className="w-full flex bg-grey-20">
        <SideBar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
        <div className="flex flex-col w-full">
          <Navbar />
          <main className="flex">
            <div className="w-full">
              <div className="flex flex-col px-12 py-11">
                <div className="w-full h-[200px] bg-green-800 rounded-2xl flex p-8 items-center ">
                  <div className="flex-shrink-0 mr-6">
                    <div className="w-[99px] h-[99px] border-4 border-shades-white rounded-full overflow-hidden">
                      <img
                        src={profilePicture}
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="font-bold text-[32px] text-shades-white mb-2">
                      Oluwafemi Oduneye
                    </div>

                    <span className="mr-2 font-bold text-shades-white text-[14px] mb-2">
                      ND COMPUTER SCIENCE (FULL TIME)
                    </span>
                    <span className="font-bold text-shades-black text-[14px]">
                      Matric Number: F/ND/21/3210121
                    </span>
                  </div>
                  <div className="ml-auto">
                    <div className="flex flex-col font-semibold text-[12px] text-shades-white mr-5">
                      Student status:{" "}
                      <span className="text-[16px] font-bold">Active</span>
                    </div>
                  </div>{" "}
                </div>

                <h1 className="mt-8 mb-4 font-bold text-[14px]">
                  Registration To do Guide
                </h1>
                <div className="w-[800px] h-[110px] flex items-center gap-7  mt-5">
                  <div className="flex flex-1 flex-col  bg-yellow-base rounded-2xl h-[150px] w-full">
                    <div className="flex flex-1 items-start px-7 pt-7">
                      <div className="mr-4">
                        <div className="w-[40px] h-[40px] border-2 border-grey-20 rounded-full overflow-hidden">
                          <img
                            src={dicovercircle}
                            alt="Profile"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      <div className="flex flex-col">
                        <div className="font-bold text-shades-black text-[14px]">
                          Edit Biodata
                        </div>
                        <div className="text-[12px]">
                          Tour student portal to access tools and resources for
                          success.
                        </div>
                      </div>
                    </div>

                    <Link to="/edit-biodata" className="flex flex-col w-full mb-2">
                      <div className="border-b border-yellow-100 my-2 h-full"></div>
                      <div className="text-[14px] flex items-center font-semibold gap-3 text-shades-black ml-[84px] cursor-pointer transition-all duration-300 ease-in-out hover:text-yellow-500 hover:scale-105">
                        Get started now
                        <HiArrowNarrowRight className="transition-all duration-300 ease-in-out transform scale-100 hover:scale-105" />
                      </div>
                    </Link>
                  </div>

                  <div className="flex flex-1 flex-col  bg-shades-white rounded-2xl h-[150px] w-full">
                    <div className="flex flex-1 items-start px-5 pt-7">
                      <div className="mr-4">
                        <div className="w-[40px] h-[40px] border-2 border-grey-20 rounded-full overflow-hidden">
                          <img
                            src={dicovercircle}
                            alt="Profile"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      <div className="flex flex-col">
                        <div className="font-bold text-shades-black text-[14px]">
                          Print Biodata
                        </div>
                        <div className="text-[12px]">
                          Get the information you need to get through student
                          clearance quickly and easily.
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col w-full mb-2">
                      <div className="border-b border-grey-30 my-2 h-full"></div>
                      <div className="text-[14px] flex items-center font-semibold gap-3 text-shades-black ml-[84px] cursor-pointer transition-all duration-300 ease-in-out hover:text-yellow-500 hover:scale-105">
                        Get started now
                        <HiArrowNarrowRight className="transition-all duration-300 ease-in-out transform scale-100 hover:scale-105" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default BioData;

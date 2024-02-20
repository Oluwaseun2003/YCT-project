/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import profilePicture from "../assets/profile picture.jpg";
import { HiArrowNarrowRight } from "react-icons/hi";
import dicovercircle from "../assets/discover-circle.png";

const InfoBlock = ({ title, details }) => (
  <div className="flex flex-1 flex-col">
    <div className="text-grey-60 text-[14px]">{title}</div>
    <div className="font-bold text-shades-black text-[14px] mb-2">
      {details}
    </div>
  </div>
);

const HomeDashboard = ({ isExpanded }) => {
  const infoBlocks = [
    { title: "Academic Session:", details: "2023/2024" },
    { title: "Current semester:", details: "FIRST SEMESTER" },
    { title: "Current Level:", details: "ND 2" },
    { title: "School fees status", details: "PAID COMPLETE" },
    { title: "Course registration", details: "REGISTERED" },
    { title: "Hotel status", details: "NOT APPLIED" },
  ];

  return (
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
          </div>
        </div>

        <div className="w-full h-[110px] bg-green-700 rounded-2xl flex p-8 pl-12 items-center  mt-10">
          <div className="flex mt-2 item-center w-full">
            {infoBlocks.map((block, index) => (
              <InfoBlock
                key={index}
                title={block.title}
                details={block.details}
              />
            ))}
          </div>
        </div>

        {/* ... Registration guide... */}

        <h1 className="mt-8 mb-4 font-bold text-[14px]">
          Registration To do Guide
        </h1>
        <div className="w-full h-[110px] flex items-center gap-7  mt-5">
          <div className="flex flex-1 flex-col  bg-yellow-base rounded-2xl h-[150px] w-full">
            <div className="flex flex-1 items-start px-7 pt-5">
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
                  Portal Tour
                </div>
                <div className="text-[12px]">
                  Tour student portal to access tools and resources for success.
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full mb-2">
              <div className="border-b border-yellow-100 my-2 h-full"></div>
              <div className="text-[14px] flex items-center font-semibold gap-3 text-shades-black ml-[84px] cursor-pointer transition-all duration-300 ease-in-out hover:text-yellow-500 hover:scale-105">
                Start Now
                <HiArrowNarrowRight className="transition-all duration-300 ease-in-out transform scale-100 hover:scale-105" />
              </div>
            </div>
          </div>

          <div className="flex flex-1 flex-col  bg-shades-white rounded-2xl h-[150px] w-full">
            <div className="flex flex-1 items-start px-5 pt-5">
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
                  Screening and Clearance Guide
                </div>
                <div className="text-[12px]">
                  Get the information you need to get through student clearance
                  quickly and easily.
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

          <div className="flex flex-1 flex-col bg-shades-white rounded-2xl h-[150px] w-full">
            <div className="flex flex-1 items-start px-7 pt-5">
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
                  Quick Payments
                </div>
                <div className="text-[12px]">
                  Paying tuition fees has never been easier. Get your student
                  quick payment today!{" "}
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full mb-2">
              <div className="border-b border-grey-30 my-2 h-full"></div>
              <div className="text-[14px] flex items-center font-semibold gap-3 text-shades-black ml-[84px] cursor-pointer transition-all duration-300 ease-in-out hover:text-yellow-500 hover:scale-105">
                Click here to make payment
                <HiArrowNarrowRight className="transition-all duration-300 ease-in-out transform scale-100 hover:scale-105" />
              </div>
            </div>
          </div>
        </div>

        {/* ... Quick Links ... */}

        <h1 className="mt-12 mb-4 font-bold text-[14px]">Quick Links</h1>
        <div className="w-full h-[110px] flex items-center gap-7  mt-5">
          <Link to="/advisor-chatbot" className="flex flex-1 flex-col  bg-green-800 rounded-2xl h-[150px] w-full">
            <div className="flex flex-1 items-start px-7 pr-[200px] pt-7">
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
                <div className="font-bold text-shades-white text-[14px]">
                  Advisor AI
                </div>
                <div className="text-[12px] text-shades-white">
                  Discover the power of AI and how it can help you reach your
                  educational goals.
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full mb-2">
              <div className="border-b border-green-600 my-2 h-full"></div>
              <div className="text-[14px] flex items-center font-semibold gap-3 text-shades-white ml-[84px] cursor-pointer transition-all duration-300 ease-in-out hover:text-yellow-500 hover:scale-105">
                Discover the AI Education Advisor
                <HiArrowNarrowRight className="transition-all duration-300 ease-in-out transform scale-100 hover:scale-105" />
              </div>
            </div>
          </Link>

          <Link to="/exam-allocation" className="flex flex-1 flex-col  bg-shades-white rounded-2xl h-[150px] w-full">
            <div className="flex flex-1 items-start px-7 pr-[200px] pt-7">
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
                  Exam Center Allocation
                </div>
                <div className="text-[12px] text-shades-black">
                  Get the information you need to know your exam location in no
                  time.
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full mb-2">
              <div className="border-b border-grey-30 my-2 h-full"></div>
              <div className="text-[14px] flex items-center font-semibold gap-3 text-shades-black ml-[84px] cursor-pointer transition-all duration-300 ease-in-out hover:text-yellow-500 hover:scale-105">
                Know your exam location
                <HiArrowNarrowRight className="transition-all duration-300 ease-in-out transform scale-100 hover:scale-105" />
              </div>
            </div>
          </Link>
        </div>

        <div className="w-full h-[110px] flex items-center gap-7  mt-[70px]">
          <Link to="/bio-data" className="flex flex-1 flex-col  bg-shades-white rounded-2xl h-[150px] w-full">
            <div className="flex flex-1 items-start px-7 pr-[200px] pt-7">
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
                  Biodata
                </div>
                <div className="text-[12px] text-shades-black">
                  This part of your biodata provides essential information about
                  your identity.
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full mb-2">
              <div className="border-b border-grey-30 my-2 h-full"></div>
              <Link to="/edit-biodata" className="text-[14px] flex items-center font-semibold gap-3 text-shades-black ml-[84px] cursor-pointer transition-all duration-300 ease-in-out hover:text-yellow-500 hover:scale-105">
                Edit biodata here
                <HiArrowNarrowRight className="transition-all duration-300 ease-in-out transform scale-100 hover:scale-105" />
              </Link>
            </div>
          </Link>

          <Link to="/payments" className="flex flex-1 flex-col  bg-shades-white rounded-2xl h-[150px] w-full">
            <div className="flex flex-1 items-start px-7 pr-[200px] pt-7">
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
                  Payment and receipts
                </div>
                <div className="text-[12px] text-shades-black">
                  Secure payment and receipt processing with ease.
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full mb-2">
              <div className="border-b border-grey-30 my-2 h-full"></div>
              <div className="text-[14px] flex items-center font-semibold gap-3 text-shades-black ml-[84px] cursor-pointer transition-all duration-300 ease-in-out hover:text-yellow-500 hover:scale-105">
                Click here to make payment
                <HiArrowNarrowRight className="transition-all duration-300 ease-in-out transform scale-100 hover:scale-105" />
              </div>
            </div>
          </Link>
        </div>
        <div className="w-full h-[110px] flex items-center gap-7 mt-[70px] mb-5">
          <Link to="/course-registration" className="flex flex-1 flex-col  bg-shades-white rounded-2xl h-[150px] w-full">
            <div className="flex flex-1 items-start px-7 pr-[200px] pt-7">
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
                  Course Registration
                </div>
                <div className="text-[12px] text-shades-black">
                  Registering for classes has never been easier with our course
                  registration section.
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full mb-2">
              <div className="border-b border-grey-30 my-2 h-full"></div>
              <div className="text-[14px] flex items-center font-semibold gap-3 text-shades-black ml-[84px] cursor-pointer transition-all duration-300 ease-in-out hover:text-yellow-500 hover:scale-105">
                Register all your courses here
                <HiArrowNarrowRight className="transition-all duration-300 ease-in-out transform scale-100 hover:scale-105" />
              </div>
            </div>
          </Link>

          <Link to="/results" className="flex flex-1 flex-col  bg-shades-white rounded-2xl h-[150px] w-full">
            <div className="flex flex-1 items-start px-7 pr-[200px] pt-7">
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
                  My Results
                </div>
                <div className="text-[12px] text-shades-black">
                  Discover your performance - check your results now!{" "}
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full mb-2">
              <div className="border-b border-grey-30 my-2 h-full"></div>
              <div className="text-[14px] flex items-center font-semibold gap-3 text-shades-black ml-[84px] cursor-pointer transition-all duration-300 ease-in-out hover:text-yellow-500 hover:scale-105">
                Check result here
                <HiArrowNarrowRight className="transition-all duration-300 ease-in-out transform scale-100 hover:scale-105" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeDashboard;

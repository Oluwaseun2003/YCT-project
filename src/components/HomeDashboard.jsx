/* eslint-disable react/prop-types */
import profilePicture from "../assets/profile picture.jpg"

const HomeDashboard = ({ isExpanded }) => {
  return (
    <div
      className={`flex flex-col px-12 py-11 ${
        isExpanded ? "w-full" : "w-[1600px]"
      }`}
    >
      <div className="flex space-x-8">
        <div className="w-full h-[200px] bg-green-800 rounded-2xl flex p-8 items-center text-white">
  
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
            <div className="font-bold text-[32px] text-shades-white mb-2">Oluwafemi Oduneye</div>
            
              <span className="mr-2 font-bold text-shades-white text-[14px] mb-2">ND COMPUTER SCIENCE (FULL TIME)</span>
              <span className="font-bold text-shades-black text-[14px]">Matric Number: F/ND/21/3210121</span>
          </div>

          <div className="ml-auto">
            <div className="flex flex-col">Student status: <span className="text-green-400">Active</span></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDashboard;

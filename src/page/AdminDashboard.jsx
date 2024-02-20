import SideBarAdmin from "../components/SideBarAdmin";
import Navbar from "../components/NavBar";
import { useState } from "react";
import profilePicture from "../assets/profile picture.jpg";
import TotalGPACard from "../components/TotalGPACard";

const AdminDashboard = ({ setLoggedIn }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <>
      <div className="w-full flex bg-grey-20">
        <SideBarAdmin isExpanded={isExpanded} setIsExpanded={setIsExpanded} />

        <div className="flex flex-col w-full">
        <Navbar name="Ogundipo" />

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
                    <div className="font-semibold text-[32px] text-shades-white mb-2">
                    Ogundipo A. O
                    </div>
                    <span className="font-bold text-shades-black text-[14px]">
                      Administrative manager
                    </span>
                  </div>
                  <div className="ml-auto">
                    <div className="flex flex-col font-semibold text-[12px] text-shades-white mr-5">
                      Student status:
                      <span className="text-[16px] font-bold">Active</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 mt-6">
                <TotalGPACard label="Total student for upcoming exam" value={30754}/>
                  <TotalGPACard label="Total hall space" value="15" rating="/18,250 seats" />
                  <TotalGPACard label="Total available invigilator" value="150"/>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;

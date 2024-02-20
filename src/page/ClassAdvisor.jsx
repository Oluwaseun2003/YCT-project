import SideBar from "../components/SideBar";
import Navbar from "../components/NavBar";
import { useState } from "react";
import profilePicture from "../assets/profile picture.jpg";
import Chat from "../components/Chat"; // Import the Chat component

const ClassAdvisor = ({ setLoggedIn }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  // State to track whether the chat is open or not
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Function to toggle the chat
  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <>
      <div className="w-full flex bg-grey-20">
        <SideBar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
        <div className="flex flex-col w-full">
        <Navbar name="Olufemi" />
          <main className="flex">
            <div className="w-full">
              <div className="flex flex-col px-12 py-11">
                <div className="w-full h-[200px] bg-green-800 rounded-2xl flex p-8 items-center relative">
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
                      Ogundele O.L
                    </div>

                    <span className="mr-2 font-bold text-shades-white text-[14px] mb-2">
                      Class Adviser ND2 Computer Science
                    </span>
                    <span className="font-bold text-shades-black text-[14px]">
                      Lecturer ID: 234567
                    </span>
                  </div>
                  <div className="ml-auto">
                    <div className="flex flex-col font-semibold text-[12px] text-shades-white mr-5">
                      Lecturer status:
                      <span className="text-[16px] font-bold">Active</span>
                    </div>
                  </div>
                </div>
                <div
                  className="w-full flex p-5 place-content-center mt-5 font-semibold bg-green-400 text-shades-white rounded-xl cursor-pointer hover:bg-green-500"
                  onClick={toggleChat}
                >
                  {isChatOpen ? "Close Chat" : "Start a chat"}
                </div>
                {/* Chat Section */}
                {isChatOpen && <Chat adviserName="Ogundele O.L" />}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default ClassAdvisor;

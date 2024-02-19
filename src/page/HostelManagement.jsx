import SideBar from "../components/SideBar";
import Navbar from "../components/NavBar";
import { useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import dicovercircle from "../assets/discover-circle.png";
import PaymentModal from "../components/PaymentModal";

const HostelManagement = ({ setLoggedIn }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const openPaymentModal = () => {
    setIsPaymentModalOpen(true);
  };

  const closePaymentModal = () => {
    setIsPaymentModalOpen(false);
  };

  return (
    <>
      <div className="w-full flex bg-grey-20">
        <SideBar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
        <div className="flex flex-col w-full">
          <Navbar />
          <main className="flex">
            <div className="w-full">
              <div className="flex flex-col px-12 py-11">
                <div className="w-full h-[135px] bg-green-200 rounded-2xl flex p-16 items-center ">
                  <div className="flex flex-col">
                    <div className="font-bold text-[32px] text-shades-white mb-2">
                    Hostel Management
                    </div>
                  </div>
                </div>

                <h1 className="mt-8 mb-4 font-bold text-[14px]">
                Hostel Management
                </h1>
                <div className="w-[800px] h-[110px] flex items-center gap-7  mt-5">
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
                        Pay for hotel
                        </div>
                        <div className="text-[12px]">
                          Tour student portal to access tools and resources for
                          success.
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col w-full mb-2">
                      <div className="border-b border-yellow-100 my-2 h-full"></div>
                      <div 
                      className="text-[14px] flex items-center font-semibold gap-3 text-shades-black ml-[84px] cursor-pointer transition-all duration-300 ease-in-out hover:text-yellow-500 hover:scale-105"
                      onClick={openPaymentModal}>
                        Make your payment here
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
                        Print hostel allocation slip
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
      <PaymentModal isOpen={isPaymentModalOpen} onClose={closePaymentModal} name="Hostel Payment" fee="Hostel allocation fee" />

    </>
  );
};

export default HostelManagement;

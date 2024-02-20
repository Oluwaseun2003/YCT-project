import SideBar from "../components/SideBar";
import Navbar from "../components/NavBar";
import { useState } from "react";
import { FiChevronDown, FiUser, FiMail, FiBell, FiLock, FiShield, FiTrash } from "react-icons/fi";

const Settings = ({ setLoggedIn }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <>
      <div className="w-full flex bg-grey-20">
        <SideBar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
        <div className="flex flex-col w-full">
        <Navbar name="Olufemi" />
          <main className="flex">
            <div className="w-full">
              <div className="flex flex-col px-12 py-11">
                <div className="w-full h-[135px] bg-green-200 rounded-2xl flex p-16 items-center ">
                  <div className="flex flex-col">
                    <div className="font-bold text-[32px] text-shades-white mb-2">
                      Settings
                    </div>
                  </div>
                </div>

                <div className="w-full flex flex-col place-content-center mt-8 px-[270px]">
                  <div className="flex justify-between w-full">
                    <div className="flex">
                      <div className="mr-4">
                        <div className="w-[48px] h-[48px] flex items-center place-content-center bg-green-700 rounded-full">
                          <FiUser className="cursor-pointer text-green-400 text-xl" />
                        </div>
                      </div>

                      <div className="flex flex-col">
                        <div className="font-bold text-shades-black text-[16px]">
                          personal infomation
                        </div>
                        <div className="text-[12px] text-grey-60">Oluwafemi oduneye</div>
                      </div>
                    </div>
                    <button className="px-4 py-2 rounded-[8px] hover:bg-green-700">
                      <FiChevronDown className="text-green-400 text-xl" />
                    </button>
                  </div>

                  <div className="flex justify-between w-full mt-8">
                    <div className="flex">
                      <div className="mr-4">
                        <div className="w-[48px] h-[48px] flex items-center place-content-center bg-green-700 rounded-full">
                          <FiMail className="text-green-400 text-xl" />
                        </div>
                      </div>

                      <div className="flex flex-col">
                        <div className="font-bold text-shades-black text-[16px]">
                          Email settings
                        </div>
                        <div className="text-[12px] text-grey-60">
                          thegabriellsmcpherson@email.com{" "}
                          <span className="bg-[#E7F6EC] px-3 py-2 rounded-full text-green-400 font-semibold">
                            verified
                          </span>
                        </div>
                      </div>
                    </div>
                    <button className="px-4 py-2 rounded-[8px] hover:bg-green-700">
                      <FiChevronDown className="cursor-pointer text-green-400 text-xl" />
                    </button>
                  </div>

                  <div className="flex justify-between w-full mt-8">
                    <div className="flex">
                      <div className="mr-4">
                        <div className="w-[48px] h-[48px] flex items-center place-content-center bg-green-700 rounded-full">
                          <FiBell className="cursor-pointer text-green-400 text-xl" />
                        </div>
                      </div>

                      <div className="flex flex-col">
                        <div className="font-bold text-shades-black text-[16px]">
                        Notifications
                        </div>
                        <div className="text-[12px] text-grey-60">Choose what we get in touch about</div>
                      </div>
                    </div>
                    <button className="px-4 py-2 rounded-[8px] hover:bg-green-700">
                      <FiChevronDown className="text-green-400 text-xl" />
                    </button>
                  </div>

                  <div className="flex justify-between w-full mt-8">
                    <div className="flex">
                      <div className="mr-4">
                        <div className="w-[48px] h-[48px] flex items-center place-content-center bg-green-700 rounded-full">
                          <FiLock className="cursor-pointer text-green-400 text-xl" />
                        </div>
                      </div>

                      <div className="flex flex-col">
                        <div className="font-bold text-shades-black text-[16px]">
                        Change Password
                        </div>
                        <input className="text-[12px] bg-transparent" type="password" placeholder="xxxxxxxxxxxx" />
                      </div>
                    </div>
                    <button className="px-4 py-2 rounded-[8px] hover:bg-green-700">
                      <FiChevronDown className="text-green-400 text-xl" />
                    </button>
                  </div>

                  <div className="flex justify-between w-full mt-8">
                    <div className="flex">
                      <div className="mr-4">
                        <div className="w-[48px] h-[48px] flex items-center place-content-center bg-green-700 rounded-full">
                          <FiShield className="cursor-pointer text-green-400 text-xl" />
                        </div>
                      </div>

                      <div className="flex flex-col">
                        <div className="font-bold text-shades-black text-[16px]">
                        2-step verification
                        </div>
                        <div className="text-[12px] text-grey-60">Manage your 2-step authentication methods</div>
                      </div>
                    </div>
                    <button className="px-4 py-2 rounded-[8px] hover:bg-green-700">
                      <FiChevronDown className="text-green-400 text-xl" />
                    </button>
                  </div>

                  <div className="flex justify-between w-full mt-8">
                    <div className="flex">
                      <div className="mr-4">
                        <div className="w-[48px] h-[48px] flex items-center place-content-center bg-green-700 rounded-full">
                          <FiTrash className="cursor-pointer text-green-400 text-xl" />
                        </div>
                      </div>

                      <div className="flex flex-col">
                        <div className="font-bold text-shades-black text-[16px]">
                        Close your account
                        </div>
                        <div className="text-[12px] text-grey-60">If you want to stop using Rayna</div>
                      </div>
                    </div>
                    <button className="px-4 py-2 rounded-[8px] hover:bg-green-700">
                      <FiChevronDown className="text-green-400 text-xl" />
                    </button>
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

export default Settings;

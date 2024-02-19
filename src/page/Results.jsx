import { Link } from "react-router-dom";
import SideBar from "../components/SideBar";
import Navbar from "../components/NavBar";
import { useState } from "react";
import TotalGPACard from "../components/TotalGPACard";
import CourseTable from "../components/CourseTable";

const Results = ({ setLoggedIn }) => {
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
                <div className="w-full h-[135px] bg-green-200 rounded-2xl flex p-16 items-center ">
                  <div className="flex flex-col">
                    <div className="font-bold text-[32px] text-shades-white mb-2">
                    National Diploma (ND) 1 Result
                    </div>
                  </div>
                  <div className="ml-auto">
                    <div className="flex flex-col p-4 font-semibold text-[16px] text-green-300 mr-5 bg-shades-white rounded-md cursor-pointer">
                      Export result
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 mt-6">
                  <TotalGPACard label="Cummulative CGPA" value="3.456" rating="/4.0"/>
                  <TotalGPACard label="Cummulative Total unit(s)" value="23" rating="/30" />
                  <TotalGPACard label="Cummulative Total point(s)" value="70.50" rating="/100"/>
                </div>

                <h1 className="mt-4 mb-4 font-bold text-[14px]">
                Current Semester Details
                </h1>
                <CourseTable />
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Results;

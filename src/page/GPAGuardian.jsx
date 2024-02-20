import SideBar from "../components/SideBar";
import Navbar from "../components/NavBar";
import { useState } from "react";
import TotalGPACard from '../components/TotalGPACard';
import GPAAnalyticsChart from '../components/GPAAnalyticsChart';
import CourseTable from '../components/CourseTable';
import { Link } from "react-router-dom";

const GPAGuardian = ({ setLoggedIn }) => {
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
              <div className="w-full h-[135px] bg-green-200 rounded-2xl flex p-16 items-center mb-10">
                  <div className="flex flex-col">
                    <div className="font-bold text-[32px] text-shades-white mb-2">
                      GPA Guardian
                    </div>
                  </div>
                </div>
              <div className="flex gap-4">
                  <TotalGPACard label="Average GPA" value="3.456" rating="/4.0" topup="0.45" showDecimals={true}/>
                  <TotalGPACard label="Cummulative GPA" value="3.70" rating="/4.0" topup="0.33" showDecimals={true}/>
                  <TotalGPACard label="Cummulative CGPA" value="3.80" rating="/4.0" topup="0.18" showDecimals={true}/>
                </div>
                <h1 className="mt-4 mb-4 font-bold text-[14px]">
                GPA from Past Semesters Analytics
                </h1>
                <GPAAnalyticsChart />
                <h1 className="mt-4 mb-4 font-bold text-[14px]">
                Current Semester Details
                </h1>
                <CourseTable />
              </div>
              <Link to="/class-advisor" className="w-full flex pb-5 place-content-center font-semibold hover:text-green-400 cursor-pointer">
                  Click here to get further advice for GPA
                </Link>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default GPAGuardian;

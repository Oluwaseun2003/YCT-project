import SideBar from "../components/SideBar";
import Navbar from "../components/NavBar";
import { useState } from "react";

const AcademicCalendar = ({ setLoggedIn }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const academicEvents = [
    {
      date: "2023-05-08",
      event: "Freshers’ Registration",
      details: "May 8th – May 12th, 2023",
    },
    {
      date: "2023-02-13",
      event: "ND II Industrial Experience SIWES",
      details: "Feb 13th – June 2nd, 2023",
    },
    {
      date: "2023-05-15",
      event: "Registration of Returning Students",
      details: "May 15th – May 19th, 2023",
    },
    {
      date: "2023-05-22",
      event: "Commencement of Lectures",
      details: "May 22nd, 2023",
    },
    {
      date: "2023-05-30",
      event: "Academic Board Consideration of SEMIC Cases and Results",
      details: "May 30th – June 1st, 2023",
    },
    {
      date: "2023-06-19",
      event: "Late Registration (with penalty)",
      details: "June 19th – 23rd, 2023",
    },
    {
      date: "2023-07-20",
      event: "Matriculation for 2022/2023",
      details: "July 20th, 2023",
    },
    {
      date: "2023-07-24",
      event: "Generation of Nominal Roll",
      details: "July 24th – 28th, 2023",
    },
    {
      date: "2023-08-04",
      event: "End of Lectures and Certification of Candidates for Examination",
      details: "August 4th, 2023",
    },
    {
      date: "2023-08-07",
      event: "Practical Examinations/Revision",
      details: "Aug. 7th – 11th, 2023",
    },
    {
      date: "2023-08-14",
      event: "First Semester Examinations/CBT",
      details: "Aug. 14th – 25th, 2023",
    },
    {
      date: "2023-09-11",
      event: "Generation of ER4",
      details: "September 11th – 15th, 2023",
    },
    {
      date: "2023-08-26",
      event: "Students Vacate Hostel",
      details: "August 26th, 2023",
    },
    {
      date: "2023-08-29",
      event: "First Semester Break",
      details: "Aug. 29th – Sept. 8th, 2023",
    },
    {
      date: "2023-09-11",
      event: "Marking and Post Moderation of Scripts",
      details: "Sept. 11th – Sept. 22nd, 2023",
    },
    {
      date: "2023-09-23",
      event:
        "Uploading/Processing of Result/School Board Consideration of Result/SEMIC Cases",
      details: "Sept. 23rd – 29th, 2023",
    },
  ];
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
                    Academic Calendar
                    </div>
                  </div>
                </div>
                <h2 className="font-semibold mb-6">
                  Step by step Guide
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {academicEvents.map((event, index) => (
                    <div
                      key={index}
                      className="bg-shades-white p-6 rounded-xl shadow-md"
                    >
                      <p className="text-lg font-semibold mb-2">
                        {event.event}
                      </p>
                      <p className="text-gray-600">{event.details}</p>
                      <p className="text-gray-500 mt-2">{event.date}</p>
                    </div>
                  ))}
                </div>{" "}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default AcademicCalendar;

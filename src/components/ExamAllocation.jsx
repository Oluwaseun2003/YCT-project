import SideBar from "./SideBar";
import Navbar from "./NavBar";
import { useState } from "react";

const ExamAllocation = ({ setLoggedIn }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  // Initial state for input values
  const [examData, setExamData] = useState({
    examDate: "Day 1 - Monday 12, November 2023",
    examTime: "9:00Am - 12:00Noon Prompt",
    course: "COM 224 Digital networking",
    examLocation: "Multipurpose Hall",
    direction: "Location Description goes here",
  });

  // Function to handle changes in input values
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setExamData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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
                      Exam Allocation System
                    </div>
                  </div>
                </div>

                <div className="w-full flex p-8 text-[20px] place-content-center mt-3 font-semibold">
                  Semester Examination schedule
                </div>

                {/* Inputs section */}
                <div className="w-full items-center flex flex-col mt-5">
                  <div className="bg-shades-white p-7 py-10 rounded-2xl">
                    <div className="flex flex-col mb-5">
                      <label className="text-grey-60 font-semibold mb-1">
                        Exam Date
                      </label>
                      <input
                        type="text"
                        name="examDate"
                        placeholder="Enter exam date"
                        value={examData.examDate}
                        onChange={handleInputChange}
                        className="w-[462px] bg-grey-30 rounded-[8px] p-3 font-semibold"
                      />
                    </div>

                    <div className="flex flex-col mb-5">
                      <label className="text-grey-60 font-semibold mb-1">
                        Exam Time
                      </label>
                      <input
                        type="text"
                        name="examTime"
                        placeholder="Enter exam time"
                        value={examData.examTime}
                        onChange={handleInputChange}
                        className="bg-grey-30 rounded-[8px] p-3 font-semibold"
                      />
                    </div>

                    <div className="flex flex-col mb-5">
                      <label className="text-grey-60 font-semibold mb-1">
                        Course
                      </label>
                      <input
                        type="text"
                        name="course"
                        placeholder="Enter course"
                        value={examData.course}
                        onChange={handleInputChange}
                        className="bg-grey-30 rounded-[8px] p-3 font-semibold"
                      />
                    </div>

                    <div className="flex flex-col mb-5">
                      <label className="text-grey-60 font-semibold mb-1">
                        Exam Location
                      </label>
                      <input
                        type="text"
                        name="examLocation"
                        placeholder="Enter exam location"
                        value={examData.examLocation}
                        onChange={handleInputChange}
                        className="bg-grey-30 rounded-[8px] p-3 font-semibold"
                      />
                    </div>

                    <div className="flex flex-col">
                      <label className="text-grey-60 font-semibold mb-1">
                        Direction
                      </label>
                      <input
                        type="text"
                        name="direction"
                        placeholder="Enter direction"
                        value={examData.direction}
                        onChange={handleInputChange}
                        className="bg-grey-30 rounded-[8px] p-3 font-semibold"
                      />
                    </div>
                  </div>
                </div>

                {/* Buttons */}
                <div className="w-full flex place-content-center mt-5">
                  <button className="bg-green-base text-shades-white font-semibold rounded-[8px] p-3 w-[200px] mr-3">
                    Print out
                  </button>
                  <button className="font-semibold border-[1px] border-green-900 rounded-[8px] p-3 w-[200px]">
                  Download schedule
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default ExamAllocation;

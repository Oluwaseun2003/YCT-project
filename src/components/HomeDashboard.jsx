/* eslint-disable react/prop-types */
import profilePicture from "../assets/profile picture.jpg";

const InfoBlock = ({ title, details }) => (
  <div className="flex flex-col mr-[50px]">
    <div className="text-grey-60 text-[14px]">{title}</div>
    <div className="font-bold text-shades-black text-[18px] mb-2">
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
    { title: "Course registration status", details: "REGISTERED" },
    { title: "Hotel status", details: "NOT APPLIED" },
  ];

  return (
    <div className={isExpanded ? "w-full" : "w-full"}>
      <div className="flex flex-col px-12 py-11">
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
            <div className="flex flex-col font-bold text-shades-white mr-5">
              Student status: <span>Active</span>
            </div>
          </div>
        </div>

        <div className="w-full h-[110px] bg-green-700 rounded-2xl flex p-8 items-center text-white mt-10">
          <div className="flex">
            {infoBlocks.map((block, index) => (
              <InfoBlock
                key={index}
                title={block.title}
                details={block.details}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDashboard;

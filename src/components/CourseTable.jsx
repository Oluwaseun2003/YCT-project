import { FiChevronUp, FiChevronDown, FiMoreVertical } from 'react-icons/fi';

const CourseTable = () => {
  // Define arrays for course codes, titles, and gradings
  const courseCodes = ['COM 111', 'COM 112', 'COM 113', 'COM 115', 'COM 116', 'COM 117', 'GNS 127', 'MTH 111'];
  const courseTitles = ['INTRODUCTION TO COMPUTING', 'INTRODUCTION TO DIGITAL ELECTRONICS', 'INTRODUCTION TO PROGRAMMING', 'INTRODUCTION TO LINUX OPERATING SYSTEM', 'STATISTICS FOR COMPUTING I', 'COMPUTER APPLICATION PACKAGES I', 'USE OF ENGLISH', 'CITIZENSHIP EDUCATION', 'LOGIC AND LINEAR ALGEBRA',];
  const gradings = ['A1', 'B2', 'C3', 'A1', 'A1', 'A2', 'A1', 'B3', 'A2'];

  return (
    <div className="rounded-[16px] bg-[#F9FAFB] border border-grey-30">

      {/* Table headers */}
      <div className="grid grid-cols-6 py-2 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5 bg-[#F9FAFB]">
        <div className="col-span-2 flex items-center justify-between">
          <p className="font-medium text-green-300">Course Code</p>
          <div className='flex flex-col items-center mr-10 text-[#667185] m-0'>
          <FiChevronUp className="-mb-1.5 cursor-pointer text-gray-500" />
          <FiChevronDown className="cursor-pointer text-gray-500" />
          </div>
          
        </div>
        <div className="col-span-3 hidden items-center sm:flex justify-between">
          <p className="font-medium text-gray-700">Course Name</p>
          <div className='flex flex-col items-center mr-10 text-[#667185] m-0'>
          <FiChevronUp className="-mb-1.5 cursor-pointer text-gray-500" />
          <FiChevronDown className="cursor-pointer text-gray-500" />
          </div>
          
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium text-gray-700">Units</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium text-gray-700">GPA Grading</p>
        </div>
      </div>

      {/* Table rows */}
      {courseCodes.map((code, index) => (
        <div key={index} className="grid grid-cols-6 border-grey-30 border-t py-6 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5 bg-shades-white">
          <div className="col-span-2 flex items-center">
            <p className="text-sm font-semibold">{code}</p>
          </div>
          <div className="col-span-3 hidden items-center sm:flex">
            <p className="text-sm">{courseTitles[index]}</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm">3 Units</p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm">{gradings[index]}</p>
            
          </div>
          <div className="col-span-1 ml-auto">
          <FiMoreVertical className="ml-1 cursor-pointer text-gray-500" />
          </div>
        </div>

      ))}
    </div>
  );
};

export default CourseTable;
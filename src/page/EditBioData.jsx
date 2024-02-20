import { useState } from "react";
import SideBar from "../components/SideBar";
import Navbar from "../components/NavBar";
import ProfilePicture from "../assets/profile picture.jpg";

const EditBioData = ({ setLoggedIn }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [formData, setFormData] = useState({
    fullName: "Oduneye Oluwafemi David",
    matricNumber: "F/ND/21/3210121",
    programmeType: "ND Full Time",
    session: "2022/2023",
    school: "Technology",
    department: "Computer Science",
    programme: "ND(Computer Science) Full Time",
    level: "ND",
    entryYear: "2021/2022",
    sex: "Male",
    dob: "22/04/2003",
    email: "oduneyedavid23@gmail.com",
    phone: "0801234567",
    residentialAddress: "Yaba, Lagos",
    pob: "Lagos",
    sor: "Lagos",
  });

  // Handle changes in any input field
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to render input fields
  const renderInputField = (label, name, placeholder) => (
    <div className="flex flex-col mb-3">
      <label className="text-grey-60 font-semibold mb-1">{label}</label>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        value={formData[name]}
        onChange={handleInputChange}
        className="border-2 border-grey-30 rounded-[6px] p-3 font-semibold"
      />
    </div>
  );

  return (
    <>
      <div className="w-full flex bg-grey-20">
        <SideBar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
        <div className="flex flex-col w-full">
        <Navbar name="Olufemi" />
          <main className="flex">
            <div className="w-full">
              <div className="flex flex-col px-12 py-11">
                <div className="flex items-center space-x-5">
                  <div className="w-[99px] h-[99px] border-2 border-grey-20 rounded-full overflow-hidden">
                    <img
                      src={ProfilePicture}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex items-center font-bold text-[16px] px-6 py-4 bg-grey-40 rounded-[6px] cursor-pointer">
                    Change profile picture
                  </div>
                </div>

                <h1 className="mt-10 mb-10 font-bold text-2xl">
                  Personal Information
                </h1>

                <form className="w-full flex items-center gap-7">
                  <div className="flex flex-1 flex-col w-full">
                    {renderInputField(
                      "Full Name",
                      "fullName",
                      "Enter your full name"
                    )}
                    {renderInputField(
                      "Programme Type",
                      "programmeType",
                      "Enter your Programme Type"
                    )}
                    {renderInputField(
                      "Departmental School",
                      "school",
                      "Enter your Departmental School"
                    )}
                    {renderInputField(
                      "Programme",
                      "programme",
                      "Enter your Programme"
                    )}
                    {renderInputField(
                      "Entry Year",
                      "entryYear",
                      "Enter your Entry Year"
                    )}
                    {renderInputField(
                      "Date of Birth",
                      "dob",
                      "Enter your Date of Birth"
                    )}
                    {renderInputField(
                      "Phone",
                      "phone",
                      "Enter your phone number"
                    )}
                    {renderInputField(
                      "Place of Birth",
                      "pob",
                      "Enter your Place of Birth"
                    )}
                  </div>

                  <div className="flex flex-1 flex-col w-full">
                    {renderInputField(
                      "Matric Number",
                      "matricNumber",
                      "Enter your Matric Number"
                    )}
                    {renderInputField(
                      "Session",
                      "session",
                      "Enter your Session Year"
                    )}
                    {renderInputField(
                      "Department",
                      "department",
                      "Enter your Department"
                    )}
                    {renderInputField(
                      "Current Level",
                      "level",
                      "Enter your Current Level"
                    )}
                    {renderInputField("Sex", "sex", "Enter your Sex")}
                    {renderInputField("Email", "email", "Enter your Email")}
                    {renderInputField(
                      "Residential Address",
                      "residentialAddress",
                      "Enter your Residential Address"
                    )}
                    {renderInputField(
                      "State of Origin",
                      "sor",
                      "Enter your State of Origin"
                    )}
                  </div>

                </form>

                <h1 className="mt-10 mb-10 font-bold text-2xl">
                  Parent/Guidance Information
                </h1>

                <form className="w-full flex items-center gap-7">
                  <div className="flex flex-1 flex-col w-full">
                    {renderInputField(
                      "Full Name",
                      "fullName",
                      "Enter your full name"
                    )}
                    {renderInputField(
                      "Phone",
                      "phone",
                      "Enter your phone number"
                    )}
                  </div>

                  <div className="flex flex-1 flex-col w-full">
                    {renderInputField(
                      "Residential Address",
                      "residentialAddress",
                      "Enter your Residential Address"
                    )}
                    {renderInputField(
                      "Email",
                      "email",
                      "Enter your email"
                    )}
                  </div>

                </form>
                <div className="flex items-center font-bold text-sm px-4 text-shades-white py-2 bg-green-100 rounded-[6px] w-16 mt-5">
                    Print
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default EditBioData;

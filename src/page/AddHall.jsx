import { Link } from "react-router-dom";
import Navbar from "../components/NavBar";
import { useState } from "react";
import SideBarAdmin from "../components/SideBarAdmin";

const AddHall = ({ setLoggedIn }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const [hallData, setHallData] = useState({
    hallName: "Food Tech hall",
    className: "Block B",
    numberOfSeats: "50 seats",
    assignColor: "",
    uploadImage: "Click here to upload image ",
    direction: "Walk to back gate - the tall building beside the gate ",
  });

  // Function to handle changes in input values
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setHallData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleColorChange = (color) => {
    setHallData((prevData) => ({
      ...prevData,
      assignColor: color,
    }));
  };

  const colorOptions = [
    { name: "Red", color: "red-400" },
    { name: "Green", color: "green-400" },
    { name: "Blue", color: "blue-400" },
    // Add more color options as needed
  ];

  return (
    <>
      <div className="w-full flex bg-grey-20">
        <SideBarAdmin isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
        <div className="flex flex-col w-full">
          <Navbar name="Ogundipo" />
          <main className="flex">
            <div className="w-full">
              <div className="flex flex-col px-12 py-11">
                <div className="w-full h-[135px] bg-green-200 rounded-2xl flex p-16 items-center ">
                  <div className="flex flex-col">
                    <div className="font-bold text-[32px] text-shades-white mb-2">
                      Add new hall
                    </div>
                  </div>
                </div>

                {/* Inputs section */}
                <div className="w-full items-center flex flex-col mt-10">
                  <div className="bg-shades-white p-7 py-10 rounded-2xl">
                    <div className="flex flex-col mb-5">
                      <label className="text-grey-60 font-semibold mb-1">
                        Hall name
                      </label>
                      <input
                        type="text"
                        name="hallName"
                        placeholder="Enter hall name"
                        value={hallData.hallName}
                        onChange={handleInputChange}
                        className="w-[462px] bg-grey-30 rounded-[8px] p-3 font-semibold"
                      />
                    </div>

                    <div className="flex flex-col mb-5">
                      <label className="text-grey-60 font-semibold mb-1">
                        Class name
                      </label>
                      <input
                        type="text"
                        name="className"
                        placeholder="Enter class name"
                        value={hallData.className}
                        onChange={handleInputChange}
                        className="bg-grey-30 rounded-[8px] p-3 font-semibold"
                      />
                    </div>

                    <div className="flex flex-col mb-5">
                      <label className="text-grey-60 font-semibold mb-1">
                        Number of Seats
                      </label>
                      <input
                        type="text"
                        name="numberOfSeats"
                        placeholder="Enter number of Seats"
                        value={hallData.numberOfSeats}
                        onChange={handleInputChange}
                        className="bg-grey-30 rounded-[8px] p-3 font-semibold"
                      />
                    </div>

                    <div className="flex flex-col mb-5">
                      <label className="text-grey-60 font-semibold mb-1">
                        Assign color
                      </label>
                      <div className="relative inline-block w-full">
                        <div
                          className={`w-3 h-3 rounded-full bg-${hallData.assignColor} absolute top-1/2 transform -translate-y-1/2 left-4 right-1 cursor-pointer`}
                        />
                        <select
                          name="assignColor"
                          value={hallData.assignColor}
                          onChange={handleInputChange}
                          className="w-full py-3 pl-10 pr-2 font-semibold bg-grey-30 rounded-md appearance-none focus:outline-none focus:border-green-base"
                        >
                          <option value="" disabled>
                            Select a color
                          </option>
                          {colorOptions.map((option) => (
                            <option key={option.color} value={option.color}>
                              {option.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="flex flex-col mb-5">
                      <label className="text-grey-60 font-semibold mb-1">
                        Upload image
                      </label>
                      <input
                        type="text"
                        name="uploadImage"
                        placeholder="Click here to upload image "
                        value={hallData.uploadImage}
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
                        value={hallData.direction}
                        onChange={handleInputChange}
                        className="bg-grey-30 rounded-[8px] p-3 font-semibold"
                      />
                    </div>
                  </div>
                </div>

                {/* Buttons */}
                <div className="w-full flex place-content-center items-center mt-2">
                  <Link to="/hall-allocation" className="bg-green-base text-shades-white font-semibold flex place-content-center rounded-[8px] p-3 w-[200px] mr-3">
                    Save hall
                  </Link>
                  <button className="font-semibold border-[1px] border-green-900 rounded-[8px] p-3 w-[200px]">
                  Add to draft
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

export default AddHall;

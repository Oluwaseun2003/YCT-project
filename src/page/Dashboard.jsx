import SideBar from "../components/SideBar";
import HomeDashboard from "../components/HomeDashboard";
import Navbar from "../components/NavBar";
import { useState } from "react";

const Dashboard = ({ setLoggedIn }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  //   const handleLogout = () => {
  //     setLoggedIn(false);
  //   };

  return (
    <>
      <div className="w-full flex bg-grey-20">
        <SideBar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />

        <div className="flex flex-col w-full">
          <Navbar />

          <main className="flex">
            <HomeDashboard isExpanded={isExpanded} />
          </main>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

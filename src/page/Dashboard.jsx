import NavigationBar from "../components/NavigationBar";
import HomeDashboard from "../components/HomeDashboard";
import { useState } from "react";

const Dashboard = ({ setLoggedIn }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  //   const handleLogout = () => {
  //     setLoggedIn(false);
  //   };

  return (
    <>
      <div className="w-full flex bg-green-700">
        <NavigationBar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />

        <main className={`flex ${isExpanded ? "grow" : ""}`}>
          <HomeDashboard isExpanded={isExpanded} />
        </main>
      </div>
    </>
  );
};

export default Dashboard;

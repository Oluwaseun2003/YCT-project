import NavigationBar from "../components/NavigationBar";
import HomeDashboard from "../components/HomeDashboard";

const Dashboard = ({ setLoggedIn }) => {
//   const handleLogout = () => {
//     setLoggedIn(false);
//   };

  return (
    <>
    <div className="bg-green-700">
       <NavigationBar />

    <main>
      <HomeDashboard />
    </main>
      
      </div>
    </>
    
  );
};

export default Dashboard;

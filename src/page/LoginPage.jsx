import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import logo from "../assets/logo.png";

const LoginPage = ({ setLoggedIn }) => {
  const [matricNumber, setMatricNumber] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [selectedRole, setSelectedRole] = useState("student");
  const navigate = useNavigate();

  const handleLogin = () => {
    // For simplicity, let's assume a successful login for any non-empty username and password.
    if (matricNumber && password) {
      setLoggedIn(true);
      // Redirect to the appropriate dashboard based on the selected role
      navigate(`/${selectedRole}-dashboard`);
    }
  };

  const handleRoleChange = (role) => {
    setSelectedRole(role);
  };

  return (
    <div className="relative w-full min-h-screen bg-cover bg-center bg-loginbg">
      <div className="flex justify-center items-center">
        <img src={logo} alt="logo" className="w-[79px] h-[76] m-5" />
      </div>
      <div className="flex justify-center items-center h-full mb-5">
        <form className="max-w-[340px] lg:max-w-[464px] w-full mx-auto bg-shades-white px-8 py-7 rounded-2xl">
          <div className="flex flex-col justify-center items-center pb-2 text-center">
            <h1 className="text-lg lg:text-2xl font-bold text-shades-black">
              Sign in to your {selectedRole === "student" ? "student" : "admin"} portal
            </h1>
            <p className="text-[14px] mt-2 mb-4 text-[#645D5D]">
              Use your {selectedRole === "student" ? "matric number" : "admin credentials"} to sign in
            </p>
          </div>

          <div className="flex flex-col mb-4 text-[14px] font-medium">
            <label>Enter Your {selectedRole === "student" ? "Matric Number" : "Admin ID"}</label>
            <input
              className="border border-[#D0D5DD] rounded-lg relative bg-shades-white p-2 lg:p-4 mt-2"
              type="text"
              value={matricNumber}
              onChange={(e) => setMatricNumber(e.target.value)}
            />
          </div>
          <div className="relative flex flex-col text-[14px] font-medium">
            <label>Enter Your Password</label>
            <input
              className="border border-[#D0D5DD] rounded-lg relative bg-shades-white p-2 lg:p-4 mt-2"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className="absolute top-[50px] right-3 cursor-pointer text-[#505153]"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <div className="mt-4">
        <label className="mr-2 text-[14px] font-medium">Select Role:</label>
        <select
          className="border border-[#D0D5DD] rounded-lg p-2"
          value={selectedRole}
          onChange={(e) => handleRoleChange(e.target.value)}
        >
          <option value="student">Student</option>
          <option value="admin">Admin</option>
        </select>
      </div>
          <div className="text-sm mt-4">
            <a href="#" className="font-medium text-green-base">
              Forgot password?
            </a>
          </div>
          <button
            className="font-medium w-full py-3 mt-8 bg-green-base hover:bg-green-600 relative text-shades-white rounded"
            onClick={handleLogin}
          >
            Sign In
          </button>
        </form>
      </div>
      <div className="flex justify-center items-center">
        <p className="max-w-[350px] lg:max-w-[428px] w-full mx-auto bg-shades-white text-[14px] text-shades-black text-center px-6 py-4 rounded-full flex flex-col gap-1 lg:block">
          Are you a new student?{" "}
          <span className="font-medium text-green-base hover:text-green-600 cursor-pointer">
            Login with Registration number
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;

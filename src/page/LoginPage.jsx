import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import logo from "../assets/logo.png";

const LoginPage = ({ setLoggedIn }) => {
  const [matricNumber, setMatricNumber] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // For simplicity, let's assume a successful login for any non-empty username and password.
    if (matricNumber && password) {
      setLoggedIn(true);
      navigate("/dashboard");
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-cover bg-center bg-loginbg">      
      <div className="flex justify-center items-center">
        <img src={logo} alt="logo" className="w-[79px] h-[76] m-10" />
      </div>
      <div className="flex justify-center items-center h-full mb-5">
        <form className="max-w-[464px] w-full mx-auto bg-shades-white px-8 py-10 rounded-2xl">
          <div className="flex flex-col justify-center items-center py-2 text-center">
            <h1 className="text-2xl font-bold text-shades-black">
              Sign in to your student portal
            </h1>
            <p className="text-[14px] mt-2 mb-4 text-[#645D5D]">
              Use your work email to sign in to your team workspace
            </p>
          </div>

          <div className="flex flex-col mb-4 text-[14px] font-medium">
            <label>Enter Your Matric Number</label>
            <input
              className="border border-[#D0D5DD] rounded-lg relative bg-shades-white p-4 mt-2"
              type="text"
              value={matricNumber}
              onChange={(e) => setMatricNumber(e.target.value)}
            />
          </div>
          <div className="relative flex flex-col text-[14px] font-medium">
            <label>Enter Your Password</label>
            <input
              className="border border-[#D0D5DD] rounded-lg relative bg-shades-white p-4 mt-2"
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
          <div className="text-sm mt-4">
            <a
              href="#"
              className="font-medium text-green-base"
            >
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
        <p className="max-w-[428px] w-full mx-auto bg-shades-white text-[14px] text-shades-black text-center px-6 py-4 rounded-[30px]">
        Are you a new student? <span className="font-medium text-green-base hover:text-green-600 cursor-pointer">Login with Registration number</span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;

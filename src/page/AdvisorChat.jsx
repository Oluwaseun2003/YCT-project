import SideBar from "../components/SideBar";
import Navbar from "../components/NavBar";
import { useState } from "react";
import Profile from "../assets/profile picture.jpg";

const AdvisorChat = ({ setLoggedIn }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [userInput, setUserInput] = useState("");
  const [chatMessages, setChatMessages] = useState([]);
  const [botResponseIndex, setBotResponseIndex] = useState(0);

  const botResponses = [
    "Hello! I am a simulated bot. How can I assist you today?",
    "To register for your course form, please follow these steps:\n1. Log in to your school portal using your credentials.\n2. Navigate to the 'Registration' or 'Student Services' section.\n3. Look for the option that says 'Course Registration' or something similar.\n4. Select the courses you wish to register for by following the prompts on the screen.\n5. Double-check your selected courses to ensure accuracy.\n6. Submit your course registration.\nIf you encounter any difficulties or if there are specific instructions unique to your school portal, please refer to the user manual or contact the school's IT support for further assistance. They will be able to provide personalized guidance based on your school's system.\nIf you have any more questions or need additional assistance, feel free to ask!",
    "To pay your school fees, please follow these steps:\n1. Log in to your school portal using your credentials.\n2. Navigate to the 'Financial' or 'Payments' section.\n3. Look for the option that says 'Pay School Fees' or something similar.\n4. Select the fees you need to pay and follow the prompts on the screen.\n5. Choose your preferred payment method and provide the necessary details.\n6. Double-check the payment details and submit your payment.\nIf you encounter any issues or have specific instructions for fee payment, refer to the user manual or contact the school's financial office for assistance.\nFeel free to ask if you have more questions or need further guidance!",
    "Need assistance with anything else? I'm here to help!",
    "If you have any questions about your courses, fee payments, or need guidance on any other topic, feel free to ask!",
    "Hello! How may I be of service to you today?",
  ];

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleAskQuestion = () => {
    const newUserMessage = { type: "user", text: userInput };
    setChatMessages((prevMessages) => [...prevMessages, newUserMessage]);
    setUserInput("");

    // Simulate bot response
    if (botResponseIndex < botResponses.length) {
      const botResponse = {
        type: "bot",
        text: botResponses[botResponseIndex],
      };
      setChatMessages((prevMessages) => [...prevMessages, botResponse]);
      setBotResponseIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <>
      <div className="w-full flex bg-grey-20">
        <SideBar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
        <div className="flex flex-col w-full">
        <Navbar name="Olufemi" />
          <main className="flex">
            <div className="w-full">
              <div className="flex flex-col px-12 py-11">
                <div className="w-full h-[135px] bg-green-200 rounded-2xl flex p-16 items-center mb-10">
                  <div className="flex flex-col">
                    <div className="font-bold text-[32px] text-shades-white mb-2">
                      Advisor AI
                    </div>
                  </div>
                </div>
                <div className="w-full flex p-5 place-content-center mt-5 font-semibold">
                  Start a conversations with you Advisor AI
                </div>

                <div className="w-full flex flex-col px-12 mt-5">
                  {chatMessages.map((message, index) => (
                    <div
                      key={index}
                      className={`w-full flex ${
                        message.type === "user"
                          ? "justify-start"
                          : "justify-end"
                      } items-center mt-3`}
                    >
                      {message.type === "user" ? (
                        <>
                          <div className="flex-shrink-0 mr-3">
                            <img
                              src={Profile}
                              alt="User Profile"
                              className="w-8 h-8 rounded-full"
                            />
                          </div>
                          <div className="p-3 bg-green-800 text-shades-white rounded-[8px] max-w-[400px]">
                            {message.text}
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="p-3 bg-shades-white rounded-[8px]">
                            {message.text}
                          </div>
                          <div className="flex-shrink-0 ml-3">
                            <img
                              src={Profile}
                              alt="Bot Profile"
                              className="w-8 h-8 rounded-full"
                            />
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </div>

                {/* Input for user question */}
                <div className="w-full flex place-content-center mt-10">
                  <input
                    type="text"
                    placeholder="Enter your question here"
                    value={userInput}
                    onChange={handleInputChange}
                    className="w-[480px] border-2 border-grey-30 rounded-[8px] p-3"
                  />
                  <button
                    onClick={handleAskQuestion}
                    className="ml-3 px-4 py-2 bg-green-500 text-shades-white rounded-[8px] hover:bg-green-700"
                  >
                    Ask
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

export default AdvisorChat;

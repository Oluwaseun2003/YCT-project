import { useState, useRef } from "react";

const Chat = ({ adviserName }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const chatContainerRef = useRef(null);

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      const updatedMessages = [
        ...messages,
        { sender: "You", text: newMessage },
      ];
      setMessages(updatedMessages);
      setNewMessage("");

      // Simulate adviser reply after a short delay
      setTimeout(() => {
        const adviserReply = {
          sender: adviserName,
          text: "Thank you for reaching out. I'll get back to you shortly.",
        };
        setMessages((prevMessages) => [...prevMessages, adviserReply]);

        // Scroll to the bottom of the chat container when a new message is sent
        chatContainerRef.current.scrollTop =
          chatContainerRef.current.scrollHeight;
      }, 1000);
    }
  };

  return (
    <>
      <div className="mt-4 p-4">
        <div className="font-semibold text-lg mb-2">{`Chat with ${adviserName}`}</div>
        <div
          ref={chatContainerRef}
          className="overflow-y-auto max-h-96 p-4 max-w-[500px]"
        >
          {messages.map((message, index) => (
            <div key={index} className="mb-2">
              <strong>{message.sender}:</strong>
              <div>
                {message.text}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex place-content-center mt-10">
        <input
          type="text"
          className="w-[480px] border-2 border-grey-30 rounded-[8px] p-3"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button
          onClick={handleSendMessage}
          className="ml-3 px-4 py-2 bg-green-500 text-shades-white rounded-[8px] hover:bg-green-700"
        >
          Send
        </button>
      </div>
    </>
  );
};

export default Chat;

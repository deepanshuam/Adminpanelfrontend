import React, { useState } from "react";

const ChatSystem = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Welcome! How can I assist you today?" },
  ]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);
    setInput("");

    // Simulating bot response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "I will process your request soon." },
      ]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-full bg-black text-white rounded-lg shadow-lg p-4">
      <h2 className="text-xl font-semibold text-center mb-4">AI Assistant</h2>
      <div className="flex-1 overflow-y-auto space-y-3 p-2 border-b border-gray-700">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-2 rounded-lg ${
              msg.sender === "user"
                ? "bg-rose-400 text-white self-end"
                : "bg-gray-800 text-white self-start"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="flex items-center p-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full p-2 bg-gray-800 text-white rounded-md border border-gray-600 focus:border-rose-400 outline-none"
          placeholder="Type a message..."
        />
        <button
          onClick={handleSendMessage}
          className="ml-2 p-2 bg-rose-400 text-white rounded-md hover:bg-rose-600"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatSystem;

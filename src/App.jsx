import React from "react";
import { useNavigate } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import "./widget.css";

function App() {
  const navigate = useNavigate();

  const handleChatbotClick = () => {
    navigate("/chatbot");
  };

  return (
    <div className="relative min-h-screen bg-gray-100">
      <div id="chatbot-widget">
        <button
          onClick={handleChatbotClick}
          className="fixed bottom-5 right-5 bg-blue-400 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition"
          aria-label="Open Chatbot"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import { ChevronLeft, Menu, BotMessageSquare } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom'; // ✅ make sure you import useLocation

const ChatHeader = ({ isInputFocused }) => {
  const navigate = useNavigate();
  const location = useLocation(); // ✅ gets current location object
  const currentParams = new URLSearchParams(location.search); // ✅ declare this before using it

  const handleBackClick = () => {
    navigate({
      pathname: "/",
      search: `?${currentParams.toString()}`, // ✅ now this won't throw an error
    });
  };

  return (
    <div className="absolute inset-0 bg-blue-400 text-white px-4 rounded-3xl z-0">
      <button 
        onClick={handleBackClick} 
        className="absolute top-4 left-4 text-white p-2 rounded-full hover:bg-blue-700 transition">
        <ChevronLeft className="w-6 h-6" />
      </button>

      {isInputFocused && (
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 text-center">
          <BotMessageSquare className="w-8 h-8 mx-auto" />
          <p className="text-xl font-semibold">Chatbot</p>
        </div>
      )}

      <button 
        className="absolute top-4 right-4 text-white p-2 rounded-full hover:bg-blue-700 transition">
        <Menu className="w-6 h-6" />
      </button>
    </div>
  );
};

export default ChatHeader;

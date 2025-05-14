import React, { useState, useEffect } from 'react';
import ChatHeader from './ChatHeader';
import ChatBody from './ChatBody';

const Chatbot = () => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const user = {
      api_id: params.get("api_id"),
      user_id: params.get("user_id"),
      name: params.get("name"),
      email: params.get("email"),
      created_at: params.get("created_at"),
    };
    console.log("✅ Chatbot User Info:", user);
    setUserDetails(user);
  });

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="w-[360px] h-[640px] rounded-3xl flex flex-col overflow-hidden border border-gray-300 backdrop-blur-md bg-white/80 shadow-xl">
        <ChatHeader isInputFocused={isInputFocused} user={userDetails} />
        <ChatBody setIsInputFocused={setIsInputFocused} isInputFocused={isInputFocused} user={userDetails} />
      </div>
    </div>
  );
};

export default Chatbot;

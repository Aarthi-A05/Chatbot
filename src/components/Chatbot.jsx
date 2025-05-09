import React, { useState } from 'react';
import ChatHeader from './ChatHeader';
import ChatBody from './ChatBody';

const Chatbot = () => {
  const [isInputFocused, setIsInputFocused] = useState(false);

  return (
    <div className="min-h-screen bg-transparent">
      <div className="fixed bottom-4 right-4 z-50">
        <div className="w-[360px] h-[640px] rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex flex-col overflow-hidden border border-gray-300 relative">
          <ChatHeader isInputFocused={isInputFocused} />
          <ChatBody setIsInputFocused={setIsInputFocused} isInputFocused={isInputFocused} />
        </div>
      </div>
    </div>
  );
};

export default Chatbot;

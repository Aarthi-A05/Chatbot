import React, { useState } from 'react';
import ChatHeader from './ChatHeader';
import ChatBody from './ChatBody';

const Chatbot = () => {
  const [isInputFocused, setIsInputFocused] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="w-[360px] h-[640px] rounded-3xl flex flex-col overflow-hidden border border-gray-300 backdrop-blur-md bg-white/80 shadow-xl">
        <ChatHeader isInputFocused={isInputFocused} />
        <ChatBody setIsInputFocused={setIsInputFocused} isInputFocused={isInputFocused} />
      </div>
    </div>
  );
};

export default Chatbot;

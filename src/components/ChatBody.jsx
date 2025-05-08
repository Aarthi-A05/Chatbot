import React from 'react';
import { Bot } from 'lucide-react';
import Message from './Message';

const ChatBody = ({ setIsInputFocused, isInputFocused }) => {
  return (
    <div className="relative z-10 bg-white rounded-t-4xl p-4 flex-1 text-center overflow-auto mt-30 shadow-md">
      {!isInputFocused && (
        <>
          <Bot className="mx-auto w-10 h-10 text-blue-600 " />
          <p className="text-xl font-semibold text-gray text-center w-full">Chatbot</p>
        </>
      )}

      <div className="absolute bottom-0 left-0 w-full">
        <Message setIsInputFocused={setIsInputFocused} />
      </div>
    </div>
  );
};

export default ChatBody;

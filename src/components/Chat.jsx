// Chat.jsx
import React, { useState } from 'react';
import Message from './Message';
import ChatBody from './ChatBody';

const Chat = () => {
  const [input, setInput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const handleSend = () => {
    const trimmed = input.trim().toLowerCase();
    if (!trimmed) return;

    let botResponse = 'I didn’t understand that.';
    if (trimmed === 'hi' || trimmed === 'hai') botResponse = 'Hello!';
    else if (trimmed === 'how are you') botResponse = 'I’m just a bot, but doing great!';

    // Add both user and bot messages to chat history
    setChatHistory([...chatHistory, { sender: 'user', text: input }, { sender: 'bot', text: botResponse }]);
    setInput('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  const handleFileUpload = (file) => {
    if (file) alert(`You selected: ${file.name}`);
  };

  const startRecording = () => {
    alert('Audio recording started (mocked)');
  };

  return (
    <div className="flex flex-col h-screen">
      <ChatBody chatHistory={chatHistory} />
      <Message
        input={input}
        setInput={setInput}
        onSend={handleSend}
        onKeyPress={handleKeyPress}
        onFileUpload={handleFileUpload}
        onRecord={startRecording}
      />
    </div>
  );
};

export default Chat;

import React, { useState, useEffect, useRef } from 'react';
import { Plus, Mic } from 'lucide-react';

const Message = ({ setIsInputFocused }) => {
  const [input, setInput] = useState('');
  const [responses, setResponses] = useState([]);
  const scrollRef = useRef(null);
  const [autoScroll, setAutoScroll] = useState(true);

  const handleSend = () => {
    const trimmed = input.trim().toLowerCase();
    if (!trimmed) return;

    let botResponse = 'I didn’t understand that.';
    if (trimmed === 'hi' || trimmed === 'hai') botResponse = 'Hello!';
    else if (trimmed === 'how are you') botResponse = 'I’m just a bot, but doing great!';

    setResponses((prev) => [
      ...prev,
      { type: 'user', text: input },
      { type: 'bot', text: botResponse },
    ]);
    setInput('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      alert(`You selected: ${file.name}`);
    }
  };

  const startRecording = () => {
    alert('Audio recording started (mocked)');
  };

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
    const isBottom = scrollTop + clientHeight >= scrollHeight - 10;
    setAutoScroll(isBottom);
  };

  useEffect(() => {
    if (autoScroll) {
      scrollRef.current?.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [responses]);

  return (
    <div className="flex flex-col h-full">
      <div
        ref={scrollRef}
        className="flex-1 p-4 overflow-y-auto bg-white-100"
        onScroll={handleScroll}
        style={{ maxHeight: 'calc(100vh - 170px)' }} 
      >
        {responses.length === 0 ? (
          <p className="text-center text-gray-500">How can I help you!</p>
        ) : (
          responses.map((msg, index) => (
            <div
              key={index}
              className={`mb-2 p-2 rounded-lg max-w-xs ${
                msg.type === 'user'
                  ? 'bg-blue-200 self-end ml-auto text-right'
                  : 'bg-sky-100 self-start mr-auto text-left'
              }`}
            >
              {msg.text}
            </div>
          ))
        )}
      </div>

      <div className="bg-white p-3 border-t border-gray-300 flex items-center gap-2">
        <label className="cursor-pointer">
          <div className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200">
            <Plus className="w-5 h-5" />
          </div>
          <input type="file" className="hidden" onChange={handleFileUpload} />
        </label>

        <input
          type="text"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none"
          placeholder="Ask anything..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onFocus={() => setIsInputFocused(true)}
          onKeyDown={handleKeyPress}
        />

        <button
          onClick={startRecording}
          className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200"
          aria-label="Record Audio"
        >
          <Mic className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Message;

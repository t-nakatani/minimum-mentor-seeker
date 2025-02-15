import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Chat = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'Ludwig',
      content: 'Reactの基本的なコンポーネント作成と状態管理について教えてほしい！',
      avatar: 'https://cdn.usegalileo.ai/sdxl10/4a40669f-0be6-4ac6-861f-26f6710905e7.png'
    },
    {
      id: 2,
      sender: 'You',
      content: 'もちろんです！いつが都合いいですか？',
      avatar: 'https://cdn.usegalileo.ai/sdxl10/ec93a193-445a-43dd-9c13-9b6f0f4c4dd0.png'
    }
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;
    
    setMessages([...messages, {
      id: messages.length + 1,
      sender: 'You',
      content: newMessage,
      avatar: 'https://cdn.usegalileo.ai/sdxl10/ec93a193-445a-43dd-9c13-9b6f0f4c4dd0.png'
    }]);
    setNewMessage('');
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#131C24] justify-between overflow-x-hidden max-w-[480px] mx-auto">
      <div>
        {/* チャットヘッダー */}
        <div className="flex items-center bg-[#131C24] p-4 pb-2 justify-between border-b border-[#29374C]">
          <div 
            onClick={handleBackClick}
            className="text-[#F8F9FB] flex size-12 shrink-0 items-center cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
            </svg>
          </div>
          <h2 className="text-[#F8F9FB] text-lg font-bold leading-tight tracking-[-0.015em] ml-2">Chat with Ludwig</h2>
          <div className="flex-1"></div>
        </div>

        {/* メッセージリスト */}
        <div className="flex flex-col gap-4 p-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex items-end gap-3 ${message.sender === 'You' ? 'justify-end' : ''}`}>
              {message.sender !== 'You' && (
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 shrink-0"
                     style={{ backgroundImage: `url("${message.avatar}")` }} />
              )}
              <div className={`flex flex-col gap-1 ${message.sender === 'You' ? 'items-end' : 'items-start'}`}>
                <p className="text-[#8B95A5] text-[13px] font-normal leading-normal max-w-[360px]">{message.sender}</p>
                <p className={`text-base font-normal leading-normal max-w-[360px] rounded-xl px-4 py-3 text-left ${
                  message.sender === 'You' ? 'bg-[#F4C753] text-[#141C24]' : 'bg-[#1D2732] text-[#F8F9FB]'
                }`}>
                  {message.content}
                </p>
              </div>
              {message.sender === 'You' && (
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 shrink-0"
                     style={{ backgroundImage: `url("${message.avatar}")` }} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* メッセージ入力エリア */}
      <div className="border-t border-[#29374C]">
        <div className="flex items-center px-4 py-3 gap-3">
          <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 shrink-0"
               style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/f63f9ce8-ebfe-4c0b-8efc-d46b3c3c562b.png")' }} />
          <label className="flex flex-col min-w-40 h-12 flex-1">
            <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
              <input
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type a message..."
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#F8F9FB] focus:outline-0 focus:ring-0 border-none bg-[#1D2732] focus:border-none h-full placeholder:text-[#8B95A5] px-4 rounded-r-none border-r-0 pr-2 text-base font-normal leading-normal"
              />
              <div className="flex border-none bg-[#1D2732] items-center justify-center pr-4 rounded-r-xl border-l-0 !pr-2">
                <button
                  onClick={handleSendMessage}
                  className="min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#F4C753] text-[#141C24] text-sm font-medium leading-normal hidden @[480px]:block"
                >
                  Send
                </button>
              </div>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Chat; 
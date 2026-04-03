'use client';

import { useState, useEffect } from 'react';
import IconChatbot from '@public/icons/chatbot.svg';
import ChatBox from '@/components/ChatBox';

export default function ChatWidget() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    if (isChatOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isChatOpen]);

  return (
    <>
      <button
        onClick={() => setIsChatOpen(true)}
        data-gtm-action="click_ai_chat_btn"
        className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-white bg-gradient-to-r from-blue-600 via-purple-700 to-blue-600 transition duration-300 ease-out border-1 border-white rounded-lg group cursor-pointer z-10 animate-gradient"
      >
        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-white group-hover:translate-x-0 ease">
          <IconChatbot className="size-8 text-blue-700" />
        </span>
        <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease gap-2">
          <IconChatbot className="size-5 text-white" />
          Chat with My AI Assistant
        </span>
        <span className="relative invisible flex items-center gap-2">
          <IconChatbot className="size-5 text-white" />
          Chat with My AI Assistant
        </span>
      </button>

      {isChatOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
          <div className="w-full max-w-2xl h-[80vh] sm:h-[70vh] md:h-[600px] rounded-2xl shadow-2xl overflow-hidden bg-white">
            <ChatBox isOpen={true} onClose={() => setIsChatOpen(false)} />
          </div>
        </div>
      )}
    </>
  );
}

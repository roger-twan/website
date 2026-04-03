import type { Metadata } from 'next';
import ChatBox from '@/components/ChatBox';

export const metadata: Metadata = {
  title: 'Chat | Roger Twan',
  description: "Chat with Roger's AI Assistant.",
};

export default function ChatPage() {
  return (
    <div className="w-full p-0">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white pt-16 pb-8 sm:pt-24 sm:pb-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center animate__animated animate__fadeInDown">
              Chat with My AI Assistant
            </h1>
            <p className="text-lg mb-8 text-center max-w-2xl animate__animated animate__flipInX">
              Have a conversation with my AI assistant. Ask anything about me.
            </p>
          </div>
        </div>
      </section>

      {/* Chat Section - Overlapping Hero */}
      <section className="px-4 -mt-12 sm:-mt-18 pb-16">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden h-[600px]">
            <ChatBox isOpen={true} embedded={true} />
          </div>
        </div>
      </section>
    </div>
  );
}

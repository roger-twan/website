'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch('https://formsubmit.co/roger.twan@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <>
      <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <label htmlFor="name" className="block font-semibold mb-2">
              Full Name *
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="flex-1">
            <label htmlFor="email" className="block font-semibold mb-2">
              Email Address *
            </label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="subject" className="block font-semibold mb-2">
            Subject *
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block font-semibold mb-2">
            Message *
          </label>
          <textarea
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="message"
            name="message"
            rows={6}
            value={formData.message}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg shadow hover:bg-gradient-to-br hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center cursor-pointer"
          >
            Send Message
          </button>
        </div>
      </form>
    </>
  );
}

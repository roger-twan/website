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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a server
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="w-full p-0">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
              Get In Touch
            </h1>
            <p className="text-lg mb-8 text-center max-w-2xl">
              Ready to start your next project? Let&apos;s discuss how I can
              help bring your ideas to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Contact Details */}
            <div className="md:w-1/3 w-full mb-8 md:mb-0">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="flex flex-col gap-6">
                <div className="flex items-center">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white mr-4">
                    <i className="bi bi-envelope text-xl"></i>
                  </span>
                  <div>
                    <h6 className="font-bold mb-1">Email</h6>
                    <a
                      href="mailto:roger.twan@gmail.com"
                      className="text-blue-700 hover:underline"
                    >
                      roger.twan@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white mr-4">
                    <i className="bi bi-telephone text-xl"></i>
                  </span>
                  <div>
                    <h6 className="font-bold mb-1">Phone</h6>
                    <a
                      href="tel:+1234567890"
                      className="text-blue-700 hover:underline"
                    >
                      +1 (613) 862-1168
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white mr-4">
                    <i className="bi bi-geo-alt text-xl"></i>
                  </span>
                  <div>
                    <h6 className="font-bold mb-1">Location</h6>
                    <p className="mb-0 text-gray-700">
                      Ottawa, Ontario, Canada
                    </p>
                  </div>
                </div>
              </div>
              {/* Social Media Links */}
              <div className="mt-8">
                <h5 className="font-bold mb-3">Follow Me</h5>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/roger-twan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition"
                  >
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white">
                      <i className="bi bi-linkedin text-xl"></i>
                    </span>
                  </a>
                  <a
                    href="https://github.com/roger-twan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition"
                  >
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-neutral-800 text-white border border-neutral-700">
                      <i className="bi bi-github text-xl"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            {/* Contact Form */}
            <div className="md:w-2/3 w-full">
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
                    className="bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg shadow hover:bg-blue-700 transition flex items-center"
                  >
                    <i className="bi bi-send mr-2"></i>
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-center">
              What I Can Help You With
            </h2>
            <p className="text-lg text-center max-w-2xl">
              Professional services tailored to your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow p-8 flex flex-col items-center">
              <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white text-2xl mb-4">
                <i className="bi bi-laptop"></i>
              </span>
              <h5 className="font-bold mb-2">Web Development</h5>
              <p className="text-center text-gray-700">
                Custom websites and web applications built with modern
                technologies and best practices.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-8 flex flex-col items-center">
              <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-600 text-white text-2xl mb-4">
                <i className="bi bi-phone"></i>
              </span>
              <h5 className="font-bold mb-2">Mobile Development</h5>
              <p className="text-center text-gray-700">
                Cross-platform mobile applications for iOS and Android
                platforms.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-8 flex flex-col items-center">
              <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-400 text-white text-2xl mb-4">
                <i className="bi bi-palette"></i>
              </span>
              <h5 className="font-bold mb-2">UI/UX Design</h5>
              <p className="text-center text-gray-700">
                User-centered design solutions that enhance user experience and
                drive engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Availability Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-center">
              Current Availability
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-5 rounded-lg shadow p-8 flex flex-col items-center">
              <h5 className="text-green-600 font-bold mb-3 flex items-center">
                <i className="bi bi-check-circle mr-2"></i>Available for New
                Projects
              </h5>
              <p className="text-center text-gray-700">
                I&apos;m currently accepting new client work and excited to
                collaborate on interesting projects.
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg shadow p-8 flex flex-col items-center">
              <h5 className="text-blue-600 font-bold mb-3 flex items-center">
                <i className="bi bi-clock mr-2"></i>Response Time
              </h5>
              <p className="text-center text-gray-700">
                I typically respond to inquiries within 24 hours during business
                days.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

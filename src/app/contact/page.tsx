'use client';

import { useState } from 'react';
import IconEmail from '@public/icons/email.svg';
import IconPhone from '@public/icons/phone.svg';
import IconLocation from '@public/icons/location.svg';
import IconLinkedin from '@public/icons/linkedin.svg';
import IconGithub from '@public/icons/github.svg';
import IconInstagram from '@public/icons/instagram.svg';
import IconFacebook from '@public/icons/facebook.svg';

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/roger-twan',
    icon: <IconLinkedin className="size-5" />,
    backgroundColor: 'bg-blue-600',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/roger-twan',
    icon: <IconGithub className="size-5" />,
    backgroundColor: 'bg-neutral-800',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/roger.twan',
    icon: <IconInstagram className="size-5" />,
    backgroundColor: 'bg-red-500',
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/roger.twan',
    icon: <IconFacebook className="size-5" />,
    backgroundColor: 'bg-blue-500',
  },
];

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
    <div className="w-full p-0">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center animate__animated animate__fadeInDown">
              Get In Touch
            </h1>
            <p className="text-lg mb-8 text-center max-w-2xl animate__animated animate__flipInX">
              I&apos;m always happy to connect, learn from others, and explore
              new perspectives. Don&apos;t hesitate to reach out.
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
                    <IconEmail className="size-5" />
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
                    <IconPhone className="size-5" />
                  </span>
                  <div>
                    <h6 className="font-bold mb-1">Phone</h6>
                    <a
                      href="tel:+16138621168"
                      className="text-blue-700 hover:underline"
                    >
                      +1 (613) 862-1168
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white mr-4">
                    <IconLocation className="size-5" />
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
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-80 transition"
                    >
                      <span
                        className={`inline-flex items-center justify-center w-10 h-10 rounded-full text-white ${link.backgroundColor}`}
                      >
                        {link.icon}
                      </span>
                    </a>
                  ))}
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
                    className="bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg shadow hover:bg-gradient-to-br hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center cursor-pointer"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

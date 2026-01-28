import { Metadata } from 'next';
import SocialMedia from '@/components/SocialMedia';
import IconEmail from '@public/icons/email.svg';
import IconPhone from '@public/icons/phone.svg';
import Form from './form';

export const metadata: Metadata = {
  title: 'Contact | Roger Twan',
  description: 'Get in touch with Roger Twan.',
};

export default function Contact() {
  return (
    <div className="w-full p-0">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white pt-16 pb-8 sm:pt-24 sm:pb-16">
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
                    <br />
                    <a
                      href="tel:+8618788528878"
                      className="text-blue-700 hover:underline"
                    >
                      +86 187-8852-8878
                    </a>
                  </div>
                </div>
              </div>
              {/* Social Media Links */}
              <div className="mt-8">
                <h5 className="font-bold mb-3">Follow Me</h5>
                <SocialMedia />
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:w-2/3 w-full">
              <Form />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

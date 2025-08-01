import Link from 'next/link';
import Avatar from './avatar';

export default function Home() {
  return (
    <div className="w-full p-0">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-purple-700 text-white py-16 pt-24 lg:pt-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center min-h-[75vh] text-center lg:text-left">
            <div className="lg:w-1/2 w-full mb-10 lg:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Creative Digital Designer &amp; Developer
              </h1>
              <p className="text-lg md:text-xl mb-6">
                Transforming ideas into stunning digital experiences through
                innovative design and cutting-edge development.
              </p>
              <div className="flex gap-4 justify-center lg:justify-start">
                <Link
                  href="/portfolio"
                  className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-100 transition z-10"
                >
                  View My Work
                </Link>
                <Link
                  href="/contact"
                  className="border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-blue-700 transition z-10"
                >
                  Get In Touch
                </Link>
              </div>
            </div>
            <Avatar />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-100 dark:bg-neutral-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
            <p className="text-lg mb-8 text-center max-w-2xl">
              I&apos;m a passionate digital designer and developer with years of
              experience creating compelling web experiences, mobile
              applications, and interactive digital solutions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
              <div className="bg-white dark:bg-neutral-900 rounded-lg shadow p-6 flex flex-col items-center">
                <i className="bi bi-palette text-4xl text-blue-600 mb-3"></i>
                <h5 className="font-bold mb-2">UI/UX Design</h5>
                <p className="text-center text-gray-600 dark:text-gray-300">
                  Creating intuitive and beautiful user interfaces that enhance
                  user experience.
                </p>
              </div>
              <div className="bg-white dark:bg-neutral-900 rounded-lg shadow p-6 flex flex-col items-center">
                <i className="bi bi-code-slash text-4xl text-blue-600 mb-3"></i>
                <h5 className="font-bold mb-2">Web Development</h5>
                <p className="text-center text-gray-600 dark:text-gray-300">
                  Building responsive, modern websites using the latest
                  technologies and frameworks.
                </p>
              </div>
              <div className="bg-white dark:bg-neutral-900 rounded-lg shadow p-6 flex flex-col items-center">
                <i className="bi bi-phone text-4xl text-blue-600 mb-3"></i>
                <h5 className="font-bold mb-2">Mobile Apps</h5>
                <p className="text-center text-gray-600 dark:text-gray-300">
                  Developing cross-platform mobile applications for iOS and
                  Android.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-white dark:bg-neutral-900 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
              <div>
                <h5 className="font-bold mb-4">Design Tools</h5>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Figma
                  </span>
                  <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Adobe Creative Suite
                  </span>
                  <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Sketch
                  </span>
                  <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    InVision
                  </span>
                </div>
              </div>
              <div>
                <h5 className="font-bold mb-4">Development</h5>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    React
                  </span>
                  <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Next.js
                  </span>
                  <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    TypeScript
                  </span>
                  <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Node.js
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-100 dark:bg-neutral-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg mb-8 text-center max-w-2xl">
              Let&apos;s collaborate to bring your vision to life with
              innovative design and development solutions.
            </p>
            <Link
              href="/contact"
              className="bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg shadow hover:bg-blue-700 transition"
            >
              Let&apos;s Talk
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

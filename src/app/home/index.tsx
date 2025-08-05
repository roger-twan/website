import Link from 'next/link';
import Avatar from './avatar';
import AboutModule from './about';
import SkillsModule from './skills';
import CharacterModule from './character';
import IconArrowRight from '@public/icons/arrow-right.svg';

export default function Home() {
  return (
    <div className="w-full p-0">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-purple-700 text-white py-16 pt-24 lg:pt-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center min-h-[75vh] text-center lg:text-left">
            <div className="lg:w-1/2 w-full mb-10 lg:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate__animated animate__fadeInDown">
                I Build Complete Digital Products
              </h1>
              <p className="text-lg md:text-xl mb-6 animate__animated animate__flipInX">
                From UX design to system architecture, full-stack development,
                mobile app creation, and deployment — I deliver end-to-end
                solutions.
              </p>
              <div className="flex gap-4 justify-center lg:justify-start">
                <Link
                  href="/portfolio"
                  className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-white bg-gradient-to-br from-blue-600 to-purple-700 transition duration-300 ease-out border-1 border-white rounded-lg group z-10"
                >
                  <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full group-hover:translate-x-0 ease">
                    <IconArrowRight className="size-6" />
                  </span>
                  <span className="absolute flex items-center justify-center w-full h-full text-blue-700 bg-white transition-all duration-300 transform group-hover:translate-x-full ease">
                    View Portfolio
                  </span>
                  <span className="relative invisible">View Portfolio</span>
                </Link>
                <Link
                  href="/contact"
                  className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out border-1 border-white rounded-lg group z-10"
                >
                  <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-white group-hover:translate-x-0 ease">
                    <IconArrowRight className="size-6 text-blue-700" />
                  </span>
                  <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
                    Contact Me
                  </span>
                  <span className="relative invisible">Contact Me</span>
                </Link>
              </div>
            </div>
            <Avatar />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <AboutModule />
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SkillsModule />
        </div>
      </section>

      {/* Characters Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <CharacterModule />
        </div>
      </section>
    </div>
  );
}

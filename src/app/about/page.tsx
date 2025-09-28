import { Metadata } from 'next';
import SkillsModule from './skills';
import StoryModule from './story';
import WorkModule from './work';
import EducationModule from './education';
import InterestModule from './interest';

export const metadata: Metadata = {
  title: 'About | Roger Twan',
  description:
    'A passionate digital creator with a love for innovative technology and beautiful design. ',
};

export default function About() {
  const education = [
    {
      year: '2018',
      degree: 'Bachelor of Computer Science',
      school: 'University of Technology',
      description:
        'Specialized in Software Engineering and Human-Computer Interaction',
    },
    {
      year: '2016',
      degree: 'Associate Degree in Web Design',
      school: 'Community College',
      description: 'Focused on modern web technologies and design principles',
    },
  ];

  return (
    <div className="w-full p-0">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white pt-16 pb-8 sm:pt-24 sm:pb-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 w-full mb-10 lg:mb-0 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate__animated animate__fadeInDown">
                About Me
              </h1>
              <p className="text-lg md:text-xl mb-6 animate__animated animate__flipInX">
                I&apos;m a passionate digital creator with a love for innovative
                technology and beautiful design. My journey in the digital world
                has been driven by curiosity and a desire to solve real-world
                problems.
              </p>
            </div>
            <div className="lg:w-1/2 w-full flex justify-center">
              <div className="bg-white/20 rounded-full flex items-center justify-center w-72 h-72 shadow-lg animate__animated animate__fadeIn">
                <img
                  className="rounded-full w-full h-full object-cover"
                  src="/avatar.jpg"
                  alt="Avatar"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Story */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <StoryModule />
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SkillsModule />
        </div>
      </section>

      {/* Experience */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <WorkModule />
        </div>
      </section>

      {/* Education */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <EducationModule />
        </div>
      </section>

      {/* Personal Interests */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <InterestModule />
        </div>
      </section>
    </div>
  );
}

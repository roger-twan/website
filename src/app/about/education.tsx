interface Education {
  period: string;
  degree: string;
  major: string;
  school: string;
  location: string;
  description: string;
}

const educations: Education[] = [
  {
    period: '2024 - 2025',
    major: 'Interactive Media Design',
    degree: 'Diploma',
    school: 'Algonquin College',
    location: 'Ottawa, ON, Canada',
    description:
      'Focus on UX/UI design, visual design, CMS, and web development.',
  },
  {
    period: '2010 - 2014',
    major: 'Computer Science',
    degree: 'Bachelor',
    school: 'Yunnan Minzu University',
    location: 'Kunming, Yunnan, China',
    description: 'Specialized in Computer Science and Information Technology.',
  },
];

export default function educationModule() {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {educations.map((edu, index) => (
          <div
            key={index}
            className="group relative bg-gray-100 rounded-lg shadow p-6 flex flex-col items-center transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 -translate-y-full bg-gradient-to-br from-blue-600 to-purple-700  group-hover:translate-y-0 transition-all duration-300 z-0"></div>
            <div className="relative w-full z-10">
              <div className="flex justify-between text-gray-500 group-hover:text-gray-300 transition duration-300 text-sm mb-2">
                <span>{edu.period}</span>
                <span>{edu.degree}</span>
              </div>
              <h5 className="font-bold mb-1 group-hover:text-white transition duration-300">
                {edu.major}
              </h5>
              <p className="text-gray-500 mb-2 group-hover:text-gray-300 transition duration-300">
                {edu.school} | {edu.location}
              </p>
              <p className="group-hover:text-white transition duration-300">
                {edu.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

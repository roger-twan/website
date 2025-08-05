import IconCamera from '@public/icons/camera.svg';
import IconMusic from '@public/icons/music.svg';
import IconBook from '@public/icons/book.svg';
import IconBike from '@public/icons/bike.svg';

const skills = [
  {
    title: 'Photography',
    description: 'Capturing moments and finding beauty in everyday scenes.',
    icon: <IconCamera />,
  },
  {
    title: 'Instrumental',
    description: 'Expressing myself through the guitar, one note at a time.',
    icon: <IconMusic />,
  },
  {
    title: 'Reading',
    description:
      'Turning pages to discover new worlds, ideas, and perspectives.',
    icon: <IconBook />,
  },
  {
    title: 'Cycling',
    description: 'Staying active and exploring the city on two wheels',
    icon: <IconBike />,
  },
];

export default function InterestModule() {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-6 text-center">Beyond the Work</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-lg shadow p-6 flex flex-col items-center hover:text-white transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700 -translate-y-full group-hover:translate-y-0 transition-all duration-300 z-0"></div>
            <div className="relative text-center z-10">
              <div className="mx-auto mb-3 text-blue-600 size-10 group-hover:text-white transition duration-300">
                {skill.icon}
              </div>
              <h5 className="font-bold mb-2">{skill.title}</h5>
              <p className="text-center text-gray-600 group-hover:text-gray-200 transition duration-300">
                {skill.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import IconCode from '@public/icons/code.svg';
import IconLaunch from '@public/icons/launch.svg';
import IconBrush from '@public/icons/brush.svg';
import IconStack from '@public/icons/stack.svg';

const skills = [
  {
    title: 'UI/UX Design',
    description:
      'Creating intuitive and beautiful user interfaces that enhance user experience.',
    icon: <IconBrush />,
  },
  {
    title: 'System Design',
    description:
      'Designing and implementing scalable and maintainable system architectures.',
    icon: <IconStack />,
  },
  {
    title: 'Development',
    description:
      'Building websites and mobile applications using the latest technologies and frameworks.',
    icon: <IconCode />,
  },
  {
    title: 'Deployment',
    description:
      'Deploying scalable apps with CI/CD pipelines and cloud infrastructure.',
    icon: <IconLaunch />,
  },
];

export default function AboutModule() {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
      <p className="text-lg mb-8 text-center max-w-2xl">
        I&apos;m a passionate full stack developer with extensive experience
        building compelling web platforms, mobile applications, and interactive
        digital solutions.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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

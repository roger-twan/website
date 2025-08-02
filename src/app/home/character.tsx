import IconGroup from '@public/icons/group.svg';
import IconSecurity from '@public/icons/security.svg';
import IconOwnership from '@public/icons/ownership.svg';
import IconSparkle from '@public/icons/sparkle.svg';

export default function CharacterModule() {
  const principles = [
    {
      title: 'Innovation',
      icon: <IconSparkle />,
    },
    {
      title: 'Ownership',
      icon: <IconOwnership />,
    },
    {
      title: 'Collaboration',
      icon: <IconGroup />,
    },
    {
      title: 'Quality',
      icon: <IconSecurity />,
    },
  ];

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-6 text-center">My Principles</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {principles.map((principle, index) => (
          <div
            key={index}
            className="group relative bg-white dark:bg-neutral-900 rounded-lg shadow px-20 py-10 flex flex-col items-center hover:text-white transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700 -translate-y-full group-hover:translate-y-0 transition-all duration-300 z-0"></div>
            <div className="relative text-center z-10">
              <div className="mx-auto mb-3 text-blue-600 size-10 group-hover:text-white transition duration-300">
                {principle.icon}
              </div>
              <h5 className="font-bold mb-2">{principle.title}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

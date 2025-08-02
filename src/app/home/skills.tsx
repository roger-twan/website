const process = [
  {
    step: '01',
    title: 'Discovery',
    description:
      'Understanding requirements and goals through detailed conversations and documentation.',
    skills: ['Google productivity suite', 'FigJam', 'ChatGPT'],
  },
  {
    step: '02',
    title: 'Planning',
    description:
      'Creating comprehensive project plans, timelines, and task management.',
    skills: ['Jira', 'Trello', 'ClickUp'],
  },
  {
    step: '03',
    title: 'Design',
    description:
      'Crafting system architecture, wireframes, and prototypes that align with product goals',
    skills: ['PlantUML', 'Figma', 'Photoshop', 'Maze'],
  },
  {
    step: '04',
    title: 'Development',
    description:
      'Building your solution using modern technologies and best practices.',
    skills: ['Node.js', 'Next.js', 'Flutter', 'PostgreSQL', 'Git'],
  },
  {
    step: '05',
    title: 'Testing',
    description:
      'Rigorous testing across devices and browsers to ensure quality and performance.',
    skills: ['Jest', 'Playwright', 'Postman'],
  },
  {
    step: '06',
    title: 'Launch',
    description:
      'Deploying project and ensuring stable service with monitoring and analytics.',
    skills: ['AWS', 'Firebase', 'Grafana', 'Google Analytics'],
  },
];

export default function SkillsModule() {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-4 text-center">My Skills</h2>
      <p className="mb-8 text-lg text-center max-w-2xl">
        I bring expertise across the full end-to-end product development
        lifecycle, combining technical execution with strong team communication
        and cross-functional collaboration to drive products from concept to
        launch.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {process.map((step, index) => (
          <div
            key={index}
            className="group relative bg-gray-100 dark:bg-neutral-800 rounded-lg shadow p-6 flex flex-col items-center hover:text-white transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 -translate-y-full bg-gradient-to-br from-blue-600 to-purple-700  group-hover:translate-y-0 transition-all duration-300 z-0"></div>
            <div className="relative text-center z-10">
              <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white text-2xl font-bold mb-4 group-hover:bg-white group-hover:text-blue-600 transition duration-300">
                {step.step}
              </span>
              <h5 className="font-bold mb-2">{step.title}</h5>
              <p className="text-center text-gray-700 dark:text-gray-300 group-hover:text-gray-200 transition duration-300">
                {step.description}
              </p>
              <div className="flex flex-wrap justify-center gap-3 mt-4">
                {step.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="border border-blue-600 text-blue-600 px-2 py-1 rounded-full text-sm group-hover:text-gray-300 group-hover:border-gray-300 transition duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

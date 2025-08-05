import IconQuestion from '@public/icons/question.svg';
import getSkills, { Skill } from './skills.data';
import SkillItem from './skill-item';

export enum SkillLevel {
  BEGINNER = 'Beginner',
  INTERMEDIATE = 'Intermediate',
  PROFICIENT = 'Proficient',
  ADVANCED = 'Advanced',
  EXPERT = 'Expert',
}

export const skillLevelStyles = [
  {
    level: SkillLevel.BEGINNER,
    color: 'bg-blue-300',
    description:
      'Familiar with the basics or foundational concepts but lacks practical application.',
  },
  {
    level: SkillLevel.INTERMEDIATE,
    color: 'bg-blue-400',
    description:
      'Applied in personal projects or demos; demonstrates working knowledge.',
  },
  {
    level: SkillLevel.PROFICIENT,
    color: 'bg-blue-500',
    description:
      'Successfully utilized in real-world business scenarios with measurable results.',
  },
  {
    level: SkillLevel.ADVANCED,
    color: 'bg-blue-600',
    description:
      'Demonstrates professional-level expertise and capability in complex environments.',
  },
  {
    level: SkillLevel.EXPERT,
    color: 'bg-blue-700',
    description:
      'Recognized for deep specialization and mastery; often serves as a mentor or authority in the field.',
  },
];

export default async function skillsModule() {
  const skills = await getSkills();

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-4 text-center">Skills</h2>
      <ul className="flex mb-4 gap-x-4 gap-y-1 justify-center flex-wrap">
        {skillLevelStyles.map((level, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <span
              className={`inline-block w-4 h-4 mr-1 border border-gray-400 rounded-full ${level.color}`}
            />
            {level.level}
          </li>
        ))}
        <li className="relative group flex items-center">
          <span className="cursor-pointer text-gray-600">
            <IconQuestion className="size-5" />
          </span>
          <div className="absolute top-full left-0 -translate-x-1/2 hidden bg-gray-800 text-white text-sm p-3 rounded-lg shadow group-hover:block">
            <ul>
              {skillLevelStyles.map((level, index) => (
                <li key={index} className="text-white mb-3">
                  <div className="flex items-center font-bold">
                    <span
                      className={`inline-block w-4 h-4 mr-1 rounded-full ${level.color}`}
                    />
                    {level.level}
                  </div>
                  <p className="ml-5 w-72">{level.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </li>
      </ul>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {skills.map((skill: Skill, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg shadow p-4 flex flex-col h-full hover:bg-gradient-to-br hover:from-blue-600 hover:to-purple-700 transition-colors duration-300"
          >
            <SkillItem skill={skill} />
          </div>
        ))}
      </div>
    </div>
  );
}

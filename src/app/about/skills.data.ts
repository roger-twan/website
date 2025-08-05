import { fetchNotesRepo } from '@/utils/octokit';

export interface Skill {
  category: string;
  skills: {
    name: string;
    level: string;
  }[];
}

let _data: Skill[] = [];

const _fetchSkills = async () => {
  const skillsData = await fetchNotesRepo(
    '/contents/{path}',
    {
      path: 'Skills.md',
    },
    {
      Accept: 'application/vnd.github.v3.raw',
    },
  );

  _data = _parseMarkdownSkill(skillsData.data);
};

const _parseMarkdownSkill = (md: string) => {
  const levelOrder = {
    Expert: 5,
    Advanced: 4,
    Proficient: 3,
    Intermediate: 2,
    Beginner: 1,
  };

  const sections = md.split(/###\s+/).filter(Boolean);
  const result = [];

  for (const section of sections) {
    const [titleLine, ...lines] = section.trim().split('\n');
    const category = titleLine.trim();
    const skillLines = lines.filter((line) => /^\|/.test(line));

    const skills = skillLines
      .slice(2)
      .map((line) => {
        const [_, skill, level] = line.split('|').map((s) => s.trim());
        return { name: skill, level };
      })
      .sort(
        (a, b) =>
          levelOrder[b.level as keyof typeof levelOrder] -
          levelOrder[a.level as keyof typeof levelOrder],
      );

    result.push({ category, skills });
  }

  return result;
};

const getSkills = async () => {
  !_data.length && (await _fetchSkills());

  return _data;
};

export default getSkills;

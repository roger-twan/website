import WordCloud from '@/components/word-cloud'
import skillsData from './skills.data'

interface SkillsProps {
  className?: string
}

const Skills = (props: SkillsProps) => {
  const words = []

  for (const CategoryValue of Object.values(skillsData)) {
    for (const [key, value] of Object.entries(CategoryValue)) {
      words.push({ text: key, size: value / 3 })
    }
  }

  return (
    <div className={props.className}>
      <WordCloud words={words} />
    </div>
  )
}

export default Skills

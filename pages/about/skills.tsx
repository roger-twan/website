import React, { useEffect, useState } from 'react'
import skillsData, { Level, Skill, Category } from './skills.data'
import QuestionIcon from '@/public/icons/question.svg'

const COLORS = ['#E5E7EB', '#FFEDD5', '#47A4E3', '#54B685', '#616AE9']

type SkillsProp = {
  className?: string
  showYear?: boolean
}

const Skills = (props: SkillsProp) => {
  const [showYear, setShowYear] = useState(true)
  const levelSortedList: Skill[] = skillsData.sort(
    (a: Skill, b: Skill) => b.level - a.level
  )
  let groupedByYear: Record<number, Skill[]> = []

  if (showYear) {
    const yearSortedList: Skill[] = levelSortedList.sort(
      (a: Skill, b: Skill) => a.year - b.year
    )
    groupedByYear = yearSortedList.reduce((acc, skill) => {
      if (!acc[skill.year]) {
        acc[skill.year] = []
      }
      acc[skill.year].push(skill)
      return acc
    }, {} as Record<number, Skill[]>)
  }

  const getSkillImg = (skill: Skill) => {
    let color = ''

    switch (skill.level) {
      case Level.Beginner:
        color = COLORS[0]
        break
      case Level.Intermediate:
        color = COLORS[1]
        break
      case Level.Proficient:
        color = COLORS[2]
        break
      case Level.Advanced:
        color = COLORS[3]
        break
      case Level.Expert:
        color = COLORS[4]
        break
      default:
        break
    }

    return `https://img.shields.io/badge/_-${skill.name}-${color.slice(
      1
    )}?logo=${skill.icon || skill.name}${
      skill.iconColor ? `&logoColor=${skill.iconColor.slice(1)}` : ''
    }`
  }

  useEffect(() => {
    if (props.showYear !== undefined) {
      setShowYear(props.showYear)
    }
  }, [props.showYear])

  return (
    <div className={`${props.className}`}>
      <ul className="flex gap-x-4 gap-y-1 mb-2 justify-center flex-wrap text-sm">
        <li className="flex items-center text-gray-600">
          <span
            className="inline-block w-4 h-4 mr-1 border border-gray-400 rounded-full"
            style={{ backgroundColor: COLORS[0] }}
          />
          Beginner
        </li>
        <li className="flex items-center text-gray-600">
          <span
            className="inline-block w-4 h-4 mr-1 border border-gray-400 rounded-full"
            style={{ backgroundColor: COLORS[1] }}
          />
          Intermediate
        </li>
        <li className="flex items-center text-gray-600">
          <span
            className="inline-block w-4 h-4 mr-1 border border-gray-400 rounded-full"
            style={{ backgroundColor: COLORS[2] }}
          />
          Proficient
        </li>
        <li className="flex items-center text-gray-600">
          <span
            className="inline-block w-4 h-4 mr-1 border border-gray-400 rounded-full"
            style={{ backgroundColor: COLORS[3] }}
          />
          Advanced
        </li>
        <li className="flex items-center text-gray-600">
          <span
            className="inline-block w-4 h-4 mr-1 border border-gray-400 rounded-full"
            style={{ backgroundColor: COLORS[4] }}
          />
          Expert
        </li>
        <li className="relative group flex items-center">
          <span className="cursor-pointer text-gray-600">
            <QuestionIcon className="size-4 fill-gray-500" />
          </span>
          <div className="absolute top-full left-0 -translate-x-1/2 hidden bg-gray-800 text-white text-sm p-3 rounded shadow group-hover:block">
            <ul>
              <li className="text-white mb-2">
                <div className="flex items-center">
                  <span
                    className="inline-block w-4 h-4 mr-1 rounded-full"
                    style={{ backgroundColor: COLORS[0] }}
                  />
                  Beginner
                </div>
                <p className="text-xs ml-5 text-gray-400 w-72">
                  Familiar with the basics or foundational concepts but lacks
                  practical application.
                </p>
              </li>
              <li className="text-white mb-2">
                <div className="flex items-center">
                  <span
                    className="inline-block w-4 h-4 mr-1 rounded-full"
                    style={{ backgroundColor: COLORS[1] }}
                  />
                  Intermediate
                </div>
                <p className="text-xs ml-5 text-gray-400 w-72">
                  Applied in personal projects or demos; demonstrates working
                  knowledge.
                </p>
              </li>
              <li className="text-white mb-2">
                <div className="flex items-center">
                  <span
                    className="inline-block w-4 h-4 mr-1 rounded-full"
                    style={{ backgroundColor: COLORS[2] }}
                  />
                  Proficient
                </div>
                <p className="text-xs ml-5 text-gray-400 w-72">
                  Successfully utilized in real-world business scenarios with
                  measurable results.
                </p>
              </li>
              <li className="text-white mb-2">
                <div className="flex items-center">
                  <span
                    className="inline-block w-4 h-4 mr-1 rounded-full"
                    style={{ backgroundColor: COLORS[3] }}
                  />
                  Advanced
                </div>
                <p className="text-xs ml-5 text-gray-400 w-72">
                  Demonstrates professional-level expertise and capability in
                  complex environments.
                </p>
              </li>
              <li className="text-white mb-2">
                <div className="flex items-center">
                  <span
                    className="inline-block w-4 h-4 mr-1 rounded-full"
                    style={{ backgroundColor: COLORS[4] }}
                  />
                  Expert
                </div>
                <p className="text-xs ml-5 text-gray-400 w-72">
                  Recognized for deep specialization and mastery; often serves
                  as a mentor or authority in the field.
                </p>
              </li>
            </ul>
          </div>
        </li>
        <li className="flex items-center text-gray-600">
          <input
            type="checkbox"
            id="year"
            checked={showYear}
            onChange={(e) => setShowYear(e.target.checked)}
            className="mr-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
          />
          <label htmlFor="year" className="cursor-pointer">
            Show Year
          </label>
        </li>
      </ul>
      <div className="w-full overflow-x-auto">
        <table className="text-sm overflow-hidden">
          <thead>
            <tr>
              {showYear && (
                <th className="border p-2 text-center font-normal">Year</th>
              )}
              {Object.values(Category).map((category) => (
                <th
                  className="border p-2 text-center font-normal"
                  key={category}
                >
                  {category}
                </th>
              ))}
            </tr>
          </thead>

          {showYear && (
            <tbody>
              {Object.entries(groupedByYear).map(([year, skills]) => (
                <tr key={year}>
                  <td className="border px-2 text-center font-normal">
                    {year}
                  </td>
                  {Object.values(Category).map((category) => (
                    <td key={category} className="border text-center">
                      <React.Fragment key={category}>
                        {skills.map(
                          (skill, idx) =>
                            skill.category === category && (
                              <img
                                className="m-1 inline-block"
                                src={getSkillImg(skill)}
                                alt={skill.name}
                                key={idx}
                              />
                            )
                        )}
                      </React.Fragment>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          )}

          {!showYear && (
            <tbody>
              <tr>
                {Object.values(Category).map((category) => (
                  <td key={category} className="border text-center align-top">
                    <React.Fragment key={category}>
                      {levelSortedList.map(
                        (skill, idx) =>
                          skill.category === category && (
                            <img
                              className="m-1 inline-block"
                              src={getSkillImg(skill)}
                              alt={skill.name}
                              key={idx}
                            />
                          )
                      )}
                    </React.Fragment>
                  </td>
                ))}
              </tr>
            </tbody>
          )}
        </table>
      </div>
    </div>
  )
}

export default Skills

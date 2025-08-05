'use client';

import { useState } from 'react';
import { skillLevelStyles } from './skills';
import { Skill } from './skills.data';

interface SkillItemProps {
  skill: Skill;
}

const collapseCount = 6;

export default function SkillItem({ skill }: SkillItemProps) {
  const [collapse, setCollapse] = useState(true);
  const [skillList, setSkillList] = useState(
    skill.skills.slice(0, collapseCount),
  );

  const toggleCollapse = () => {
    setCollapse(!collapse);
    setSkillList(
      collapse ? skill.skills : skill.skills.slice(0, collapseCount),
    );
  };

  return (
    <div className="p-4 bg-gray-100 rounded h-full">
      <h4 className="font-bold text-xl mb-0 text-center">{skill.category}</h4>
      <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
        {skillList.map((skill, index) => (
          <div key={index} className="mb-4">
            <div className="mb-2 font-bold">{skill.name}</div>
            <div className={`grid grid-cols-5 gap-[1px]`}>
              {Array.from({ length: skillLevelStyles.length }).map((_, i) => (
                <div
                  key={i}
                  className="w-full bg-gray-200 rounded-full h-2 overflow-hidden"
                >
                  <div
                    className={`w-full h-full ${skillLevelStyles.findIndex((level) => level.level === skill.level) >= i ? skillLevelStyles[i].color : ''}`}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {skill.skills.length > collapseCount && (
        <button
          onClick={toggleCollapse}
          className="block mt-4 mx-auto px-2 py-1 rounded-lg text-sm bg-gray-200 text-gray-700 hover:bg-gray-300 transition duration-300 cursor-pointer"
        >
          {collapse ? 'Show All' : 'Show Less'}
        </button>
      )}
    </div>
  );
}

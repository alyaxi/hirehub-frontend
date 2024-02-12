import React, { useState } from 'react';
import { Core } from '..';
import Icon from '../icon';

const _skill = [
  {
    id: 1,
    text: "Express.js",
    proficiency: '6 years',
  },
  {
    id: 2,
    text: "Next.js",
    proficiency: '4 years',
  },
  {
    id: 3,
    text: "Node.js",
    proficiency: '2 years',
  }
]

function SkillsEdit({ action, handleCancel }) {

  const skillExperienceOptions = [
    { name: "Fresh", value: "0" },
    { name: "6 months", value: "6 months" },
    { name: "1 year", value: "1 year" },
    { name: "2 years", value: "2 years" },
    { name: "3 years", value: "3 years" },
    { name: "4 years", value: "4 years" },
    { name: "5 years", value: "5 years" },
    { name: "6 years", value: "6 years" },
    { name: "7 years", value: "7 years" },
    { name: "8 years", value: "8 years" },
    { name: "9 years", value: "9 years" },
    { name: "10 years", value: "10 years" },
    { name: "Over 10 years", value: "Over 10 years" },
  ];




  const [skills, setSkills] = useState(_skill);
  const [data, setData] = useState({
    skills: skills.reduce((acc, skill) => {
      acc[skill.id] = skill.text;
      return acc;
    }, {}),
    skillExperience: {}, // Added a state to track experience for each skill
  });

  const handleChange = (id, value) => {
    setData((prevData) => {
      const updatedSkills = {
        ...prevData.skills,
        [id]: value,
      };
      if (value.trim() === '') {
        delete updatedSkills[id];
      }
      return {
        ...prevData,
        skills: updatedSkills,
      };
    });
  };



  const handleExperienceChange = (id, value) => {
    setData((prevData) => ({
      ...prevData,
      skillExperience: {
        ...prevData.skillExperience,
        [id]: value,
      },
    }));
  };

  const deleteItem = (id) => {
    const updatedSkills = skills.filter((skill) => skill.id !== id);
    setSkills(updatedSkills);
    setData((prevData) => {
      const { [id]: removedSkill, ...newSkills } = prevData.skills;
      const { [id]: removedExperience, ...newExperience } = prevData.skillExperience; // Remove experience for the deleted skill
      return {
        ...prevData,
        skills: newSkills,
        skillExperience: newExperience,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nonEmptySkills = Object.entries(data.skills)
      .filter(([id, value]) => value.trim() !== '')
      .map(([id, value]) => ({
        id: parseInt(id),
        text: value,
        proficiency: data.skillExperience[id] || '', // Include proficiency in the result
      }));
    console.log({ skills: nonEmptySkills });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div className='flex flex-col justify-start gap-y-3'>
          {skills.map((skill) => (
            <div className='flex items-center gap-x-2' key={skill.id}>
              <input
                type={'text'}
                className={`flex-2 w-full text-[14px] font-regular leading-[20px] text-gray-6 bg-gray-3 border border-gray-11 rounded-lg focus:outline-none focus:border-blue-500 px-3 py-[9px] `}
                name={`skills.${skill.id}`}
                value={data.skills[skill.id] || ''}
                onChange={(e) => handleChange(skill.id, e.target.value)}
                sm
                label
                placeholder={`Enter ${skill.text}`}
                autoFocus
              />
              <div className='min-w-[135px]'>
                <Core.SelectWithLabel
                  name={`experience.${skill.id}`} // Use the skill ID as the name for the select box
                  sm
                  options={skillExperienceOptions}
                  defaultOption="Experience"
                  onChange={(value) => handleExperienceChange(skill.id, value)}
                />
              </div>
              <span onClick={() => deleteItem(skill.id)}>
                <Icon name="Cross" size={12} className="text-black-3 cursor-pointer hover:text-red-500" />
              </span>
            </div>
          ))}
        </div>
        <div className='flex justify-between  pt-6 mt-8 border-t-[1px]'>
          <div className='flex justify-start gap-x-3 '>
            <Core.Button type="narrow" submit>
              Save
            </Core.Button>
            <Core.Button type="narrow" color="white" onClick={handleCancel}>
              Cancel
            </Core.Button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default SkillsEdit;

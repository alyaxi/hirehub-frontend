import React, { useState } from 'react';
import { Core } from '..';
import Icon from '../icon';

function SkillsEdit({ action, handleCancel }) {

    const skillExperienceOptions = [
        { name: "6 months", value: "6months" },
        { name: "1 year", value: "1year" },
        { name: "2 years", value: "2years" },
        { name: "3 years", value: "3years" },
        { name: "4 years", value: "4years" },
        { name: "5 years", value: "5years" },
        { name: "6 years", value: "6years" },
        { name: "7 years", value: "7years" },
        { name: "8 years", value: "8years" },
        { name: "9 years", value: "9years" },
        { name: "10 years", value: "10years" },
        { name: "Over 10 years", value: "Over10" },
    ];
    const [skills, setSkills] = useState([
        {
            id: 1,
            text: 'React.js',
        },
        {
            id: 2,
            text: 'Next.js',
        },
        {
            id: 3,
            text: 'Node.js',
        },
    ]);

    const [data, setData] = useState({
        skills: skills.reduce((acc, skill) => {
            acc[skill.id] = skill.text;
            return acc;
        }, {}),
        skillExperience: '',
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

    const deleteItem = (id) => {
        const updatedSkills = skills.filter(skill => skill.id !== id);
        setSkills(updatedSkills);
        setData(prevData => {
            const { [id]: removedSkill, ...newSkills } = prevData.skills;
            return {
                ...prevData,
                skills: newSkills,
            };
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        const nonEmptySkills = Object.entries(data.skills)
            .filter(([id, value]) => value.trim() !== '')
            .map(([id, value]) => ({ id: parseInt(id), text: value }));
        console.log({ skills: nonEmptySkills, skillExperience: data.skillExperience });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <div className='flex flex-col justify-start gap-y-3'>
                    {skills.map(skill => (
                        <div className='flex items-center gap-x-2'>
                            <input
                                type={'text'}
                                className={`flex-2 w-full text-[14px] font-regular leading-[20px] text-gray-6 bg-gray-3 border border-gray-11 rounded-lg focus:outline-none focus:border-blue-500 px-3 py-[9px] `}
                                key={skill.id}
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
                                    name={"experience"}
                                    sm
                                    options={skillExperienceOptions}
                                    defaultOption="Experience"
                                // onChange={(value) => handleDateChange("startDate", "month", value)}
                                />
                            </div>
                            <span onClick={() => deleteItem(skill.id)}><Icon name="Cross" size={12} className="text-black-3 cursor-pointer hover:text-red-500" /></span>
                        </div>
                    ))}
                </div>
                <div className='flex justify-between  pt-6 mt-8 border-t-[1px]'>
                    <div className='flex justify-start gap-x-3 '>
                        <Core.Button type="narrow" submit>Save</Core.Button>
                        <Core.Button type="narrow" color="white" onClick={handleCancel}>Cancel</Core.Button>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default SkillsEdit;

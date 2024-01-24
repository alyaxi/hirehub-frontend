import React, { useState } from 'react';
import { Core } from '..';
import Icon from '../icon';

function LanguagesEdit({ action, handleCancel }) {
    const languageProficiencyOptions = [
        { name: 'Basic', value: 'basic' },
        { name: 'Intermediate', value: 'intermediate' },
        { name: 'Advanced', value: 'advanced' },
        { name: 'Fluent', value: 'fluent' },
      ];
    const [languages, setLanguages] = useState([
        {
            id: 1,
            text: 'English',
        },
        {
            id: 2,
            text: 'Spanish',
        },
        {
            id: 3,
            text: 'French',
        },
        {
            id: 4,
            text: 'German',
        },
        {
            id: 5,
            text: 'Chinese',
        }
    ]);

    const [data, setData] = useState({
        languages: languages.reduce((acc, language) => {
            acc[language.id] = language.text;
            return acc;
        }, {}),
        languageExperience: '',
    });

    const handleChange = (id, value) => {
        setData((prevData) => {
            const updatedLanguages = {
                ...prevData.languages,
                [id]: value,
            };
            if (value.trim() === '') {
                delete updatedLanguages[id];
            }
            return {
                ...prevData,
                languages: updatedLanguages,
            };
        });
    };

    const deleteItem = (id) => {
        const updatedLanguages = languages.filter(language => language.id !== id);
        setLanguages(updatedLanguages);
        setData(prevData => {
            const { [id]: removedLanguage, ...newLanguages } = prevData.languages;
            return {
                ...prevData,
                languages: newLanguages,
            };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const nonEmptyLanguages = Object.entries(data.languages)
            .filter(([id, value]) => value.trim() !== '')
            .map(([id, value]) => ({ id: parseInt(id), text: value }));
        console.log({ languages: nonEmptyLanguages, languageExperience: data.languageExperience });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <div className='flex flex-col justify-start gap-y-3'>
                    {languages.map(language => (
                        <div className='flex items-center gap-x-2'>
                            <input
                                type={'text'}
                                className={`w-full text-[14px] font-regular leading-[20px] text-gray-6 bg-gray-3 border border-gray-11 rounded-lg focus:outline-none focus:border-blue-500 px-3 py-[9px] `}
                                key={language.id}
                                name={`languages.${language.id}`}
                                value={data.languages[language.id] || ''}
                                onChange={(e) => handleChange(language.id, e.target.value)}
                                sm
                                label
                                placeholder={`Enter ${language.text}`}
                                autoFocus
                            />
                            <div className='min-w-[135px]'>
                                <Core.SelectWithLabel
                                    name={"experience"}
                                    sm
                                    options={languageProficiencyOptions}
                                    defaultOption="Experience"
                                // onChange={(value) => handleDateChange("startDate", "month", value)}
                                />
                            </div>
                            <span onClick={() => deleteItem(language.id)}><Icon name="Cross" size={12} className="text-black-3 cursor-pointer hover:text-red-500" /></span>
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

export default LanguagesEdit;

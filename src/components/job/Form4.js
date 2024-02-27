// Form4.js
import React, { useEffect, useState } from 'react';
import { Core } from '..';
import MultiSelectInput from '../core/MultiSelectInput';
import dropdownOptions from '../../data/dropdownOptions.json';

const {
    benefitsOptions,
} = dropdownOptions;

function Form4({ multiSelectHandle, handleJobUpdate }) {
    
    const [responsibilities, setResponsibilities] = useState('');
    const [qualification, setQualification] = useState('');
    const [skills, setSkills] = useState('');

    useEffect(() => {
        handleJobUpdate('responsibilities', responsibilities)
    }, [responsibilities,]);

    useEffect(() => {
        handleJobUpdate('qualification', qualification)
    }, [qualification]);

    useEffect(() => {
        handleJobUpdate('skills', skills)
    }, [skills]);

    return (
        <Core.Card className={'p-5'} w840 border>
            <div className="mb-4">
                <label className={`flex justify-start text-[16px] font-semibold text-gray-2 tracking-wide capitalize mb-2`}>
                    Job Description:
                </label>
                <Core.TextAreaWithLabel
                    name="position"
                    label
                    onChange={(e) => handleJobUpdate('aboutPosition', e.target.value)}
                />
            </div>
            <div className="mb-4">
                <Core.TextEditorWithLabel name={'responsibilities'} label style={{ height: "84%" }} value={responsibilities} setValue={setResponsibilities} />
            </div>
            <div className="mb-4">
                <Core.TextEditorWithLabel name={'qualification'} label style={{ height: "84%" }} value={qualification} setValue={setQualification} />
            </div>
            <div className="mb-4">
                <Core.TextEditorWithLabel name={'skills'} label style={{ height: "84%" }} value={skills} setValue={setSkills} />
            </div>
            <div className="mb-4">
                <MultiSelectInput name={'benefits'} label options={benefitsOptions} onChange={multiSelectHandle} />
            </div>
        </Core.Card>
    );
}

export default Form4;

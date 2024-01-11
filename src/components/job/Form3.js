// Form3.js
import React, { useEffect, useState } from 'react';
import { Core } from '..';
import MultiSelectInput from '../core/MultiSelectInput';

const options = [
    { label: 'i14', value: 'i14' },
    { label: 'i15', value: 'i15' },
    { label: 'i16', value: 'i16' },
    { label: 'i18', value: 'i18' },
];

function Form3({
    multiSelectHandle,
    handlePosition,
    handleResponsibilities,
    handleQualification,
    handleSkills,
}) {
    const [responsibilities, setResponsibilities] = useState('');
    const [qualification, setQualification] = useState('');
    const [skills, setSkills] = useState('');

    useEffect(() => {
        handleResponsibilities(responsibilities)
    }, [responsibilities,]);

    useEffect(() => {
        handleQualification(qualification)
    }, [qualification]);

    useEffect(() => {
        handleSkills(skills)
    }, [skills]);

    return (
        <Core.Card className={'p-5'} w840 border>
            <div className="mb-4">
                <MultiSelectInput name={'benefits'} label options={options} onChange={multiSelectHandle} />
            </div>
            <div className="mb-4">
                <label className={`flex justify-start text-[16px] font-semibold text-gray-2 tracking-wide capitalize mb-2`}>
                    Job Description:
                </label>
                <Core.TextAreaWithLabel
                    name="position"
                    label
                    onChange={handlePosition}
                />
            </div>
            <div className="mb-4">
                <Core.TextEditorWithLabel name={'responsibilities'} label value={responsibilities} setValue={setResponsibilities} />
            </div>
            <div className="mb-4">
                <Core.TextEditorWithLabel name={'qualification'} label value={qualification} setValue={setQualification} />
            </div>
            <div className="mb-4">
                <Core.TextEditorWithLabel name={'skills'} label value={skills} setValue={setSkills} />
            </div>
        </Core.Card>
    );
}

export default Form3;

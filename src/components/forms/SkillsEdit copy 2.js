import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Core } from '..';
import dropdownOptions from '../../data/dropdownOptions.json';

const {
    skillExperienceOptions
} = dropdownOptions;

const _skill = [
    {
        id: 1,
        title: "Express.js",
        proficiency: '6 years',
    },
    {
        id: 2,
        title: "Next.js",
        proficiency: '4 years',
    },
    {
        id: 3,
        title: "Node.js",
        proficiency: '2 years',
    }
]

function SkillsEdit({ action, handleCancel }) {

    const [data, setData] = useState({
        skills1proficiency: "5",
        skills2proficiency: "7",
        skills3proficiency: "8",
        skills4proficiency: "0",
        skills3title: "-",
        skills3title: "g",
        skills3title: "df",
        skills3title: "345",

    });

    const deleteItem = (id) => {

    };

    const handleSubmit = (e) => {

    };

    return (
        <Formik
            initialValues={data}
            // validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting }) => (
                <Form>
                    <div>
                        <div className='flex flex-col justify-start'>

                            {_skill.map((value, index) => (
                                <div key={index} className='mb-4 pt-5'>
                                    <Field name={`skills${value.id}title`}>
                                        {({ field }) => (
                                            <Core.InputWithLabel
                                                {...field}
                                                sm
                                                name={`skills${value.id}title`}
                                                label
                                                placeholder={`Enter your ${value.title}`}
                                                required
                                                edit
                                            />
                                        )}
                                    </Field>
                                    <div className='mb-4 border-b-[5px] pb-10'>
                                        <Field name={`skills${value.id}proficiency`}>
                                            {({ field }) => (
                                                <Core.SelectWithLabel
                                                    {...field}
                                                    name={`skills${value.id}proficiency`}
                                                    label
                                                    options={skillExperienceOptions}
                                                    defaultOption="Choose any one"
                                                    value={field.value}
                                                    required
                                                />
                                            )}
                                        </Field>
                                    </div>
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
                </Form>
            )
            }
        </Formik >
    );
}

export default SkillsEdit;

import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Core } from '..';

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

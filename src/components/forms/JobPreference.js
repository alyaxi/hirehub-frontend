import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Core } from '..';
import { Radio } from 'antd/es';
import MultiSelectInput from '../core/MultiSelectInput';

function JobPreference({ action, handleCancel }) {

    const desiredJobTitleOptions = [
        { label: 'UX/UI Designer', value: 'UX/UI Designer' },
        { label: 'UX/UI Head', value: 'UX/UI Head' },
        { label: 'Creative Head', value: 'Creative Head' },
        { label: 'Design Head', value: 'Design Head' },
        { label: 'Software Engineer', value: 'Software Engineer' },
        { label: 'Data Scientist', value: 'Data Scientist' },
        { label: 'Product Manager', value: 'Product Manager' },
        { label: 'Marketing Specialist', value: 'Marketing Specialist' },
        { label: 'Financial Analyst', value: 'Financial Analyst' },
        { label: 'Human Resources Manager', value: 'Human Resources Manager' },
        { label: 'Sales Representative', value: 'Sales Representative' },
        { label: 'Customer Support Specialist', value: 'Customer Support Specialist' },
        { label: 'Graphic Designer', value: 'Graphic Designer' },
        { label: 'Content Writer', value: 'Content Writer' },
    ];

    const desiredSalaryOptions = [
        { name: "$1000 - $1500", value: "1000-1500" },
        { name: "$1500 - $2000", value: "1500-2000" },
        { name: "$2000 - $2500", value: "2000-2500" },
        { name: "$2500 - $3000", value: "2500-3000" },
        { name: "$3000 - $3500", value: "3000-3500" },
        { name: "$3500 - $4000", value: "3500-4000" },
        { name: "$4000 - $4500", value: "4000-4500" },
        { name: "Over $4500", value: "Over4500" },
    ];
    const skillsOptions = [
        { label: 'HTML&CSS', value: 'HTML&CSS' },
        { label: 'Bootstrap', value: 'Bootstrap' },
        { label: 'Illustrator', value: 'Illustrator' },
        { label: 'Photoshop', value: 'Photoshop' },
        { label: 'JavaScript', value: 'JavaScript' },
        { label: 'React.js', value: 'React.js' },
        { label: 'Node.js', value: 'Node.js' },
        { label: 'Python', value: 'Python' },
        { label: 'Java', value: 'Java' },
        { label: 'HTML', value: 'HTML' },
        { label: 'CSS', value: 'CSS' },
        { label: 'SQL', value: 'SQL' },
        { label: 'Angular', value: 'Angular' },
        { label: 'Vue.js', value: 'Vue.js' },
        { label: 'TypeScript', value: 'TypeScript' },
        { label: 'Git', value: 'Git' },
        { label: 'Docker', value: 'Docker' },
        { label: 'AWS', value: 'AWS' },
        { label: 'Redux', value: 'Redux' },
    ];
    const locationsOptions = [
        { name: "New York", value: "New York" },
        { name: "Los Angeles", value: "Los Angeles" },
        { name: "Chicago", value: "Chicago" },
        { name: "London", value: "London" },
        { name: "Dubai", value: "Dubai" },
        { name: "Singapore", value: "Singapore" },
        { name: "Kuwait", value: "Kuwait" },
    ];

    const [data] = useState({
        desiredJobTitle: [],
        relocation: {
            anywhere: false,
            locations: []
        },
        desiredSalary: null,
        skills: [],
    });
    const [isRelocating, setIsRelocating] = useState(false);

    const multiSelectHandle = (type, selectedItems, setFieldValue, values) => {

        if (type === "desiredJobTitle") {
            setFieldValue('desiredJobTitle', selectedItems);
        }
        if (type === "willingToLocations") {
            setFieldValue('relocation', {
                ...values.relocation,
                locations: selectedItems
            });
        }
        if (type === "skills") {
            setFieldValue('skills', selectedItems);
        }
    };

    const handleSubmit = (values, actions) => {
        console.log("formik values", values);
    };
    return (
        <Formik
            initialValues={data}
            // validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting, setFieldValue, values }) => (
                <Form>
                    <span className="block text-gray-400 opacity-70 mt-5 mb-2"><span className="text-[red] pr-2">*</span>indicates required</span>
                    <p className='text-black-1 text-[14px] font-semibold mb-2'>Help us match you with your next job</p>
                    <div className="mb-4">
                        <Field name="desiredJobTitle">
                            {({ field }) => (
                                <MultiSelectInput
                                    {...field}
                                    mode={"multiple"}
                                    name={'desiredJobTitle'}
                                    label
                                    required
                                    options={desiredJobTitleOptions}
                                    onChange={(selectedItems) => multiSelectHandle("desiredJobTitle", selectedItems, setFieldValue)}
                                />
                            )}
                        </Field>
                    </div>

                    <div className='mb-4'>
                        <Field name="desiredSalary">
                            {({ field }) => (
                                <Core.SelectWithLabel
                                    {...field}
                                    name={"desiredSalary"}
                                    label
                                    required
                                    options={desiredSalaryOptions}
                                />
                            )}
                        </Field>
                    </div>

                    <div className="mb-4">
                        <Field name="skills">
                            {({ field }) => (
                                <MultiSelectInput
                                    {...field}
                                    mode={"multiple"}
                                    name={'skills'}
                                    label
                                    options={skillsOptions}
                                    onChange={(selectedItems) => multiSelectHandle("skills", selectedItems, setFieldValue)}
                                />
                            )}
                        </Field>
                    </div>

                    <label
                        htmlFor={'Relocation'}
                        className={` block text-[14px] text-gray-2 tracking-wide mb-2 font-semibold capitalize`}>
                        Relocation
                    </label>
                    <div className="flex items-center gap-x-1">
                        <input
                            type="checkbox"
                            id="willing-to-relocate"
                            checked={isRelocating}
                            onChange={() => setIsRelocating(!isRelocating)}
                        />
                        <label htmlFor="willing-to-relocate" className="text-gray-800">I am willing to relocate</label>
                    </div>

                    {isRelocating && (
                        <div className="mb-4">
                            <Field name="relocationPreference" as={Radio.Group} className="w-full">
                                <div className="flex flex-col gap-y-1 w-full pt-2 pl-6">
                                    <Radio
                                        value={"anywhere"}
                                        className='w-[20%]'
                                        onChange={() => setFieldValue('relocation.anywhere', true)}
                                        checked={values.relocation.anywhere}
                                    >
                                        Anywhere
                                    </Radio>
                                    <Radio
                                        value={'onlyNearMe'}
                                        className='w-[20%]'
                                        onChange={() => setFieldValue('relocation.anywhere', false)}
                                        checked={!values.relocation.anywhere}
                                    >
                                        Only near...
                                    </Radio>
                                </div>
                            </Field>
                        </div>
                    )}

                    {(values?.relocation?.anywhere === false)
                        &&
                        <div className="mb-4">
                            <Field name="willingToLocations">
                                {({ field }) => (
                                    <MultiSelectInput
                                        {...field}
                                        mode={"single"}
                                        name={'willingToLocations'}
                                        label
                                        options={locationsOptions}
                                        onChange={(selectedItems) => multiSelectHandle("willingToLocations", selectedItems, setFieldValue, values)}
                                    />
                                )}
                            </Field>
                        </div>
                    }

                    {action === "edit" &&
                        <div className='flex justify-start gap-x-3 pt-6 mt-8 border-t-[1px]'>
                            <Core.Button
                                // onClick={handleNext}
                                type="narrow" submit>Save</Core.Button>
                            <Core.Button
                                // onClick={handleBack} 
                                type="narrow" color="white" onClick={handleCancel}>Cancel</Core.Button>
                        </div>
                    }
                </Form>
            )}
        </Formik>
    );
}

export default JobPreference;

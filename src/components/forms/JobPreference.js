import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Core } from '..';
import { Radio, Spin } from 'antd/es';
import MultiSelectInput from '../core/MultiSelectInput';
import { useSelector } from 'react-redux';
import dropdownOptions from '../../data/dropdownOptions.json';

const {
    desiredJobTitleOptions,
    desiredSalaryOptions,
    skillsOptions,
    locationsOptions
} = dropdownOptions;

function JobPreference({ action, handleCancel, setCandidateProfileData, handleSenddata, savingForm }) {

    const candidate = useSelector((state) => state?.Candidate?.candidate);
    const jp = candidate.jobPreference;
    // console.log("jp", jp)

    const [data] = useState({
        desiredJobTitle: jp?.desiredJobTitle ? jp?.desiredJobTitle : [],
        desiredSalary: jp?.desiredSalary ? jp?.desiredSalary : null,
        isDeleted: jp?.isDeleted ? jp?.isDeleted : false,
        onlyNearMe: jp?.onlyNearMe ? jp?.onlyNearMe : '',
        relocation: jp?.relocation ? jp?.relocation : {},
        skills: jp?.skills ? jp?.skills : [],
    });

    const [isRelocating, setIsRelocating] = useState((data.relocation.anywhere === true || data.relocation.anywhere === false) ? true : false);

    const multiSelectHandle = (type, selectedItems, setFieldValue, values) => {

        if (type === "desiredJobTitle") {
            setFieldValue('desiredJobTitle', selectedItems);
        }
        if (type === "willingToLocations") {
            setFieldValue('relocation', {
                ...values.relocation,
                onlyNearMe: {
                    ...values.relocation.onlyNearMe,
                    locations: selectedItems
                }
            });
        }
        if (type === "skills") {
            setFieldValue('skills', selectedItems);
        }
    };

    const handleSubmit = (values) => {
        // console.log("handleSubmit called")

        let _jobPreferenceData = {
            desiredJobTitle: values?.desiredJobTitle,
            desiredSalary: values?.desiredSalary,
            isDeleted: values?.isDeleted,
            onlyNearMe: values?.onlyNearMe,
            relocation: values?.relocation,
            skills: values?.skills,
        };
        console.log({ _jobPreferenceData })
        setCandidateProfileData(prevData => ({
            ...prevData,
            jobPreferenceData: _jobPreferenceData,
        }));
        // handleSenddata()
    };

    return (
        <Formik
            initialValues={data}
            // validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ setFieldValue, values }) => {
                console.log("values", values)
                return (
                    <Form>
                        <span className="block text-gray-400 opacity-70 mt-5 mb-2"><span className="text-[red] pr-2">*</span>Required fields</span>
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
                                        defaultValue={values?.desiredJobTitle}
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
                                        value={field.value}
                                        helperText={"Note that all figures in this form are in US dollars and indicate yearly salary ranges."}
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
                                        defaultValue={values?.skills}
                                    />
                                )}
                            </Field>
                        </div>

                        <label
                            htmlFor={'Relocation'}
                            className={` block text-[14px] text-gray-2 tracking-wide mb-2 font-semibold capitalize`}>
                            Relocation
                        </label>

                        <div className='flex justify-between items-center pt-1 mb-2'>
                            <div className='flex justify-start items-center gap-x-1'>
                                <Field type='checkbox' name='currentlyInProcess' id="willing-to-relocate"
                                    checked={isRelocating}
                                    onChange={() => setIsRelocating(!isRelocating)} />
                                I am willing to relocate
                                <ErrorMessage name='inProcess' component='div' className='text-red-500' />
                            </div>
                        </div>

                        {isRelocating && (
                            <div className="mb-4">
                                <Field name="relocationPreference" as={Radio.Group} className="w-full">
                                    <div className="flex flex-col gap-y-1 w-full pt-2 pl-6">
                                        {/* <Radio
                                            value={"anywhere"}
                                            className='w-[20%]'
                                            onChange={() => {
                                                setFieldValue('relocation.anywhere', true);
                                                setFieldValue('relocationPreference', 'anywhere');
                                            }}
                                            checked={values?.relocation?.anywhere === true}
                                        >
                                            Anywhere
                                        </Radio>
                                        <Radio
                                            value={'onlyNearMe'}
                                            className='w-[20%]'
                                            onChange={() => {
                                                setFieldValue('relocation.anywhere', false);
                                                setFieldValue('relocationPreference', 'onlyNearMe');
                                            }}
                                            checked={values?.relocation?.anywhere === false}
                                        >
                                            Only near...
                                        </Radio> */}
                                        <Radio.Group
                                            onChange={() => {
                                                setFieldValue('relocation.anywhere', !values?.relocation?.anywhere);
                                            }}
                                            className='flex-col'
                                            value={values?.relocation?.anywhere === true ? 0 : 1}>
                                            <Radio value={0}>Anywhere</Radio>
                                            <Radio value={1}>Only near...</Radio>
                                        </Radio.Group>
                                    </div>
                                </Field>

                            </div>
                        )}

                        {
                            (values?.relocation?.anywhere === false)
                            &&
                            <div className="mb-4">
                                <Field name="willingToLocations">
                                    {({ field }) => (
                                        <MultiSelectInput
                                            {...field}
                                            mode={"multiple"}
                                            name={'willingToLocations'}
                                            label
                                            options={locationsOptions}
                                            onChange={(selectedItems) => multiSelectHandle("willingToLocations", selectedItems, setFieldValue, values)}
                                            defaultValue={values?.relocation?.onlyNearMe?.locations}
                                        />
                                    )}
                                </Field>
                            </div>
                        }

                        {
                            action === "edit" &&
                            <div className='flex justify-start gap-x-3 pt-6 mt-8 border-t-[1px]'>
                                {savingForm ?
                                    <div className=' flex justify-center items-center w-[77px] bg-white border text-[18px] leading-[20px] rounded-[8px] py-[12px]'>
                                        <Spin />
                                    </div>
                                    : <Core.Button type="narrow" submit>Save</Core.Button>}
                                <Core.Button
                                    // onClick={handleBack} 
                                    type="narrow" color="white" onClick={handleCancel}>Cancel</Core.Button>
                            </div>
                        }
                    </Form >
                )
            }}
        </Formik >
    );
}

export default JobPreference;
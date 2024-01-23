import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Core } from '..';
import DragImg from '../core/DragImg';
import { NavLink } from 'react-router-dom';

function Projects({ action, handleCancel }) {

    const associatedOptions = [
        { name: "option 1", value: "option 1" },
        { name: "option 2", value: "option 2" },
        { name: "option 3", value: "option 3" },
    ];

    const currentYear = new Date().getFullYear();
    const startYear = 1901;
    const endYear = currentYear - 5;
    const yearOptions = [];
    for (let year = startYear; year <= endYear; year++) {
        yearOptions.push({ name: year.toString(), value: year.toString() });
    }

    const monthsOptions = [
        { name: 'January', value: '01' },
        { name: 'February', value: '02' },
        { name: 'March', value: '03' },
        { name: 'April', value: '04' },
        { name: 'May', value: '05' },
        { name: 'June', value: '06' },
        { name: 'July', value: '07' },
        { name: 'August', value: '08' },
        { name: 'September', value: '09' },
        { name: 'October', value: '10' },
        { name: 'November', value: '11' },
        { name: 'December', value: '12' },
    ];
    const [data] = useState({});
    const [description, setDescription] = useState('');
    const [projectImage, setProjectImage] = useState('');

    const [selectedStartMonth, setSelectedStartMonth] = useState('');
    const [selectedEndMonth, setSelectedEndMonth] = useState('');
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState('');

    const handleDateChange = (type, name, event) => {
        const value = event.target.value;

        const setMonth = (selectedMonth) => {
            if (type === "startDate") {
                setSelectedStartMonth(selectedMonth);
            }
            if (type === "endDate") {
                setSelectedEndMonth(selectedMonth);
            }
        };

        const setYear = (selectedYear) => {
            const selectedMonth = (type === "startDate") ? selectedStartMonth : selectedEndMonth;

            if (selectedMonth !== "" && selectedYear !== "") {
                const selectedDate = selectedMonth + '/' + selectedYear;

                if (type === "startDate") {
                    setStartDate(selectedDate);
                }
                if (type === "endDate") {
                    setEndDate(selectedDate);
                }
            }
        };

        if (name === "month") {
            setMonth(value);
        }

        if (name === "year") {
            setYear(value);
        }

        if (type === "startDate" && selectedStartMonth !== "" && name === "year") {
            let _startDate = selectedStartMonth + '/' + value;
            setStartDate(_startDate)
        }
        if (type === "endDate" && selectedStartMonth !== "" && name === "year") {
            let _endDate = selectedStartMonth + '/' + value;
            setEndDate(_endDate)
        }
    };

    const handleSubmit = (values, actions) => {
        console.log(values);
        console.log('description', description);
        console.log('projectImage', projectImage);
        console.log("startDate", startDate)
        console.log("endDate", endDate)
    };

    return (
        <Formik
            initialValues={data}
            // validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting }) => (
                <Form>

                    <div className='mb-4'>
                        <DragImg state={projectImage} setState={setProjectImage} />
                    </div>

                    <div className='mb-4'>
                        <Field name="name">
                            {({ field }) => (
                                <Core.InputWithLabel
                                    {...field}
                                    name="name"
                                    // label="Name"
                                    sm
                                    label
                                    placeholder="Enter your name"
                                />
                            )}
                        </Field>
                    </div>

                    <div className='mb-4'>
                        <Field name="projectUrl">
                            {({ field }) => (
                                <Core.InputWithLabel
                                    {...field}
                                    name="projectUrl"
                                    // label="Project URL"
                                    sm
                                    label
                                />
                            )}
                        </Field>
                    </div>

                    <div className='w-full mb-4'>
                        <div className='flex gap-x-2'>
                            <div className='w-[50%]'>
                                <label className={`block text-[14px] text-gray-2 tracking-wide mb-2' font-semibold capitalize`}>
                                    Start <span className='text-[red]'>*</span>
                                </label>
                                <div className='flex gap-x-2'>
                                    <div className='w-[50%]'>
                                        <Core.SelectWithLabel
                                            name={"month"}
                                            sm
                                            options={monthsOptions}
                                            defaultOption="Month"
                                            onChange={(value) => handleDateChange("startDate", "month", value)}
                                            required
                                        />
                                    </div>
                                    <div className='w-[50%]'>
                                        <Core.SelectWithLabel
                                            name={"year"}
                                            sm
                                            options={yearOptions}
                                            defaultOption="Year"
                                            onChange={(value) => handleDateChange("startDate", "year", value)}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='w-[50%]'>
                                <label className={`block text-[14px] text-gray-2 tracking-wide mb-2' font-semibold capitalize`}>
                                    End <span className='text-[red]'>*</span>
                                </label>
                                <div className='flex gap-x-2'>
                                    <div className='w-[50%]'>
                                        <Core.SelectWithLabel
                                            name={"month"}
                                            sm
                                            options={monthsOptions}
                                            defaultOption="Month"
                                            onChange={(value) => handleDateChange("endDate", "month", value)}
                                            required
                                        />
                                    </div>
                                    <div className='w-[50%]'>
                                        <Core.SelectWithLabel
                                            name={"year"}
                                            sm
                                            options={yearOptions}
                                            defaultOption="Year"
                                            onChange={(value) => handleDateChange("endDate", "year", value)}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-between items-center pt-1 mb-2'>
                        <div className='flex justify-start items-center gap-x-1'>
                            <Field type='checkbox' name='agreeTerms' />
                            Currently in process
                            <ErrorMessage name='inProcess' component='div' className='text-red-500' />
                        </div>
                    </div>

                    <div className='mb-4'>
                        <Field name="associated">
                            {({ field }) => (
                                <Core.SelectWithLabel
                                    {...field}
                                    name={"associated"}
                                    label
                                    options={associatedOptions}
                                    defaultOption="Choose any one"
                                    required
                                />
                            )}
                        </Field>
                    </div>

                    <div className='mb-4'>
                        <Core.TextEditorWithLabel name={'description'} label height={"h-[200px]"} style={{ height: "84%" }} value={description} setValue={setDescription} />
                    </div>

                    <div className='flex justify-between pt-6 mt-8 border-t-[1px]'>
                        <div className='flex justify-start gap-x-3 '>
                            <Core.Button
                                // onClick={handleNext}
                                type="narrow" submit>Save</Core.Button>
                            <Core.Button
                                // onClick={handleBack} 
                                type="narrow" color="white" onClick={handleCancel}>Cancel</Core.Button>
                        </div>
                        {action === "edit" &&
                            <Core.Button
                                // onClick={handleBack} 
                                type="narrow" color="red" onClick={handleCancel}>Delete</Core.Button>
                        }
                    </div>

                </Form>
            )}
        </Formik>
    );
}

export default Projects;

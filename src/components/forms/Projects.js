import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Core } from '..';
import DragImg from '../core/DragImg';
import { useSelector } from 'react-redux';
import { Spin } from 'antd';


const associatedOptions = [
    { name: "Project Association", value: "Project Association" },
    { name: "option 2", value: "option 2" },
    { name: "option 3", value: "option 3" },
];

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

function Projects({ action, handleCancel, id, setCandidateProfileData, handleSenddata, index, savingForm }) {

    console.log("index", index)
    const candidate = useSelector((state) => state?.Candidate?.candidate);
    const projects = candidate.projectsData;
    const projectToEdit = projects?.find(project => project?._id === id);

    console.log("projectToEdit", projectToEdit)

    const currentYear = new Date().getFullYear();
    const startYear = 1901;
    const endYear = currentYear - 5;
    const yearOptions = [];
    for (let year = startYear; year <= endYear; year++) {
        yearOptions.push({ name: year.toString(), value: year.toString() });
    }

    const [data] = useState({
        _id: projectToEdit?._id ? projectToEdit?._id : "",
        projectImage: projectToEdit?.projectImage ? projectToEdit?.projectImage : "",
        projectUrl: projectToEdit?.projectUrl ? projectToEdit?.projectUrl : "",
        name: projectToEdit?.name ? projectToEdit?.name : "",
        associated: projectToEdit?.associated ? projectToEdit?.associated : "",
        currentlyInProcess: projectToEdit?.currentlyInProcess ? projectToEdit?.currentlyInProcess : false,
        description: projectToEdit?.description ? projectToEdit?.description : '',
        startDate: projectToEdit?.startDate ? projectToEdit?.startDate : '',
        endDate: projectToEdit?.endDate ? projectToEdit?.endDate : '',
    });

    const [description, setDescription] = useState(projectToEdit?.description ? projectToEdit?.description : '');
    const [projectImage, setProjectImage] = useState(projectToEdit?.projectImage ? projectToEdit?.projectImage : '');

    const startMonth = projectToEdit?.startDate?.match(/(\d+)\/(\d+)$/);
    const _startMonth = startMonth ? startMonth[1] : null;

    const endMonth = projectToEdit?.endDate?.match(/(\d+)\/(\d+)$/);
    const _endMonth = endMonth ? endMonth[1] : null;

    const _startYear = projectToEdit?.startDate?.match(/(\d+)\/(\d+)$/);
    const __startYear = _startYear ? _startYear[2] : null;

    const _endYear = projectToEdit?.endDate?.match(/(\d+)\/(\d+)$/);
    const __endYear = _endYear ? _endYear[2] : null;

    const [selectedStartMonth, setSelectedStartMonth] = useState(_startMonth);
    const [selectedEndMonth, setSelectedEndMonth] = useState(_endMonth);
    const [selectedStartYear, setSelectedStartYear] = useState(__startYear);
    const [selectedEndYear, setSelectedEndYear] = useState(__endYear);

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
                    setSelectedStartYear(selectedDate)
                }
                if (type === "endDate") {
                    setEndDate(selectedDate);
                    setSelectedEndYear(selectedDate)
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
    const imgUrl = `http://localhost:4000/${projectImage?.originFileObj?.name}`
    const handleSubmit = (values) => {
        let _projectsData = {
            projectImage: imgUrl,
            projectImageFile: projectImage?.originFileObj,
            name: values?.name,
            projectUrl: values?.projectUrl,
            startDate: startDate,
            endDate: endDate,
            currentlyInProcess: values?.currentlyInProcess,
            associated: values?.associated,
            description: description,
        }

        // let _projectsData1 = {
        //     projectImage: imgUrl,
        //     projectImageFile: projectImage?.originFileObj,
        //     name: values?.name,
        //     projectUrl: values?.projectUrl,
        //     startDate: startDate,
        //     endDate: endDate,
        //     currentlyInProcess: values?.currentlyInProcess,
        //     associated: values?.associated,
        //     description: description,
        // }


        // let projectData = [...projects]
        let projectData;
        if (action === "add") {
            projectData = [...projects, _projectsData]
        }
        else {
            projectData = projects.map((pro, i) => {

                if (pro._id === id) {
                    return _projectsData
                } else {
                    return pro
                }
            })
        }


        // projectData.push(_projectsData1)

        console.log({ projectData })
        handleSenddata({
            projectsData: projectData,


        })
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
                                    sm
                                    label
                                    placeholder="Enter your name"
                                    edit
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
                                    sm
                                    label
                                    edit
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
                                            value={selectedStartMonth}
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
                                            value={selectedStartYear}
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
                                            value={selectedEndMonth}
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
                                            value={selectedEndYear}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-between items-center pt-1 mb-2'>
                        <div className='flex justify-start items-center gap-x-1'>
                            <Field type='checkbox' name='currentlyInProcess' />
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
                            {savingForm ?
                                <div className=' flex justify-center items-center w-[77px] bg-white border text-[18px] leading-[20px] rounded-[8px] py-[12px]'>
                                    <Spin />
                                </div>
                                : <Core.Button type="narrow" submit>Save</Core.Button>}
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

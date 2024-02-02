import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Core } from '..';
import DragImg from '../core/DragImg';
import projectImg1 from '../../assets/images/projects/project1.png'
import projectImg2 from '../../assets/images/projects/project2.png'
import projectImg3 from '../../assets/images/projects/project3.png'

const projects = [
    {
        id: "1",
        title: "Project 1",
        link: "https://www.shutterstock.com/image-vector/website-template-design-vector-illustration-260nw-1059153563.jpg",
        img: projectImg1,
        associated: "option 1",
        description: "<p>description text is here...</p>",
        startDate: "02/2010",
        endDate: "06/2012",
        currentlyInProcess: true,
    },
    {
        id: "2",
        title: "Project 2",
        link: "https://www.shutterstock.com/image-vector/web-design-template-vector-illustration-260nw-1362343523.jpg",
        img: projectImg2,
        associated: "option 2",
        description: "<p>description text is here second one is here.</p>",
        startDate: "01/1903",
        endDate: "08/1905",
        currentlyInProcess: false,
    },
    {
        id: "3",
        title: "Project 3",
        link: "https://previews.123rf.com/images/darkovujic/darkovujic1809/darkovujic180900011/110267002-landing-page-template-of-web-design-modern-flat-design-concept-of-web-page-design-for-website-and.jpg",
        img: projectImg3,
        associated: "option 3",
        description: "<p>description text is here second one is here. You may call someone.</p>",
        startDate: "10/1920",
        endDate: "07/2005",
        currentlyInProcess: true,
    },
    // {
    // id: "4",
    //     title: "Project 4",
    //     link: "https://mir-s3-cdn-cf.behance.net/projects/404/469b22176695451.64c95edd2a9e7.jpg",
    //     img: projectImg4,
    // },
    // {
    // id: "5",
    //     title: "Project 5",
    //     link: "https://i.pinimg.com/736x/f6/52/22/f65222d817856ce6d0ae8bebcd998168.jpg",
    //     img: projectImg5,
    // },
]

function Projects({ action, handleCancel, id, setCandidateProfileData }) {
    console.log(id, "idddddddd")
    const projectToEdit = id ? projects?.find(project => project?.id === id) : undefined;

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
    const [data] = useState({
        id: projectToEdit?.id ? projectToEdit?.id : "",
        projectImg: projectToEdit?.projectImg ? projectToEdit?.projectImg : "",
        projectUrl: projectToEdit?.link ? projectToEdit?.link : "",
        name: projectToEdit?.title ? projectToEdit?.title : "",
        associated: projectToEdit?.associated ? projectToEdit?.associated : "",
        currentlyInProcess: projectToEdit?.currentlyInProcess ? projectToEdit?.currentlyInProcess : false,
    });
    const [description, setDescription] = useState("");
    const [projectImage, setProjectImage] = useState('');

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

    const handleSubmit = (values) => {
        let _projectsData = {
            projectImage: projectImage,
            name: values?.name,
            projectUrl: values?.projectUrl,
            startDate: startDate,
            endDate: endDate,
            currentlyInProcess: values?.currentlyInProcess,
            associated: values?.associated,
            description: description,
        }
        setCandidateProfileData(prevData => ({
            ...prevData,
            projectsData: _projectsData,
        }));
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
                                    // label="Project URL"
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

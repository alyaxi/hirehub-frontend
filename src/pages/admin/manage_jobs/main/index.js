import React, { useState } from 'react';
import { Breadcrumb, Stat } from '../../../../components/core';
import TableB from '../../../../components/table/TableB';
import { useNavigate } from "react-router-dom"

const columns = [
    {
        title: 'Position Title',
        key: 'positionTitle',
        dataIndex: 'positionTitle',
        sorter: true,
    }, {
        title: 'Employer',
        key: 'employer',
        dataIndex: 'employer',
    }, {
        title: 'No. Of Openings',
        key: 'noOfOpenings',
        dataIndex: 'noOfOpenings',
        sorter: true,
    }, {
        title: 'Expiration Date',
        key: 'expirationDate',
        dataIndex: 'expirationDate',
        sorter: true,
    }, {
        title: 'Salary',
        key: 'salary',
        dataIndex: 'salary',
        sorter: true,
    }, {
        title: 'Job Status',
        key: 'jobStatus',
        dataIndex: 'jobStatus',
        sorter: true
    },
    {
        title: 'Action',
        key: 'action',
        dataIndex: 'action',
    },
];

const jobs = [
    {
        id: "1",
        positionTitle: "UX/UI Designer",
        noOfOpenings: "09",
        expirationDate: "10/19/24",
        salary: "20,000",
        jobStatus: "Open",
        company: {
            title: "Cyber Tech Group",
            address: "Hybrid remote in Ann Arbor, MI 48109"
        },
        postedDate: 'May 24, 2023',
        salaryRange: '$50k - $70K',
        shortSummery: [
            { title: "industry", value: "Information Technology" },
            { title: "gender", value: "Gender " },
            { title: "package", value: "$75,000 a year" },
            { title: "minimumEducation", value: "Information" },
            { title: "totalPositions", value: "02" },
            { title: "careerLevel", value: "Information" },
            { title: "jobShift", value: "First Shift (Day)" },
            { title: "experience", value: "Information" },
            { title: "jobType", value: "Full Time/Permanent" },
            { title: "applyBefore", value: "Information" },
            { title: "department", value: "UX/UI" },
            { title: "postingDate", value: "Information" },
            { title: "jobLocation", value: "Houston, TX 77060 " },
        ],
    },
    {
        id: "2",
        positionTitle: "Assistant Project Manager",
        noOfOpenings: "25",
        expirationDate: "10/19/22",
        salary: "1000",
        jobStatus: "Closed",
        company: {
            title: "Cyber Tech Group",
            address: "Hybrid remote in Ann Arbor, MI 48109"
        },
        postedDate: 'May 24, 2023',
        salaryRange: '$50k - $70K',
        shortSummery: [
            { title: "industry", value: "Information Technology" },
            { title: "gender", value: "Gender " },
            { title: "package", value: "$75,000 a year" },
            { title: "minimumEducation", value: "Information" },
            { title: "totalPositions", value: "02" },
            { title: "careerLevel", value: "Information" },
            { title: "jobShift", value: "First Shift (Day)" },
            { title: "experience", value: "Information" },
            { title: "jobType", value: "Full Time/Permanent" },
            { title: "applyBefore", value: "Information" },
            { title: "department", value: "UX/UI" },
            { title: "postingDate", value: "Information" },
            { title: "jobLocation", value: "Houston, TX 77060 " },
        ],
    },
    {
        id: "3",
        positionTitle: "Senior Full stack developer - React js",
        noOfOpenings: "07",
        expirationDate: "10/19/23",
        salary: "12,000",
        jobStatus: "Closed",
        company: {
            title: "Cyber Tech Group",
            address: "Hybrid remote in Ann Arbor, MI 48109"
        },
        postedDate: 'May 24, 2023',
        salaryRange: '$50k - $70K',
        shortSummery: [
            { title: "industry", value: "Information Technology" },
            { title: "gender", value: "Gender " },
            { title: "package", value: "$75,000 a year" },
            { title: "minimumEducation", value: "Information" },
            { title: "totalPositions", value: "02" },
            { title: "careerLevel", value: "Information" },
            { title: "jobShift", value: "First Shift (Day)" },
            { title: "experience", value: "Information" },
            { title: "jobType", value: "Full Time/Permanent" },
            { title: "applyBefore", value: "Information" },
            { title: "department", value: "UX/UI" },
            { title: "postingDate", value: "Information" },
            { title: "jobLocation", value: "Houston, TX 77060 " },
        ],
    },
    {
        id: "4",
        positionTitle: "Mobile Application Developer (Fresh)",
        noOfOpenings: "03",
        expirationDate: "10/19/21",
        salary: "6500",
        jobStatus: "Republished",
        company: {
            title: "Cyber Tech Group",
            address: "Hybrid remote in Ann Arbor, MI 48109"
        },
        postedDate: 'May 24, 2023',
        salaryRange: '$50k - $70K',
        shortSummery: [
            { title: "industry", value: "Information Technology" },
            { title: "gender", value: "Gender " },
            { title: "package", value: "$75,000 a year" },
            { title: "minimumEducation", value: "Information" },
            { title: "totalPositions", value: "02" },
            { title: "careerLevel", value: "Information" },
            { title: "jobShift", value: "First Shift (Day)" },
            { title: "experience", value: "Information" },
            { title: "jobType", value: "Full Time/Permanent" },
            { title: "applyBefore", value: "Information" },
            { title: "department", value: "UX/UI" },
            { title: "postingDate", value: "Information" },
            { title: "jobLocation", value: "Houston, TX 77060 " },
        ],
    },
    {
        id: "5",
        positionTitle: "Application Developers",
        noOfOpenings: "01",
        expirationDate: "10/19/20",
        salary: "20,300",
        jobStatus: "Republished",
        company: {
            title: "Cyber Tech Group",
            address: "Hybrid remote in Ann Arbor, MI 48109"
        },
        postedDate: 'May 24, 2023',
        salaryRange: '$50k - $70K',
        shortSummery: [
            { title: "industry", value: "Information Technology" },
            { title: "gender", value: "Gender " },
            { title: "package", value: "$75,000 a year" },
            { title: "minimumEducation", value: "Information" },
            { title: "totalPositions", value: "02" },
            { title: "careerLevel", value: "Information" },
            { title: "jobShift", value: "First Shift (Day)" },
            { title: "experience", value: "Information" },
            { title: "jobType", value: "Full Time/Permanent" },
            { title: "applyBefore", value: "Information" },
            { title: "department", value: "UX/UI" },
            { title: "postingDate", value: "Information" },
            { title: "jobLocation", value: "Houston, TX 77060 " },
        ],
    },
    {
        id: "6",
        positionTitle: "Software Engineer",
        noOfOpenings: "15",
        expirationDate: "10/19/19",
        salary: "1000 ",
        jobStatus: "Open",
        company: {
            title: "Cyber Tech Group",
            address: "Hybrid remote in Ann Arbor, MI 48109"
        },
        postedDate: 'May 24, 2023',
        salaryRange: '$50k - $70K',
        shortSummery: [
            { title: "industry", value: "Information Technology" },
            { title: "gender", value: "Gender " },
            { title: "package", value: "$75,000 a year" },
            { title: "minimumEducation", value: "Information" },
            { title: "totalPositions", value: "02" },
            { title: "careerLevel", value: "Information" },
            { title: "jobShift", value: "First Shift (Day)" },
            { title: "experience", value: "Information" },
            { title: "jobType", value: "Full Time/Permanent" },
            { title: "applyBefore", value: "Information" },
            { title: "department", value: "UX/UI" },
            { title: "postingDate", value: "Information" },
            { title: "jobLocation", value: "Houston, TX 77060 " },
        ],
    }
];
const actions = {
    view: true,
};

const breadcrumb = [
    { label: "Dashboard", link: "/admin/dashboard" },
    { label: "Manage Jobs" },
];

function MainJobs() {
    const [jobStatus, setJobStatus] = useState("");
    const [jobTitle, setJobTitle] = useState("");
    const [expirationDate, setExpirationDate] = useState("");
    const navigate = useNavigate();

    const onViewClick = (id) => {
        navigate(`/admin/manage-jobs/view/${id}`);
    };

    const addButton = () => {
        navigate(`/admin/manage-jobs/add`);
    };

    console.log("jobStatus", jobStatus);
    console.log("jobTitle", jobTitle);
    console.log("expirationDate", expirationDate);
    return (
        <>
            <Breadcrumb
                heading="Manage Jobs"
                breadcrumb={breadcrumb}
            />
            <TableB
                data={jobs}
                columns={columns}
                filterBy={[
                    "SearchByJobStatus",
                    "SearchByJobTitle",
                    "SearchByExpirationDate",
                ]}
                setJobStatus={setJobStatus}
                jobTitle={jobTitle}
                setJobTitle={setJobTitle}
                setExpirationDate={setExpirationDate}
                actions={actions}
                onViewClick={onViewClick}
                addButton={{
                    title: "Add Job",
                    func: addButton,
                }}
            />
        </>
    );
}

export default MainJobs;

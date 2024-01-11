import React from 'react';
import { Breadcrumb, } from '../../../../components/core';
import { JobDetails, } from '../../../../components';
import { useLocation } from 'react-router-dom';

const breadcrumb = [
    { label: "Dashboard", link: "/admin/dashboard" },
    { label: "Manage Jobs" },
    { label: "Job Details" },
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
            { title: "Industry", value: "Information Technology" },
            { title: "Package", value: "$75,000 a year" },
            { title: "Total Positions", value: "02" },
            { title: "Job Shift", value: "First Shift (Day)" },
            { title: "Job Type", value: "Full Time/Permanent" },
            { title: "Department", value: "UX/UI" },
            { title: "Job Location", value: "Houston, TX 77060 " },
            { title: "Gender", value: "No Preference" },
            { title: "Minim um Education", value: "Bachelor" },
            { title: "Career Level", value: "Experienced Professional" },
            { title: "Experience", value: "3 Years" },
            { title: "Apply Before", value: "Jun 27, 2023" },
            { title: "Posting Date", value: "May 24, 2023" },
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
            { title: "Industry", value: "Information Technology" },
            { title: "Package", value: "$75,000 a year" },
            { title: "Total Positions", value: "02" },
            { title: "Job Shift", value: "First Shift (Day)" },
            { title: "Job Type", value: "Full Time/Permanent" },
            { title: "Department", value: "UX/UI" },
            { title: "Job Location", value: "Houston, TX 77060 " },
            { title: "Gender", value: "No Preference" },
            { title: "Minim um Education", value: "Bachelor" },
            { title: "Career Level", value: "Experienced Professional" },
            { title: "Experience", value: "3 Years" },
            { title: "Apply Before", value: "Jun 27, 2023" },
            { title: "Posting Date", value: "May 24, 2023" },
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
            { title: "Industry", value: "Information Technology" },
            { title: "Package", value: "$75,000 a year" },
            { title: "Total Positions", value: "02" },
            { title: "Job Shift", value: "First Shift (Day)" },
            { title: "Job Type", value: "Full Time/Permanent" },
            { title: "Department", value: "UX/UI" },
            { title: "Job Location", value: "Houston, TX 77060 " },
            { title: "Gender", value: "No Preference" },
            { title: "Minim um Education", value: "Bachelor" },
            { title: "Career Level", value: "Experienced Professional" },
            { title: "Experience", value: "3 Years" },
            { title: "Apply Before", value: "Jun 27, 2023" },
            { title: "Posting Date", value: "May 24, 2023" },
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
            { title: "Industry", value: "Information Technology" },
            { title: "Package", value: "$75,000 a year" },
            { title: "Total Positions", value: "02" },
            { title: "Job Shift", value: "First Shift (Day)" },
            { title: "Job Type", value: "Full Time/Permanent" },
            { title: "Department", value: "UX/UI" },
            { title: "Job Location", value: "Houston, TX 77060 " },
            { title: "Gender", value: "No Preference" },
            { title: "Minim um Education", value: "Bachelor" },
            { title: "Career Level", value: "Experienced Professional" },
            { title: "Experience", value: "3 Years" },
            { title: "Apply Before", value: "Jun 27, 2023" },
            { title: "Posting Date", value: "May 24, 2023" },
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
            { title: "Industry", value: "Information Technology" },
            { title: "Package", value: "$75,000 a year" },
            { title: "Total Positions", value: "02" },
            { title: "Job Shift", value: "First Shift (Day)" },
            { title: "Job Type", value: "Full Time/Permanent" },
            { title: "Department", value: "UX/UI" },
            { title: "Job Location", value: "Houston, TX 77060 " },
            { title: "Gender", value: "No Preference" },
            { title: "Minim um Education", value: "Bachelor" },
            { title: "Career Level", value: "Experienced Professional" },
            { title: "Experience", value: "3 Years" },
            { title: "Apply Before", value: "Jun 27, 2023" },
            { title: "Posting Date", value: "May 24, 2023" },
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
            { title: "Industry", value: "Information Technology" },
            { title: "Package", value: "$75,000 a year" },
            { title: "Total Positions", value: "02" },
            { title: "Job Shift", value: "First Shift (Day)" },
            { title: "Job Type", value: "Full Time/Permanent" },
            { title: "Department", value: "UX/UI" },
            { title: "Job Location", value: "Houston, TX 77060 " },
            { title: "Gender", value: "No Preference" },
            { title: "Minim um Education", value: "Bachelor" },
            { title: "Career Level", value: "Experienced Professional" },
            { title: "Experience", value: "3 Years" },
            { title: "Apply Before", value: "Jun 27, 2023" },
            { title: "Posting Date", value: "May 24, 2023" },
        ],
    }
];

function ViewJob() {

    const location = useLocation();
    const parts = location?.pathname.split('/');
    const id = parts[parts.length - 1];

    const data = jobs.find(job => job.id === id);
    return (
        <>
            <Breadcrumb
                heading="Job Details"
                breadcrumb={breadcrumb}
            />
            <JobDetails data={data} pageType="view" />
        </>
    );
}

export default ViewJob;

import React, { useEffect, useState } from 'react';
import { Table } from '../../../../components';
import { Breadcrumb, Stat } from '../../../../components/core';
import avatar1 from "../../../../assets/images/avatars/2.png";
import TableB from '../../../../components/table/TableB';
import { useNavigate } from "react-router-dom"
import { getAppliedJobByCandidate } from '../../../../Slices/Employer/ManageCandidate';
import { useDispatch, useSelector } from 'react-redux';


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
        employer: "Marriott International",
        noOfOpenings: "01",
        expirationDate: "10/19/24",
        salary: "20,000",
        jobStatus: "Open",
    },
    {
        id: "2",
        positionTitle: "Assistant Project Manager",
        employer: "Procter & Gamble",
        noOfOpenings: "05",
        expirationDate: "10/19/24",
        salary: "1000 ",
        jobStatus: "Closed",
    },
    {
        id: "3 ",
        positionTitle: "Senior Full stack developer - React js",
        employer: "CVS Corporation",
        noOfOpenings: "07",
        expirationDate: "10/19/24",
        salary: "12,000",
        jobStatus: "Closed",
    },
    {
        id: "4",
        positionTitle: "Mobile Application Developer (Fresh)",
        employer: "Berkshire Hathaway",
        noOfOpenings: "03",
        expirationDate: "10/19/24",
        salary: "6500",
        jobStatus: "Republished",
    },
    {
        id: "5",
        positionTitle: "Application Developers",
        employer: "American Express",
        noOfOpenings: "01",
        expirationDate: "10/19/24",
        salary: "20,000",
        jobStatus: "Republished",
    },
    {
        id: "6",
        positionTitle: "Software Engineer",
        employer: "General Electric",
        noOfOpenings: "01",
        expirationDate: "10/19/24",
        salary: "1000 ",
        jobStatus: "Open",
    },

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
            />
        </>
    );
}

export default MainJobs;

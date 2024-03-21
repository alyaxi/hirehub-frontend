import React, { useEffect, useState } from 'react';
import { Breadcrumb } from '../../../../components/core';
import TableB from '../../../../components/table/TableB';
import { useNavigate } from "react-router-dom"
import { GetjobsEmployer } from '../../../../Slices/Employer/JobSlice';
import { useDispatch, useSelector } from 'react-redux';

const columns = [
    {
        title: 'Position Title',
        key: 'positionTitle',
        dataIndex: 'positionTitle',
        sorter: (a, b) => {
            if (!a.positionTitle || !b.positionTitle) {
                return 0;
            }
            return a.positionTitle.localeCompare(b.positionTitle);
        },
    }, {
        title: 'Applicant Count',
        key: 'applicationCount',
        dataIndex: 'applicationCount',
    }, {
        title: 'No. Of Openings',
        key: 'noOfOpenings',
        dataIndex: 'noOfOpenings',
        sorter: (a, b) => {
            if (!a.noOfOpenings || !b.noOfOpenings) {
                return 0;
            }
            return a.noOfOpenings - b.noOfOpenings;
        },
    }, {
        title: 'Expiration Date',
        key: 'expirationDate',
        dataIndex: 'expirationDate',
        sorter: (a, b) => {
            if (!a.expirationDate || !b.expirationDate) {
                return 0;
            }
            return new Date(a.expirationDate) - new Date(b.expirationDate);
        },
        defaultSortOrder: 'descend',
    }, {
        title: 'Salary',
        key: 'salary',
        dataIndex: 'salary',
        sorter: (a, b) => {
            if (!a.salary || !b.salary) {
                return 0;
            }
            const [minA, maxA] = a.salary.match(/\d+/g).map(Number);
            const [minB, maxB] = b.salary.match(/\d+/g).map(Number);
            if (minA !== minB) {
                return minA - minB;
            }
            return maxA - maxB;
        },

    }, {
        title: 'Job Status',
        key: 'jobStatus',
        dataIndex: 'jobStatus',
        sorter: (a, b) => {
            if (!a.jobStatus || !b.jobStatus) {
                return 0;
            }
            return a.jobStatus.localeCompare(b.jobStatus);
        },
    },
    {
        title: 'Action',
        key: 'action',
        dataIndex: 'action',
    },
];

const actions = {
    view: true,
    edit: true,
};

const breadcrumb = [
    { label: "Dashboard", link: "/employer/dashboard" },
    { label: "Manage Jobs" },
];

function MainJobs() {
    const [jobStatus, setJobStatus] = useState("");
    const [jobTitle, setJobTitle] = useState("");
    const [expirationDate, setExpirationDate] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const jobs = useSelector((state) => state?.jobSlice.jobs);

    // console.log(jobs, "jobsssssssss")

    useEffect(() => {
        try {
            dispatch(GetjobsEmployer()).unwrap().then(res => {
                console.log("Successfully fetched data", res);
            }).catch(err => {
                console.error(`Error Fetching Data ${err}`);
            });
        } catch (error) {
            console.error(`Error in useEffect of Dashboard ${error}`)
        }
    }, [])

    const onViewClick = (id) => {
        navigate(`/employer/manage-jobs/view/${id}`);
    };
    const onEditClick = (id) => {
        navigate(`/employer/manage-jobs/edit/${id}`);
    };
    const addButton = () => {
        navigate(`/employer/manage-jobs/add`);
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
                    "SearchByJobTitle",
                    "SearchByJobStatus",
                    "SearchByExpirationDate",
                ]}
                setJobStatus={setJobStatus}
                jobTitle={jobTitle}
                setJobTitle={setJobTitle}
                setExpirationDate={setExpirationDate}
                actions={actions}
                onViewClick={onViewClick}
                onEditClick={onEditClick}
                addButton={{
                    title: "Add Job",
                    func: addButton,
                }}
            />
        </>
    );
}

export default MainJobs;

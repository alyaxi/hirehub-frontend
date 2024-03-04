import React, { useState } from 'react';
import { Breadcrumb, } from '../../../../components/core'
import TableB from '../../../../components/table/TableB';
import { Core } from '../../../../components';

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
        title: 'Employer',
        key: 'employer',
        dataIndex: 'employer',
    }, {
        title: 'Applied Date',
        key: 'appliedDate',
        dataIndex: 'appliedDate',
        sorter: (a, b) => {
            if (!a.appliedDate || !b.appliedDate) {
                return 0;
            }
            return new Date(a.appliedDate) - new Date(b.appliedDate);
        },
        defaultSortOrder: 'descend',
    }, {
        title: 'Application Status',
        key: 'applicationStatus',
        dataIndex: 'applicationStatus',
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
    }
];

const questionnaire = [
    {
        id: "1",
        positionTitle: "UX/UI Designer",
        employer: {
            address: "fdfdf",
            logo: "http://167.99.148.81/server/6180707.png",
            title: "Berkshire Hathaway",
        },
        appliedDate: "April 12, 2023",
        applicationStatus: "New",
        jobStatus: "closed",
    }, {
        id: "2",
        positionTitle: "Assistant Project Manager",
        employer: {
            address: "fdfdf",
            logo: "http://167.99.148.81/server/6180707.png",
            title: "Procter & Gamble",
        },
        appliedDate: "May 17, 2023",
        applicationStatus: "Offer Made",
        jobStatus: "Open",
    }, {
        id: "3",
        positionTitle: "Senior Full stack developer - React js",
        employer: {
            address: "fdfdf",
            logo: "http://167.99.148.81/server/6180707.png",
            title: "CVS Corporation",
        },
        appliedDate: "February 15, 2023",
        applicationStatus: "Offer accepted ",
        jobStatus: "Open",
    },

];

const breadcrumb = [
    { label: "Dashboard", link: "/candidate/dashboard" },
    { label: "Job History" },
];

function MainJobHistoryCandidate() {

    const [jobStatus, setJobStatus] = useState("");
    const [appliedDate, setAppliedDate] = useState("");
    const [applicationStatus, setApplicationStatus] = useState("");
    const [jobTitle, setJobTitle] = useState("")

    console.log("filterby", {
        "jobTitle": jobTitle,
        "jobStatus": jobStatus,
        "appliedDate": appliedDate,
        "applicationStatus": applicationStatus
    })

    return (
        <>
            <Breadcrumb
                heading="Job History"
                breadcrumb={breadcrumb}
            />

            <div className={`flex justify-start items-center gap-x-1 w-full mb-4`}>
                <Core.InputWithLabel
                    name={'SearchByJobTitle'}
                    onChange={(e) => setJobTitle(e.target.value)}
                    sm
                    className={'w-full'}
                    iconic
                />
                <Core.Button sm type="narrow" color="white" className={'max-w-[100px]'}>Search</Core.Button>
            </div>

            <TableB
                data={questionnaire}
                columns={columns}
                filterBy={[
                    "SearchByAppliedDate",
                    "SearchByJobStatus",
                    "SearchByApplicationStatus"
                ]}
                setJobStatus={setJobStatus}
                setAppliedDate={setAppliedDate}
                setApplicationStatus={setApplicationStatus}
            />
        </>
    );
}

export default MainJobHistoryCandidate;

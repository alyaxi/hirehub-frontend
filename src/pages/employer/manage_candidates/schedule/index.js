import React from 'react';
import { Breadcrumb, } from '../../../../components/core';
import { Core, } from '../../../../components';
import employersData from '../../../../data/employersData.json';

const breadcrumb = [
    { label: "Dashboard", link: "/admin/dashboard" },
    { label: "Manage Candidates" },
    { label: "Schedule" },
];

const MyEventsList = [

    {
        title: 'Initiate',
        start: new Date(2024, 0, 9, 2, 0), // Date and time
        end: new Date(2024, 0, 9, 3, 0),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        type: 'Interview',
    },
    {
        title: 'Initiate',
        start: new Date(2024, 0, 9, 2, 0), // Date and time
        end: new Date(2024, 0, 9, 3, 0),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        type: 'Interview',
    },
    {
        title: 'Initiate',
        start: new Date(2024, 1, 9, 6, 0), // Date and time
        end: new Date(2024, 1, 9, 5, 0),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        type: 'Interview',
    },
    {
        title: 'Break',
        start: new Date(2024, 1, 9, 11, 0), // Date and time
        end: new Date(2024, 1, 9, 12, 0),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        type: 'Interview',
    },
    {
        title: 'Orientation 1',
        start: new Date(2024, 1, 9, 1, 0), // Date and time
        end: new Date(2024, 1, 9, 2, 0),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        type: 'Interview',
    },
    {
        title: 'Orientation 2',
        start: new Date(2024, 1, 9, 7, 0), // Date and time
        end: new Date(2024, 1, 9, 8, 0),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        type: 'Interview',
    },
    {
        title: 'Interview with...',
        start: new Date(2024, 1, 20, 10, 0), // Date and time
        end: new Date(2024, 1, 20, 12, 0),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        type: 'Interview',
    },
    {
        title: 'Final Interview with...',
        start: new Date(2024, 1, 25, 10, 0), // Date and time
        end: new Date(2024, 1, 25, 12, 0),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        type: 'Interview',
    },
    {
        title: 'Final Interview with...',
        start: new Date(2024, 1, 25, 3, 0), // Date and time
        end: new Date(2024, 1, 25, 5, 0),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        type: 'Interview',
    },
    {
        title: 'Offer Letter Request',
        start: new Date(2024, 1, 25, 6, 0), // Date and time
        end: new Date(2024, 1, 25, 4, 0),
        description: '1 Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        type: 'Interview',
    },
    {
        title: 'Interview with App...',
        start: new Date(2024, 1, 28, 14, 0),
        end: new Date(2024, 1, 28, 16, 0),
        description: 'Reminder: Finish project tasks',
        type: 'Reminder',
    },





    {
        title: 'Initiate',
        start: new Date(2024, 2, 9, 6, 0), // Date and time
        end: new Date(2024, 2, 9, 5, 0),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        type: 'Interview',
    },
    {
        title: 'Final Interview',
        start: new Date(2024, 2, 9, 11, 0), // Date and time
        end: new Date(2024, 2, 9, 12, 0),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        type: 'Interview',
    },
    {
        title: 'Orientation 6',
        start: new Date(2024, 2, 9, 7, 0), // Date and time
        end: new Date(2024, 2, 9, 8, 0),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        type: 'Interview',
    },
    {
        title: 'Initiate',
        start: new Date(2024, 2, 9, 6, 0), // Date and time
        end: new Date(2024, 2, 9, 5, 0),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        type: 'Interview',
    },
    {
        title: 'Orientation 5',
        start: new Date(2024, 3, 9, 5, 0), // Date and time
        end: new Date(2024, 3, 9, 6, 0),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        type: 'Interview',
    },
    {
        title: 'Final Interview',
        start: new Date(2024, 3, 9, 11, 0), // Date and time
        end: new Date(2024, 3, 9, 12, 0),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        type: 'Interview',
    },
    {
        title: 'Orientation 5',
        start: new Date(2024, 3, 9, 1, 0), // Date and time
        end: new Date(2024, 3, 9, 2, 0),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        type: 'Interview',
    },
    // Add more events as needed
];

function ScheduleCandidates() {
    const { tableData } = employersData;

    const dropdownOptions = [
        'activate',
        'inactive',
        'on hold',
    ];
    console.log("dropdownOptions", dropdownOptions)

    return (
        <>
            <Breadcrumb
                heading="Schedule"
                breadcrumb={breadcrumb}
            />
            <Core.MyCalender events={MyEventsList} />
        </>
    );
}

export default ScheduleCandidates;

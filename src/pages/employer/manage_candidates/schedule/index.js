import React, { useEffect } from 'react';
import { Breadcrumb, } from '../../../../components/core';
import { Core, } from '../../../../components';
import employersData from '../../../../data/employersData.json';
import { getInterview } from '../../../../Slices/Employer/interviewSchuleSlice';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';



const breadcrumb = [
    { label: "Dashboard", link: "/admin/dashboard" },
    { label: "Manage Candidates" },
    { label: "Schedule" },
];

// const MyEventsList = [

//     {
//         title: 'Initiate',
//         start: new Date(2024, 0, 9, 2, 0), // Date and time
//         end: new Date(2024, 0, 9, 3, 0),
//         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//         type: 'Interview',
//     },
//     {
//         title: 'Orientation',
//         start: new Date(2024, 0, 9, 2, 0), // Date and time
//         end: new Date(2024, 0, 9, 3, 0),
//         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//         type: 'Interview',
//     },
//     {
//         title: 'Initiate',
//         start: new Date(2024, 1, 9, 6, 0), // Date and time
//         end: new Date(2024, 1, 9, 5, 0),
//         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//         type: 'Interview',
//     },
//     {
//         title: 'Break',
//         start: new Date(2024, 1, 9, 11, 0), // Date and time
//         end: new Date(2024, 1, 9, 12, 0),
//         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//         type: 'Interview',
//     },
//     {
//         title: 'Orientation 1',
//         start: new Date(2024, 1, 9, 1, 0), // Date and time
//         end: new Date(2024, 1, 9, 2, 0),
//         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//         type: 'Interview',
//     },
//     {
//         title: 'Orientation 2',
//         start: new Date(2024, 1, 14, 7, 0), // Date and time
//         end: new Date(2024, 1, 14, 8, 0),
//         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//         type: 'Interview',
//     },
//     {
//         title: 'Interview with...',
//         start: new Date(2024, 1, 20, 10, 0), // Date and time
//         end: new Date(2024, 1, 20, 12, 0),
//         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//         type: 'Interview',
//     },
//     {
//         title: 'Final Interview with...',
//         start: new Date(2024, 1, 25, 10, 0), // Date and time
//         end: new Date(2024, 1, 25, 12, 0),
//         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//         type: 'Interview',
//     },
//     {
//         title: 'Final Interview with...',
//         start: new Date(2024, 1, 25, 3, 0), // Date and time
//         end: new Date(2024, 1, 25, 5, 0),
//         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//         type: 'Interview',
//     },
//     {
//         title: 'Offer Letter Request',
//         start: new Date(2024, 1, 25, 6, 0), // Date and time
//         end: new Date(2024, 1, 25, 4, 0),
//         description: '1 Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//         type: 'Interview',
//     },
//     {
//         title: 'Interview with App...',
//         start: new Date(2024, 1, 28, 14, 0),
//         end: new Date(2024, 1, 28, 16, 0),
//         description: 'Reminder: Finish project tasks',
//         type: 'Reminder',
//     },

//     {
//         title: 'Orientation',
//         start: new Date(2024, 1, 13, 2, 0), // Date and time
//         end: new Date(2024, 1, 13, 3, 0),
//         description: '1 Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//         type: 'Interview',
//     },
//     {
//         title: 'Initiate',
//         start: new Date(2024, 1, 13, 6, 0), // Date and time
//         end: new Date(2024, 1, 13, 5, 0),
//         description: '2 Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//         type: 'Interview',
//     },
//     {
//         title: 'Break',
//         start: new Date(2024, 1, 13, 11, 0), // Date and time
//         end: new Date(2024, 1, 13, 12, 0),
//         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//         type: 'Interview',
//     },



//     {
//         title: 'Initiate',
//         start: new Date(2024, 2, 9, 6, 0), // Date and time
//         end: new Date(2024, 2, 9, 5, 0),
//         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//         type: 'Interview',
//     },
//     {
//         title: 'Final Interview',
//         start: new Date(2024, 2, 9, 11, 0), // Date and time
//         end: new Date(2024, 2, 9, 12, 0),
//         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//         type: 'Interview',
//     },
//     {
//         title: 'Orientation 6',
//         start: new Date(2024, 2, 9, 7, 0), // Date and time
//         end: new Date(2024, 2, 9, 8, 0),
//         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//         type: 'Interview',
//     },
//     {
//         title: 'Initiate',
//         start: new Date(2024, 2, 9, 6, 0), // Date and time
//         end: new Date(2024, 2, 9, 5, 0),
//         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//         type: 'Interview',
//     },
//     {
//         title: 'Orientation 5',
//         start: new Date(2024, 3, 9, 5, 0), // Date and time
//         end: new Date(2024, 3, 9, 6, 0),
//         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//         type: 'Interview',
//     },
//     {
//         title: 'Final Interview',
//         start: new Date(2024, 3, 9, 11, 0), // Date and time
//         end: new Date(2024, 3, 9, 12, 0),
//         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//         type: 'Interview',
//     },
//     {
//         title: 'Orientation 5',
//         start: new Date(2024, 3, 9, 1, 0), // Date and time
//         end: new Date(2024, 3, 9, 2, 0),
//         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//         type: 'Interview',
//     },
//     // Add more events as needed
// ];



function ScheduleCandidates() {
    const { tableData } = employersData;
    const dispatch = useDispatch();
    const reload = useSelector((state) => state?.interview?.reload);
    const interview = useSelector((state) => state?.interview?.interviews);
    console.log('interview',interview)






    useEffect(() => {
        try {
    
            dispatch(getInterview()).unwrap().then(res => {
                console.log("Successfully fetched data", res);
    
            }).catch(err => {
                console.error(`Error Fetching Data ${err}`);
            });
        } catch (error) {
            console.error(`Error in useEffect of Dashboard ${error}`)
    
        }
    
    
    }, [reload])

    const modifiedDatainterview = interview?.map(item => {
        const combinedStringStart = `${item?.scheduledDate} ${item?.startTime}`;
        const obj1 = moment(combinedStringStart, "YYYY-M-D HH:mm");
        const startTime = obj1.toDate();
        const combinedStringEnd = `${item?.scheduledDate} ${item?.endTime}`;
        const obj2 = moment(combinedStringEnd, "YYYY-M-D HH:mm");
        const endTime = obj2.toDate();
        // console.log(startTime, endTime, "dateetiemeee")
        return (
       
        { ...item, start: startTime, end: endTime, type: "Interview", title: "Interview Invitation" }
    )})

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
            <Core.MyCalender events={modifiedDatainterview} type="employer"/>
        </>
    );
}

export default ScheduleCandidates;

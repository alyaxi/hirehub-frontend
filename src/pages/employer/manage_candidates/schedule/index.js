import React, { useEffect } from 'react';
import { Breadcrumb, } from '../../../../components/core';
import { Core, } from '../../../../components';
import { getInterview } from '../../../../Slices/Employer/interviewSchuleSlice';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

// const MyEventsList = [ 
//     {
//         title: 'Initiate',
//         start: new Date(2024, 0, 9, 2, 0), // Date and time
//         end: new Date(2024, 0, 9, 3, 0),
//         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//         type: 'Interview',
//     }, 
// ];

// const dropdownOptions = [
//     'activate',
//     'inactive',
//     'on hold',
// ];

const breadcrumb = [
    { label: "Dashboard", link: "/employer/dashboard" },
    { label: "Manage Candidates", link: "/employer/manage-candidates" },
    { label: "Schedule" },
];

function ScheduleCandidates() {
    const dispatch = useDispatch();
    const reload = useSelector((state) => state?.interview?.reload);
    const interview = useSelector((state) => state?.interview?.interviews);

    // console.log('interview', interview)

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
        )
    })

    return (
        <>
            <Breadcrumb
                heading="Schedule"
                breadcrumb={breadcrumb}
            />
            <Core.MyCalender events={modifiedDatainterview || []} type="employer" />
        </>
    );
}

export default ScheduleCandidates;

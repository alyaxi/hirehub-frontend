import React, { useEffect } from 'react';
import { Breadcrumb, } from '../../../../components/core';
import { Core, } from '../../../../components';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { ViewInterviewAdmin } from '../../../../Slices/Admin/InterviewAdminSlice';
import { useParams } from 'react-router-dom';

const breadcrumb = [
    { label: "Dashboard", link: "/admin/dashboard" },
    { label: "Manage Candidates", link: "/admin/manage-candidates" },
    { label: "Schedule" },
];

// const MyEventsList = [
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
// ];

function ScheduleCandidatesAdmin() {

    const reload = useSelector((state) => state?.viewInterviewAdmin?.reload);
    const interview = useSelector((state) => state?.viewInterviewAdmin?.interviewsbyadmin);

    const dispatch = useDispatch();
    const { id: jobId, candidateId } = useParams();

    // Now you can use jobId and candidateId in your component logic
    // console.log('Job ID:', jobId);
    // console.log('Candidate ID:', interview);

    useEffect(() => {
        try {
            if (jobId && candidateId) {
                dispatch((ViewInterviewAdmin({ jobId, candidateId }))).unwrap().then(res => {
                    console.log("Successfully fetched data", res);

                }).catch(err => {
                    console.error(`Error Fetching Data ${err}`);
                });
            }

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

    // console.log("MyEventsList", MyEventsList)

    return (
        <>
            <Breadcrumb
                heading="Schedule"
                breadcrumb={breadcrumb}
            />
            <Core.MyCalender events={modifiedDatainterview} type="admin" />
        </>
    );
}

export default ScheduleCandidatesAdmin;
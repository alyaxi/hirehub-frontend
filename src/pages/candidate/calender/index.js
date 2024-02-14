import React, { useEffect } from 'react';
import { Core, } from '../../../components';
import { useDispatch, useSelector } from 'react-redux';
import { getInterviewsCandidate } from '../../../Slices/Candidates/CandidateInterviewSlice';
import moment from 'moment';



// const MyEventsList = [
//   {
//     title: 'Initiate',
//     start: new Date(2024, 1, 9, 6, 0), // Date and time
//     end: new Date(2024, 1, 9, 5, 0),
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//     type: 'Interview',
//   },
//   {
//     title: 'Break',
//     start: new Date(2024, 1, 9, 11, 0), // Date and time
//     end: new Date(2024, 1, 9, 12, 0),
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//     type: 'Interview',
//   },
//   {
//     title: 'Orientation 1',
//     start: new Date(2024, 1, 9, 1, 0), // Date and time
//     end: new Date(2024, 1, 9, 2, 0),
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//     type: 'Interview',
//   },
//   {
//     title: 'Orientation 2',
//     start: new Date(2024, 1, 9, 7, 0), // Date and time
//     end: new Date(2024, 1, 9, 8, 0),
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//     type: 'Interview',
//   },
//   {
//     title: 'Interview with...',
//     start: new Date(2024, 1, 20, 10, 0), // Date and time
//     end: new Date(2024, 1, 20, 12, 0),
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//     type: 'Interview',
//   },
//   {
//     title: 'Final Interview with...',
//     start: new Date(2024, 1, 25, 10, 0), // Date and time
//     end: new Date(2024, 1, 25, 12, 0),
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//     type: 'Interview',
//   },
//   {
//     title: 'Final Interview with...',
//     start: new Date(2024, 1, 25, 3, 0), // Date and time
//     end: new Date(2024, 1, 25, 5, 0),
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//     type: 'Interview',
//   },
//   {
//     title: 'Offer Letter Request',
//     start: new Date(2024, 1, 25, 6, 0), // Date and time
//     end: new Date(2024, 1, 25, 4, 0),
//     description: '1 Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//     type: 'Interview',
//   },
//   {
//     title: 'Interview with App...',
//     start: new Date(2024, 1, 28, 14, 0),
//     end: new Date(2024, 1, 28, 16, 0),
//     description: 'Reminder: Finish project tasks',
//     type: 'Reminder',
//   },





//   {
//     title: 'Initiate',
//     start: new Date(2024, 2, 9, 6, 0), // Date and time
//     end: new Date(2024, 2, 9, 5, 0),
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//     type: 'Interview',
//   },
//   {
//     title: 'Final Interview',
//     start: new Date(2024, 2, 9, 11, 0), // Date and time
//     end: new Date(2024, 2, 9, 12, 0),
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//     type: 'Interview',
//   },
//   {
//     title: 'Orientation 5',
//     start: new Date(2024, 2, 9, 1, 0), // Date and time
//     end: new Date(2024, 2, 9, 2, 0),
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//     type: 'Interview',
//   },
//   {
//     title: 'Orientation 6',
//     start: new Date(2024, 2, 14, 7, 0), // Date and time
//     end: new Date(2024, 2, 14, 8, 0),
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//     type: 'Interview',
//   },
//   // Add more events as needed
// ];

function CalanderMainCandidate() {
  const dispatch = useDispatch();
  const reload = useSelector((state) => state?.candidateInterview?.reload);
  const interviews = useSelector((state) => state?.candidateInterview?.interviews);


  const modifiedDatainterview = interviews?.map(item => {
    const combinedStringStart = `${item?.scheduledDate} ${item?.startTime}`;
    const obj1 = moment(combinedStringStart, "YYYY-M-D HH:mm");
    const startTime = obj1.toDate();
    const combinedStringEnd = `${item?.scheduledDate} ${item?.endTime}`;
    const obj2 = moment(combinedStringEnd, "YYYY-M-D HH:mm");
    const endTime = obj2.toDate();
    console.log(startTime, endTime, "dateetiemeee")
    return (
   
    { ...item, start: startTime, end: endTime, type: "Interview", title: "Interview Invitation" }
)})

  console.log(interviews, "interviewssssss")

  useEffect(() => {
    try {

        dispatch(getInterviewsCandidate()).unwrap().then(res => {
            console.log("Successfully fetched data", res);

        }).catch(err => {
            console.error(`Error Fetching Data ${err}`);
        });
    } catch (error) {
        console.error(`Error in useEffect of Dashboard ${error}`)

    }


}, [reload])

  return (
    <>
      <Core.MyCalender events={modifiedDatainterview} />
    </>
  );
}

export default CalanderMainCandidate;

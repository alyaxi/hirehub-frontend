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
    // console.log(startTime, endTime, "dateetiemeee")
    return (

      { ...item, start: startTime, end: endTime, type: "Interview", title: "Interview Invitation" }
    )
  })

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
      <Core.MyCalender events={modifiedDatainterview} type="candidate" />
    </>
  );
}

export default CalanderMainCandidate;

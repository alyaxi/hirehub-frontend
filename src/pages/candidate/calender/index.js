import React from 'react';
import { Core, } from '../../../components';

const MyEventsList = [
  {
    title: 'Initiate',
    start: new Date(2024, 0, 9, 6, 0), // Date and time
    end: new Date(2024, 0, 9, 5, 0),
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    type: 'Interview',
  },
  {
    title: 'Break',
    start: new Date(2024, 0, 9, 11, 0), // Date and time
    end: new Date(2024, 0, 9, 12, 0),
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    type: 'Interview',
  },
  {
    title: 'Orientation 1',
    start: new Date(2024, 0, 9, 1, 0), // Date and time
    end: new Date(2024, 0, 9, 2, 0),
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    type: 'Interview',
  },
  {
    title: 'Orientation 2',
    start: new Date(2024, 0, 9, 7, 0), // Date and time
    end: new Date(2024, 0, 9, 8, 0),
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    type: 'Interview',
  },
  {
    title: 'Interview with...',
    start: new Date(2024, 0, 20, 10, 0), // Date and time
    end: new Date(2024, 0, 20, 12, 0),
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    type: 'Interview',
  },
  {
    title: 'Final Interview with...',
    start: new Date(2024, 0, 25, 10, 0), // Date and time
    end: new Date(2024, 0, 25, 12, 0),
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    type: 'Interview',
  },
  {
    title: 'Offer Letter signing',
    start: new Date(2024, 0, 25, 5, 0), // Date and time
    end: new Date(2024, 0, 25, 6, 0),
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    type: 'Interview',
  },
  {
    title: 'Interview with App...',
    start: new Date(2024, 0, 28, 14, 0),
    end: new Date(2024, 0, 28, 16, 0),
    description: 'Reminder: Finish project tasks',
    type: 'Reminder',
  },
  // Add more events as needed
];


function CalanderMainCandidate() {

  return (
    <>
      <Core.MyCalender events={MyEventsList} />
    </>
  );
}

export default CalanderMainCandidate;

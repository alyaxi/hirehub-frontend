import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import '../../../assets/css/calender.css'
import { Modal } from 'antd';
import ScheduleInterviewForm from './ScheduleInterviewForm';
import { Core } from '../..';

const localizer = momentLocalizer(moment);

function MyCalendar({ events }) {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const scheduleInterview = () => {
        console.log("scheduleInterview called")
        setIsModalOpen(true);
    }

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Modal title={'Upload Job Description'} width={715} open={isModalOpen} onCancel={handleCancel} footer={[]} >
                <ScheduleInterviewForm setIsModalOpen={setIsModalOpen} />
            </Modal>
            <div className='calender max-w-[1100px] mx-auto'>

                <div className='flex justify-end pb-3'>
                    <Core.Button onClick={scheduleInterview}>Schedule Interview</Core.Button>
                </div>

                <Calendar
                    localizer={localizer}
                    events={events}
                    startAccessor="start"
                    endAccessor="end"
                    style={{ height: 720 }}
                />
            </div>
        </>
    )
}
export default MyCalendar;

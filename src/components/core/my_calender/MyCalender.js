import React, { useCallback, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import '../../../assets/css/calender.css'
import { Modal } from 'antd';
import ScheduleInterviewForm from './ScheduleInterviewForm';
import { Core } from '../..';
import Icon from '../../icon';


const localizer = momentLocalizer(moment);

function MyCalendar({ events }) {
    console.log('events',events)
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date())
    


    
    



    const scheduleInterview = () => {
        setIsModalOpen(true);
    }

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const onNavigate = useCallback((newDate) => setSelectedDate(newDate), [selectedDate])

    const today = new Date();
    const eventsToday = events.filter(event => {
        const startDate = moment(event.start);
        return startDate.isSame(today, 'day');
    });

    return (
        <>
            <Modal title={'Upload Job Description'} width={715} open={isModalOpen} onCancel={handleCancel} footer={[]} >
                <ScheduleInterviewForm setIsModalOpen={setIsModalOpen} />
            </Modal>
            <div className='calender max-w-[1300px] mx-auto'>

                <div className='flex justify-end pb-3'>
                    <Core.Button onClick={scheduleInterview}>Schedule Interview</Core.Button>
                </div>

                <Core.Card className='flex justify-between gap-x-4 p-4'>
                    <div className={"max-w-[300px]"}>

                        <Core.MyCalenderSmForCalender
                            selectedDate={selectedDate}
                            setSelectedDate={setSelectedDate}
                            events={events}
                        />

                        <div>
                            {eventsToday?.length &&
                                <>
                                    <div className='flex justify-start gap-x-1 mt-5'>
                                        <Icon name="Calender2" size={24} />
                                        <h3 className='text-black text-[24px] leading-[30px]'>Today</h3>
                                    </div>

                                    <div className='flex justify-between'>
                                        <div className='flex flex-col gap-y-3 w-full mt-2'>
                                            {eventsToday?.map((event, index) => {
                                                return (
                                                    <div key={event.title + index} className='event flex justify-between w-full'>
                                                        <div className='rbc-event-content'>
                                                            {event?.title}
                                                        </div>
                                                        <span className="text-[10px] leading-[12px]">{moment(event?.start).format('hh:mm A')}</span>
                                                    </div>
                                                )
                                            })}
                                        </div>

                                    </div>
                                </>
                            }
                        </div>

                    </div>

                    <Calendar
                        localizer={localizer}
                        events={events}
                        defaultView='day'
                        startAccessor="start"
                        endAccessor="end"
                        style={{ height: 720 }}
                        date={selectedDate}
                        onNavigate={onNavigate}
                    />

                </Core.Card>

            </div>
        </>
    )
}
export default MyCalendar;

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

function MyCalendar({ events, type }) {
    console.log('events', events)

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date())
    const [eventToEdit, setEventToEdit] = useState();

    // console.log(eventToEdit, "eventttttttttttt")

    const scheduleInterview = () => {
        // console.log('99eventToEdit my c', eventToEdit)
        setEventToEdit({});
        setIsModalOpen(true);
    }

    // console.log('99eventToEdit comm', eventToEdit)
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const onNavigate = useCallback((newDate) => setSelectedDate(newDate), [selectedDate])

    const today = new Date();
    const eventsToday = events?.filter(event => {
        const startDate = moment(event.start);
        return startDate.isSame(today, 'day');
    });

    const handleEventClick = (event) => {
        // console.log("handleEventClick called")
        setIsModalOpen(true);
        setEventToEdit(event);
    };

    return (
        <>
            <Modal title={(type === "candidate" || type === "admin") ? "Invitation" : 'Upload Job Description'} width={715} open={isModalOpen} onCancel={handleCancel} footer={[]} >
                <ScheduleInterviewForm setIsModalOpen={setIsModalOpen} type={type} handleCancel={handleCancel} eventToEdit={eventToEdit} />
            </Modal>
            <div className='calender max-w-[1300px] mx-auto'>

                {(type !== "candidate" && type !== "admin") &&
                    <div className='flex justify-end pb-3'>
                        <Core.Button onClick={scheduleInterview}>Schedule Interview</Core.Button>
                    </div>
                }
                <Core.Card className='flex justify-between gap-x-4 p-4'>
                    <div className={"max-w-[300px]"}>

                        <Core.MyCalenderSmForCalender
                            selectedDate={selectedDate}
                            setSelectedDate={setSelectedDate}
                            events={events}
                        />

                        <div>
                            {eventsToday?.length !== 0 &&
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
                        onSelectEvent={(type === 'candidate' || type === 'employer') ? event => handleEventClick(event) : undefined}
                        eventPropGetter={(event, start, end, isSelected) => {
                            let backgroundColor;
                            let border;
                            if (event.approvalInvite === 'Pending') {
                                backgroundColor = '#3174ad';
                                border = "0";
                            } else if (event.approvalInvite === 'Declined') {
                                backgroundColor = '#ff6c6c';
                                border = "0";
                            } else if (event.approvalInvite === 'Accepted') {
                                backgroundColor = '#2c9657';
                                border = "0";
                            }
                            return { style: { backgroundColor, border } };
                        }}
                    />
                </Core.Card>
            </div>
        </>
    )
}
export default MyCalendar;









// import React, { useCallback, useState } from 'react';
// import { Calendar, momentLocalizer } from 'react-big-calendar';
// import moment from 'moment';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
// import '../../../assets/css/calender.css'
// import { Modal } from 'antd';
// import ScheduleInterviewForm from './ScheduleInterviewForm';
// import { Core } from '../..';
// import Icon from '../../icon';

// const localizer = momentLocalizer(moment);

// function MyCalendar({ events, type }) {
//     console.log('events', events)

//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [selectedDate, setSelectedDate] = useState(new Date())
//     const [eventToEdit, setEventToEdit] = useState();

//     console.log(eventToEdit, "eventttttttttttt")

//     const scheduleInterview = () => {
//         setIsModalOpen(true);
//     }

//     const handleCancel = () => {
//         setIsModalOpen(false);
//     };

//     const onNavigate = useCallback((newDate) => setSelectedDate(newDate), [selectedDate])

//     const today = new Date();
//     const eventsToday = events.filter(event => {
//         const startDate = moment(event.start);
//         return startDate.isSame(today, 'day');
//     });

//     const handleEventClick = (event) => {
//         setIsModalOpen(true);
//         setEventToEdit(event);
//     };

//     return (
//         <>
//             <Modal title={type === "candidate" ? "Invitation" : 'Upload Job Description'} width={715} open={isModalOpen} onCancel={handleCancel} footer={[]} >
//                 <ScheduleInterviewForm setIsModalOpen={setIsModalOpen} type={type} handleCancel={handleCancel} eventToEdit={eventToEdit} />
//             </Modal>
//             <div className='calender max-w-[1300px] mx-auto'>

//                 {type !== "candidate" &&
//                     <div className='flex justify-end pb-3'>
//                         <Core.Button onClick={scheduleInterview}>Schedule Interview</Core.Button>
//                     </div>
//                 }
//                 <Core.Card className='flex justify-between gap-x-4 p-4'>
//                     <div className={"max-w-[300px]"}>

//                         <Core.MyCalenderSmForCalender
//                             selectedDate={selectedDate}
//                             setSelectedDate={setSelectedDate}
//                             events={events}
//                         />

//                         <div>
//                             {eventsToday?.length &&
//                                 <>
//                                     <div className='flex justify-start gap-x-1 mt-5'>
//                                         <Icon name="Calender2" size={24} />
//                                         <h3 className='text-black text-[24px] leading-[30px]'>Today</h3>
//                                     </div>

//                                     <div className='flex justify-between'>
//                                         <div className='flex flex-col gap-y-3 w-full mt-2'>
//                                             {eventsToday?.map((event, index) => {
//                                                 return (
//                                                     <div key={event.title + index} className='event flex justify-between w-full'>
//                                                         <div className='rbc-event-content'>
//                                                             {event?.title}
//                                                         </div>
//                                                         <span className="text-[10px] leading-[12px]">{moment(event?.start).format('hh:mm A')}</span>
//                                                     </div>
//                                                 )
//                                             })}
//                                         </div>

//                                     </div>
//                                 </>
//                             }
//                         </div>

//                     </div>

//                     <Calendar
//                         localizer={localizer}
//                         events={events}
//                         defaultView='day'
//                         startAccessor="start"
//                         endAccessor="end"
//                         style={{ height: 720 }}
//                         date={selectedDate}
//                         onNavigate={onNavigate}
//                         onSelectEvent={type === 'candidate' ? event => handleEventClick(event) : undefined}
//                         eventPropGetter={(event, start, end, isSelected) => {
//                             let backgroundColor;
//                             let border;
//                             if (event.approvalInvite === 'Pending') {
//                                 backgroundColor = '#3174ad';
//                                 border = "0";
//                             } else if (event.approvalInvite === 'Declined') {
//                                 backgroundColor = '#ff6c6c';
//                                 border = "0";
//                             } else if (event.approvalInvite === 'Accepted') {
//                                 backgroundColor = '#2c9657';
//                                 border = "0";
//                             }
//                             return { style: { backgroundColor, border } };
//                         }}
//                     />
//                 </Core.Card>
//             </div>
//         </>
//     )
// }
// export default MyCalendar;

import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import '../../../assets/css/calender-sm.css'

const localizer = momentLocalizer(moment);

function MyCalendar({ events }) {
    return (
        <div className='calender'>
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 720 }}
            />
        </div>
    )
}
export default MyCalendar;

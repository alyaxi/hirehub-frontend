import React from 'react';
import Calendar from 'react-calendar';
import '../../../assets/css/calender-sm.css'
import moment from 'moment';

function MyCalenderSmForCalender({ selectedDate, setSelectedDate, events }) {
    // console.log(events, "eventssssssssss")

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const _events = events?.reduce((dates, event) => {
        const startDate = moment(event.start)?.startOf('day');
        if (!dates.find(date => date.isSame(startDate, 'day'))) {
            dates.push(startDate);
        }
        return dates;
    }, []);

    const tileContent = ({ date, view }) => {
        if (view === 'month') {
            const isEventDate = _events?.some(eventDate => {
                return moment(eventDate)?.isSame(date, 'day');
            });
            if (isEventDate) {
                return <div className="event-marker"></div>;
            }
        }
    };

    return (
        <div className='calender calender-sm for-big-calender mt-[25px] min-h-[250px]'>
            <Calendar onChange={handleDateChange} value={selectedDate} tileContent={tileContent} />
        </div>
    )
}
export default MyCalenderSmForCalender;

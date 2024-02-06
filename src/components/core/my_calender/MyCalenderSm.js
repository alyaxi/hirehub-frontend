import React, { useState } from 'react';
import Calendar from 'react-calendar';

import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
// import '../../../assets/css/calender-sm.css'

// const localizer = momentLocalizer(moment);

// type ValuePiece = Date | null;

// type Value = ValuePiece | [ValuePiece, ValuePiece];

function MyCalenderSm({ events }) {
    const [value, onChange] = useState(new Date());
    return (
        <div className='calender calender-sm mt-[25px]'>
            <Calendar onChange={onChange} value={value} />
        </div>
    )
}
export default MyCalenderSm;

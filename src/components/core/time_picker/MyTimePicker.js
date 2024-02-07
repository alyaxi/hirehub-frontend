import React from 'react';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { TimePicker } from 'antd';

function MyTimePicker({ setTime }) {
    
    dayjs.extend(customParseFormat);
    const convertTime = (timeString) => {
        const time = dayjs(timeString, 'HH:mm:ss');
        return time.format('hh:mm A');
    };

    const onChange = (time, timeString) => {
        console.log('timeString', convertTime(timeString));
        setTime(convertTime(timeString))
        // console.log('time', time);
    };

    return (
        <TimePicker onChange={onChange} defaultOpenValue={dayjs('00:00:00', 'HH:mm:ss')} className='cursor-pointer' />
    )
}
export default MyTimePicker;
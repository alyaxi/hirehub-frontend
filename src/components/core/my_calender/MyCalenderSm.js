import React from 'react';
import Calendar from 'react-calendar';
import { Core } from '../..';
import Icon from '../../icon';
// import '../../../assets/css/calender-sm.css'

function MyCalenderSm({ selectedDate, setSelectedDate, selectedTime, setSelectedTime }) {

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <div className='calender calender-sm mt-[25px]'>
            <Calendar onChange={handleDateChange} value={selectedDate} />
            {selectedDate &&
                <>
                    <div className='flex justify-between items-center w-full border-t-[1px] py-3 mt-2'>
                        {!selectedTime ?
                            <Core.MyTimePicker setTime={setSelectedTime} />
                            :
                            <>
                                <div className='flex justify-start items-center gap-x-3 text-purple-2 font-[500] lowercase leading-[31px]'>
                                    <Icon name="Clock" size={18} />
                                    {selectedTime}
                                </div>
                                <span onClick={() => setSelectedTime(null)} className='text-purple-2 cursor-pointer'>
                                    <Icon name="Cross" size={10} />
                                </span>
                            </>
                        }
                    </div>
                </>
            }
        </div>
    )
}
export default MyCalenderSm;

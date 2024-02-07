import React, { useEffect, useState } from 'react';
import { Modal } from 'antd';
import { Core } from '..';

function PopupModalCalender({ setIsModalOpen, isModalOpen, }) {

    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const scheduleEmail = () => {
        if (selectedDate !== null && selectedTime !== null) {
            console.log("selectedDate", selectedDate)
            console.log("selectedTime", selectedTime)
        } else {
            console.log("Time is not selected")
        }
    }

    return (
        <Modal
            width={395}
            open={isModalOpen}
            onCancel={handleCancel}
            footer={[]}
        >
            <Core.MyCalenderSm
                selectedDate={selectedDate}
                selectedTime={selectedTime}
                setSelectedDate={setSelectedDate}
                setSelectedTime={setSelectedTime}
            />
            <div className='flex justify-center gap-x-3 pt-4 border-t-[1px] pb-2'>
                <Core.Button
                    onClick={scheduleEmail} type="narrow" submit>Schedule</Core.Button>
                <Core.Button type="narrow" color="white" onClick={handleCancel}>Cancel</Core.Button>
            </div>
        </Modal>
    );
};

export default PopupModalCalender;
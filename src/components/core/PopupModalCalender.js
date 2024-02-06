import React, { useState } from 'react';
import { Modal } from 'antd';
import { Core } from '..';

function PopupModalCalender({ setIsModalOpen, isModalOpen, }) {

    // const handleOk = () => {
    //     setIsModalOpen(false);
    // };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <Modal
            // title={_title}
            width={385}
            open={isModalOpen}
            // onOk={handleOk}
            onCancel={handleCancel}
            footer={[]} 
        >
            
            <Core.MyCalenderSm />


            <div className='flex justify-center gap-x-3 pt-4 border-t-[1px]'>
                <Core.Button
                    // onClick={handleNext}
                    type="narrow" submit>Schedule</Core.Button>
                <Core.Button
                    // onClick={handleBack} 
                    type="narrow" color="white" onClick={handleCancel}>Cancel</Core.Button>
            </div>
        </Modal>
    );
};

export default PopupModalCalender;
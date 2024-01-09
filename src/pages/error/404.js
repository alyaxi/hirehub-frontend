import React from 'react';
import { AuthLayout, Core } from '../../components';
import image from "../../assets/images/illustrations/404.svg";
import { Row, Col } from 'antd';

function FourZeroFour() {
    return (
        <div className="flex justify-center items-center w-full h-screen bg-gradient-to-r from-purple-2 to-purple-3">
            <div className='flex flex-col justify-center items-center max-w-[500px] min-h-[50vh] rounded-[10px] px-8 pb-8'>
                <img src={image} className='w-[75%]' alt="404 Image" />
                <h6 className="text-white text-[18px] text-center font-medium">
                    Oops! The page you're looking for seems does not exist!
                </h6>
            </div>
        </div>
    )
}

export default FourZeroFour
import React from 'react';
import { Core } from '../../components';
import image from "../../assets/images/illustrations/404.svg";
import { NavLink } from 'react-router-dom';

function FourZeroFour() {
    return (
        <div className="flex flex-col justify-center items-center w-full h-screen bg-gradient-to-r from-purple-2 to-purple-3">
            <div className='flex flex-col justify-center items-center max-w-[500px] min-h-[50vh] rounded-[10px] px-8 pb-8'>
                <img src={image} className='w-[75%]' alt="404 Image" />
                <h6 className="text-white text-[18px] text-center font-medium">
                    Oops! The page you're looking for seems does not exist!
                </h6>
            </div>
            <NavLink to="/">
                <Core.Button type={"narrow"} color="white">
                    Back to Home
                </Core.Button>
            </NavLink>
        </div >
    )
}

export default FourZeroFour
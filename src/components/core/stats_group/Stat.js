import React from 'react';
import Icon from '../../icon';
import { NavLink } from 'react-router-dom';

function Stat({
    data, index
}) {

    let bgColor;
    switch (index) {
        case 0:
            bgColor = "bg-orange-3";
            break;
        case 1:
            bgColor = "bg-blue-3";
            break;
        case 2:
            bgColor = "bg-yellow-3";
            break;
        case 3:
            bgColor = "bg-light-green-3";
            break;
        case 4:
            bgColor = "bg-pink-3";
            break;
        case 5:
            bgColor = "bg-orange-3";
            break;
        case 6:
            bgColor = "bg-blue-3";
            break;
        case 7:
            bgColor = "bg-yellow-3";
            break;
        default:
            bgColor = "bg-gray-3";
            break;
    }

    let circleColor;
    switch (index) {
        case 0:
            circleColor = "bg-orange-2";
            break;
        case 1:
            circleColor = "bg-blue-2";
            break;
        case 2:
            circleColor = "bg-yellow-2";
            break;
        case 3:
            circleColor = "bg-light-green-2";
            break;
        case 4:
            circleColor = "bg-pink-2";
            break;
        case 5:
            circleColor = "bg-orange-2";
            break;
        case 6:
            circleColor = "bg-blue-2";
            break;
        case 7:
            circleColor = "bg-yellow-2";
            break;
        default:
            circleColor = "bg-gray-2";
            break;
    }

    let iconColor;
    switch (index) {
        case 0:
            iconColor = "text-orange-1";
            break;
        case 1:
            iconColor = "text-blue-1";
            break;
        case 2:
            iconColor = "text-yellow-1";
            break;
        case 3:
            iconColor = "text-light-green-1";
            break;
        case 4:
            iconColor = "text-pink-1";
            break;
        case 5:
            iconColor = "text-orange-1";
            break;
        case 6:
            iconColor = "text-blue-1";
            break;
        case 7:
            iconColor = "text-yellow-1";
            break;

        default:
            iconColor = "text-gray-1";
            break;
    }

    return (
        <a className='contents'>
            <NavLink to={data?.link} className={"contents"}>
                <div className={`flex justify-between items-center w-full sm:max-w-[49%] xl:max-w-[32%] gap-x-5 rounded-[8px] ${bgColor} p-3 lg:p-5`}>
                    <div className='flex flex-col gap-y-5'>
                        <span className='text-gray-6 text-[16px] leading-[24px] font-medium whitespace-nowrap'>{data?.title}</span>
                        <span className='text-black-2 text-[30px] md:text-[34px] leading-[28px] md: leading-[32px] font-medium'>{data?.count}</span>
                    </div>
                    <div className={`flex justify-center items-center rounded-[500px] ${circleColor} p-1 md:p-5`}>
                        <span className={`${iconColor} scale-50 md:scale-100`}>
                            <Icon name={data?.iconName}
                                size={"56px"}
                            />
                        </span>
                    </div>
                </div>
            </NavLink>
        </a>
    );
}

export default Stat;

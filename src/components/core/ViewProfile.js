
import React from 'react';
import { Core } from '..';

function ViewProfile({ data }) {
    console.log("data3", data)
    return (
        <Core.Card className={`py-[30px] px-[40px]`}>
            <h5 className='text-black-2 text-[24px] leading-[32px] font-medium mb-4'>View Profile</h5>
            <div className="mb-8">
                <h6 className={`block text-[14px] font-medium text-gray-2 tracking-wide mb-1 capitalize`}>
                    Your company's name
                </h6>
                <span className={`block text-[14px] font-medium text-gray-8 tracking-wide mb-2 capitalize`}>
                    {data?.companyName}
                </span>
            </div>
            <div className="mb-8">
                <h6 className={`block text-[14px] font-medium text-gray-2 tracking-wide mb-1 capitalize`}>
                    Number of Employees
                </h6>
                <span className={`block text-[14px] font-medium text-gray-8 tracking-wide mb-2 capitalize`}>
                    {data?.noOfEmployes}
                </span>
            </div>
            <div className="mb-8">
                <h6 className={`block text-[14px] font-medium text-gray-2 tracking-wide mb-1 capitalize`}>
                    Logo
                </h6>
                <span className={`block mb-2 capitalize`}>
                    {data?.logo ?
                        <img src={data?.logo} className='max-w-[90px]' alt="Company Logo" width={150} height={150} />
                        :
                        <h2 className='w-[170px] text-gray-2 text-[20px] text-center rounded-[10px] opacity-70 bg-gray-5 px-1 py-3'>No Logo</h2>
                    }
                </span>
            </div>
            <div className="mb-8">
                <h6 className={`block text-[14px] font-medium text-gray-2 tracking-wide mb-1 capitalize`}>
                    Welcome Video
                </h6>
                <div className={`block max-w-[300px] rounded-[10px] overflow-hidden mb-2`}>
                    {data?.welcomeVideo ?
                        <Core.VideoPlayer src={data?.welcomeVideo} />
                        : 
                        <h2 className='w-[280px] text-gray-2 text-[20px] text-center rounded-[10px] opacity-70 bg-gray-5 px-2 py-12'>No Video</h2>
                    }                   
                    {/* <img src={data?.welcomeVideo} alt="Welcome Video" /> */}
                </div>
            </div>
            <div className="mb-8">
                <h6 className={`block text-[14px] font-medium text-gray-2 tracking-wide mb-1 capitalize`}>
                    Your Phone Number
                </h6>
                <span className={`block text-[14px] font-medium text-gray-8 tracking-wide mb-2 capitalize`}>
                    {data?.phoneNo}
                </span>
            </div>
            <div className="mb-8">
                <h6 className={`block text-[14px] font-medium text-gray-2 tracking-wide mb-1 capitalize`}>
                    Your company's industry
                </h6>
                <span className={`block text-[14px] font-medium text-gray-8 tracking-wide mb-2 capitalize`}>
                    {data?.companyIndustry}
                </span>
            </div>
            <div className="mb-8">
                <h6 className={`block text-[14px] font-medium text-gray-2 tracking-wide mb-1 capitalize`}>
                    Company Description
                </h6>
                <span className={`block text-[14px] font-medium text-gray-8 tracking-wide mb-2 capitalize`}>
                    {data?.description}
                </span>
            </div>
        </Core.Card>
    )
}

export default ViewProfile
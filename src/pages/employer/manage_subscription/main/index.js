import React, { useEffect } from 'react';
import { Breadcrumb } from '../../../../components/core';
import { getAppliedJobByCandidate } from '../../../../Slices/Employer/ManageCandidate';
import { useDispatch } from 'react-redux'; 

const breadcrumb = [
    { label: "Dashboard", link: "/employer/dashboard" },
    { label: "Manage Subscription" },
];

function MainSubscriptionEmployer() { 

    const dispatch = useDispatch() 

    useEffect(() => {
        try {

            dispatch(getAppliedJobByCandidate()).unwrap().then(res => {
                // console.log("Successfully fetched data", res);

            }).catch(err => {
                console.error(`Error Fetching Data ${err}`);
            });
        } catch (error) {
            console.error(`Error in useEffect of Dashboard ${error}`)

        }


    }, [])
 
    return (
        <>
            <Breadcrumb
                heading="Manage Subscription"
                breadcrumb={breadcrumb}
            />
            <div className='w-full h-[550px] flex justify-center items-center'>
                <div className='flex flex-col justify-center items-center'>
                    <span className='text-gray-300 text-[30px]'>Coming soon...</span>
                    <span className='text-gray-300 text-[15px] tracking-[1.5px]'>This page will be developed soon</span>
                </div>
            </div> 
        </>
    );
}

export default MainSubscriptionEmployer;

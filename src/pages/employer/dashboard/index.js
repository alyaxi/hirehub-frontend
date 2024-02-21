import React, { useEffect } from 'react';
import { StatsGroup } from '../../../components/core';
import { getEmployerById } from '../../../Slices/Employer/EmployerSlice';
import { useDispatch, useSelector } from 'react-redux';


function EmployerDashboard() {
    const reload = useSelector((state) => state?.employer?.reload);
    const dispatch = useDispatch();

    const statsData = [
        {
            title: "Employers",
            count: "464",
            iconName: "People",
        },
        {
            title: "Candidates",
            count: "235",
            iconName: "Users",
        },
        {
            title: "Top Jobs Published",
            count: "2564",
            iconName: "BriefcaseTick",
            paidJob: "1230",
            freeJob: "1334",
        },
        {
            title: "Employers",
            count: "464",
            iconName: "People",
        },
        {
            title: "Candidates",
            count: "235",
            iconName: "Users",
        },
        {
            title: "Top Jobs Published",
            count: "2564",
            iconName: "BriefcaseTick",
            paidJob: "1230",
            freeJob: "1334",
        },
    ];

    
    // console.log("data3", viewprofile)

    useEffect(() => {
        try {
            dispatch(getEmployerById()).unwrap().then(res => {
                console.log("DATAAAAAAAAAAAAAAAAA", res);

            }).catch(err => {
                console.error(`Error Fetching Data ${err}`);
            });
        } catch (error) {
            console.error(`Error in useEffect of Dashboard ${error}`)

        }
    }, [reload])

    return (
        <>
            <StatsGroup data={statsData} />
        </>
    );
}

export default EmployerDashboard;

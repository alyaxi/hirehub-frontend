import React from 'react';
import { StatsGroup } from '../../../components/core';

function EmployerDashboard() {
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

    return (
        <>
            <StatsGroup data={statsData} />
        </>
    );
}

export default EmployerDashboard;

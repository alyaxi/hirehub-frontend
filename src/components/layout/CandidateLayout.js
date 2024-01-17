import React, { useState } from 'react';
import { Header, Sidebar } from '..';
import { Outlet } from 'react-router-dom';
import Icon from '../icon';

const menu = [ 
    {
        icon: <Icon name="App" />,
        path: "manage-profile",
        name: "Manage Profile",
    },
    {
        icon: <Icon name="Briefcase" />,
        path: "jobs",
        name: "Jobs",
    },
    {
        icon: <Icon name="Note" />,
        path: "job-history",
        name: "Job History",
    },
    {
        icon: <Icon name="Bell1" />,
        path: "alerts",
        name: "Alerts",
    },
    {
        icon: <Icon name="Chat1" size="19" />,
        path: "hat",
        name: "Chat",
    },
    {
        icon: <Icon name="Calender2" />,
        path: "scheduling",
        name: "Scheduling",
    },
     
]

function CandidateLayout() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex h-scree n">
            <Sidebar
                isSidebarOpen={isSidebarOpen}
                toggleSidebar={toggleSidebar}
                menu={menu}
            />
            <div className="flex flex-col flex-1">
                <Header toggleSidebar={toggleSidebar} />
                <main className="overflow-y-auto overflow-x-hidden flex-1 bg-gray-9 p-6">
                    <Outlet />
                </main>
            </div>
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 z-30"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}
        </div>
    )
}

export default CandidateLayout
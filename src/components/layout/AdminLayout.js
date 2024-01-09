import React, { useState } from 'react';
import { Header, Sidebar } from '../../components';
import { Outlet } from 'react-router-dom';
import Icon from '../icon';

const menu = [
    {
        icon: <Icon name="App" />,
        path: "dashboard",
        name: "Dashboard",
    },
    {
        icon: <Icon name="User" />,
        path: "manage-employers",
        name: "Manage Employers",
    },
    {
        icon: <Icon name="Users" />,
        path: "manage-candidates",
        name: "Manage Candidates",
    },
    {
        icon: <Icon name="Briefcase" />,
        path: "manage-jobs",
        name: "Manage Jobs",
    },
    {
        icon: <Icon name="Wallet" />,
        path: "manage-payments",
        name: "Manage Payments",
    },
    {
        icon: <Icon name="SmsNotification" />,
        path: "manage-subscription-packages",
        name: "Manage Subscription Packages",
    },
    {
        icon: <Icon name="Bell1" />,
        path: "manage-notification",
        name: "Manage Notification",
    },
    {
        icon: <Icon name="Document1" />,
        path: "manage-terms-and-conditions",
        name: "Manage Terms and Conditions",
    },
    {
        icon: <Icon name="Keyboard" />,
        path: "manage-faq",
        name: "Manage FAQ",
    },
    {
        icon: <Icon name="Envelope" />,
        path: "email-templates",
        name: "Email Templates",
    },
    {
        icon: <Icon name="Setting1" />,
        path: "manage-platform-setting",
        name: "Manage Platform setting",
    },
    {
        icon: <Icon name="Book" />,
        path: "manage-blogs",
        name: "Manage Blogs",
    },
]

function AdminLayout() {
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

export default AdminLayout
import React, { useEffect, useState } from 'react'; 
import { Breadcrumb,   } from '../../../../components/core'; 
 
const breadcrumb = [
    { label: "Dashboard", link: "/admin/dashboard" },
    { label: "Notification" },
];

function NotificationEmployer() {
    return (
        <>
            <Breadcrumb
                heading="Notification"
                breadcrumb={breadcrumb}
            />
        </>
    );
}

export default NotificationEmployer;

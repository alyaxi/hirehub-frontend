import React  from 'react'; 
import { Breadcrumb,   } from '../../../../components/core'; 
 
const breadcrumb = [
    { label: "Dashboard", link: "/employer/dashboard" },
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

import React, { useEffect, useState } from 'react'; 
import { Breadcrumb,   } from '../../../../components/core'; 
 
const breadcrumb = [
    { label: "Dashboard", link: "/admin/dashboard" },
    { label: "Chat" },
];

function ChatEmployer() {
    return (
        <>
            <Breadcrumb
                heading="Chat"
                breadcrumb={breadcrumb}
            />
        </>
    );
}

export default ChatEmployer;

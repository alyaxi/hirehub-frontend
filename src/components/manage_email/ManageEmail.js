import React, { useState } from 'react';
import { Tabs } from 'antd';
import TabPane from 'antd/es/tabs/TabPane';
import Inbox from './Inbox';
import PersonalizedEmail from './PersonalizedEmail';
import ScheduledEmails from './ScheduledEmails';

const items = [
    {
        key: '1',
        label: 'INBOX',
        // content: 'Content of Tab Pane 1',
    },
    {
        key: '2',
        label: 'PERSONALIZED EMAILS',
        // content: 'Content of Tab Pane 2',
    },
    {
        key: '3',
        label: 'SCHEDULED EMAILS',
        // content: 'Content of Tab Pane 3',
    },
];
function ManageEmail({
}) {

    const onChange = (key) => {
        console.log(key);
    };
    return (
        <>
            <Tabs defaultActiveKey="1" onChange={onChange} className='fle x justify-ce nter items-cent er w-full text-gray-6 text-[13px]'>

                <TabPane tab={'INBOX'} key={1}>
                    <Inbox />
                </TabPane>
                <TabPane tab={'PERSONALIZED EMAILS'} key={2}>
                    <PersonalizedEmail />
                </TabPane>
                <TabPane tab={'EDULED EMAILS'} key={3}>
                    <ScheduledEmails />
                </TabPane>

                {/* {items.map(item => (
                    <TabPane tab={item.label} key={item.key}>
                    dfsdffsd
                    </TabPane>
                ))} */}
            </Tabs>
        </>
    );
}

export default ManageEmail


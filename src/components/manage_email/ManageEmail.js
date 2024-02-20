import React from 'react';
import { Tabs } from 'antd';
import TabPane from 'antd/es/tabs/TabPane';
import Inbox from './Inbox';
import PersonalizedEmail from './PersonalizedEmail';
import ScheduledEmails from './ScheduledEmails';
import { Core } from '..';

function ManageEmail({
}) {

    const onChange = (key) => {
        console.log(key);
    };

    // const tabsStyle = {
    //     itemActiveColor: '#000000', // Use the itemActiveColor token here
    // };

    return (
        <Core.Card>
            <Tabs defaultActiveKey="1"
                onChange={onChange}
                className='w-full text-gray-6 text-[13px]'
            // style={tabsStyle}
            // indicator={{ size: (origin) => origin - 40, align: 44 }}
            >
                <TabPane tab={'INBOX'} key={1} >
                    <Inbox />
                </TabPane>
                <TabPane tab={'PERSONALIZED EMAILS'} key={2}>
                    <PersonalizedEmail />
                </TabPane>
                <TabPane tab={'SCHEDULED EMAILS'} key={3}>
                    <ScheduledEmails />
                </TabPane>
            </Tabs>
        </Core.Card>
    );
}

export default ManageEmail


import React  from 'react';

const emails = [
    {
        key: '1',
        sender: 'Theresa Webb',
        mail: {
            subject: "Build prototypes without code",
            text: 'Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.',
        },
        dateAndTime: "10:41 PM",

    },
    {
        key: '2',
        sender: 'Devon Lane',
        mail: {
            subject: "Hiya",
            text: 'Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ',
        },
        dateAndTime: "11:59 AM",

    },
    {
        key: '3',
        sender: 'Leslie Alexander',
        mail: {
            subject: "Congratulation!",
            text: 'Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.',
        },
        dateAndTime: "5:49 AM",

    },
    {
        key: '4',
        sender: 'Theresa Webb',
        mail: {
            subject: "Build prototypes without code",
            text: 'Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.',
        },
        dateAndTime: "Apr 25",

    },
    {
        key: '5',
        sender: 'Devon Lane ',
        mail: {
            subject: "Hiya",
            text: 'Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. ',
        },
        dateAndTime: "Apr 21",

    },
    {
        key: '6',
        sender: 'Leslie Alexander',
        mail: {
            subject: "Congratulation!",
            text: 'Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.',
        },
        dateAndTime: "Mar 3",

    },
    {
        key: '7',
        sender: 'Leslie Alexander',
        mail: {
            subject: "Congratulation!",
            text: 'Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.',
        },
        dateAndTime: "Mar 1",

    },
    {
        key: '8',
        sender: 'Theresa Lane',
        mail: {
            subject: "Build prototypes without code",
            text: 'Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.',
        },
        dateAndTime: "Dec 20",

    },
];
function Inbox({
}) {


    return (
        <>
            <ul>
                {emails.map(item => (
                    <li className='whitespace-nowrap border-b-[1px] border-gray-200 py-3'>
                        <div className='flex justify-between'>
                            <div className='flex justify-start'>
                                <strong className='min-w-[160px] max-w-[160px] overflow-hidden pr-8'>{item?.sender}</strong>
                                <div className='flex justify-start gap-x-1 pl-3'>
                                    <strong>{item?.mail?.subject}</strong>
                                    -
                                    {item?.mail?.text}
                                </div>
                            </div>
                            <span className='min-w-[90px] max-w-[90px] overflow-hidden text-right pl-8'>{item?.dateAndTime}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Inbox


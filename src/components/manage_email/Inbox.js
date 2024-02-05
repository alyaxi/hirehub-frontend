import React, { useState } from 'react';
import Icon from '../icon';

const emails = [
    {
        _id: '1',
        sender: 'Theresa Webb',
        emailAddress: 'onb@gmail.com',
        mail: {
            subject: "Build prototypes without code",
            text: `<p>Dear, Candidate,</p><p><br></p><p>Office on saturday 5th jan for interview.</p><p><br></p><ol><li class="ql-align-justify"><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. </li><li class="ql-align-justify">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </li><li class="ql-align-justify">when an unknown printer took a galley of type and scrambled</li><li class="ql-align-justify">it to make a type specimen book. It has survived not only five</li><li class="ql-align-justify">centuries, but also the leap into electronic typesetting, remaining essentially </li><li class="ql-align-justify">unchanged. It was popularised</li></ol><p class="ql-align-justify"><br></p><p class="ql-align-justify"><span style="color: rgb(0, 0, 0);">It is a long established fact that a </span><strong style="color: rgb(0, 0, 0);">reader will</strong><span style="color: rgb(0, 0, 0);"> be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here</span></p>`,
        },
        dateAndTime: "10:41 PM",
        isRead: false,
    },
    {
        _id: '2',
        sender: 'Devon Lane',
        emailAddress: 'syc@gmail.com',
        mail: {
            subject: "Hiya",
            text: `<p>Dear, Candidate,</p><p><br></p><p>Lorem come to office on saturday 5th jan for interview.</p><p><br></p><ol><li class="ql-align-justify"><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. </li><li class="ql-align-justify">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </li><li class="ql-align-justify">when an unknown printer took a galley of type and scrambled</li><li class="ql-align-justify">it to make a type specimen book. It has survived not only five</li><li class="ql-align-justify">centuries, but also the leap into electronic typesetting, remaining essentially </li><li class="ql-align-justify">unchanged. It was popularised</li></ol><p class="ql-align-justify"><br></p><p class="ql-align-justify"><span style="color: rgb(0, 0, 0);">It is a long established fact that a </span><strong style="color: rgb(0, 0, 0);">reader will</strong><span style="color: rgb(0, 0, 0);"> be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here</span></p>`,
        },
        dateAndTime: "11:59 AM",
        isRead: false,
    },
    {
        _id: '3',
        sender: 'Leslie Alexander',
        emailAddress: 'abc@gmail.com',
        mail: {
            subject: "Congratulation!",
            text: `<p>Dear, Candidate,</p><p><br></p><p>Office on saturday 5th jan for interview.</p><p><br></p><ol><li class="ql-align-justify"><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. </li><li class="ql-align-justify">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </li><li class="ql-align-justify">when an unknown printer took a galley of type and scrambled</li><li class="ql-align-justify">it to make a type specimen book. It has survived not only five</li><li class="ql-align-justify">centuries, but also the leap into electronic typesetting, remaining essentially </li><li class="ql-align-justify">unchanged. It was popularised</li></ol><p class="ql-align-justify"><br></p><p class="ql-align-justify"><span style="color: rgb(0, 0, 0);">It is a long established fact that a </span><strong style="color: rgb(0, 0, 0);">reader will</strong><span style="color: rgb(0, 0, 0);"> be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here</span></p>`,
        },
        dateAndTime: "5:49 AM",
        isRead: false,
    },
    {
        _id: '4',
        sender: 'Theresa Webb',
        emailAddress: 'oky@gmail.com',
        mail: {
            subject: "Build prototypes without code",
            text: `<p>Dear, Candidate,</p><p><br></p><p>Office on saturday 5th jan for interview.</p><p><br></p><ol><li class="ql-align-justify"><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. </li><li class="ql-align-justify">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </li><li class="ql-align-justify">when an unknown printer took a galley of type and scrambled</li><li class="ql-align-justify">it to make a type specimen book. It has survived not only five</li><li class="ql-align-justify">centuries, but also the leap into electronic typesetting, remaining essentially </li><li class="ql-align-justify">unchanged. It was popularised</li></ol><p class="ql-align-justify"><br></p><p class="ql-align-justify"><span style="color: rgb(0, 0, 0);">It is a long established fact that a </span><strong style="color: rgb(0, 0, 0);">reader will</strong><span style="color: rgb(0, 0, 0);"> be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here</span></p>`,
        },
        dateAndTime: "Apr 25",
        isRead: true,
    },
    {
        _id: '5',
        sender: 'Devon Lane ',
        emailAddress: 'abc@gmail.com',
        mail: {
            subject: "Hiya",
            text: `<p>Dear, Candidate,</p><p><br></p><p>Office on saturday 5th jan for interview.</p><p><br></p><ol><li class="ql-align-justify"><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. </li><li class="ql-align-justify">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </li><li class="ql-align-justify">when an unknown printer took a galley of type and scrambled</li><li class="ql-align-justify">it to make a type specimen book. It has survived not only five</li><li class="ql-align-justify">centuries, but also the leap into electronic typesetting, remaining essentially </li><li class="ql-align-justify">unchanged. It was popularised</li></ol><p class="ql-align-justify"><br></p><p class="ql-align-justify"><span style="color: rgb(0, 0, 0);">It is a long established fact that a </span><strong style="color: rgb(0, 0, 0);">reader will</strong><span style="color: rgb(0, 0, 0);"> be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here</span></p>`,
        },
        dateAndTime: "Apr 21",
        isRead: true,
    },
    {
        _id: '6',
        sender: 'Leslie Alexander',
        emailAddress: 'abc@gmail.com',
        mail: {
            subject: "Congratulation!",
            text: `<p>Dear, Candidate,</p><p><br></p><p>Office on saturday 5th jan for interview.</p><p><br></p><ol><li class="ql-align-justify"><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. </li><li class="ql-align-justify">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </li><li class="ql-align-justify">when an unknown printer took a galley of type and scrambled</li><li class="ql-align-justify">it to make a type specimen book. It has survived not only five</li><li class="ql-align-justify">centuries, but also the leap into electronic typesetting, remaining essentially </li><li class="ql-align-justify">unchanged. It was popularised</li></ol><p class="ql-align-justify"><br></p><p class="ql-align-justify"><span style="color: rgb(0, 0, 0);">It is a long established fact that a </span><strong style="color: rgb(0, 0, 0);">reader will</strong><span style="color: rgb(0, 0, 0);"> be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here</span></p>`,
        },
        dateAndTime: "Mar 3",
        isRead: true,
    },
    {
        _id: '7',
        sender: 'Leslie Alexander',
        emailAddress: 'abc@gmail.com',
        mail: {
            subject: "Congratulation!",
            text: `<p>Dear, Candidate,</p><p><br></p><p>Office on saturday 5th jan for interview.</p><p><br></p><ol><li class="ql-align-justify"><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. </li><li class="ql-align-justify">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </li><li class="ql-align-justify">when an unknown printer took a galley of type and scrambled</li><li class="ql-align-justify">it to make a type specimen book. It has survived not only five</li><li class="ql-align-justify">centuries, but also the leap into electronic typesetting, remaining essentially </li><li class="ql-align-justify">unchanged. It was popularised</li></ol><p class="ql-align-justify"><br></p><p class="ql-align-justify"><span style="color: rgb(0, 0, 0);">It is a long established fact that a </span><strong style="color: rgb(0, 0, 0);">reader will</strong><span style="color: rgb(0, 0, 0);"> be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here</span></p>`,
        },
        dateAndTime: "Mar 1",
        isRead: true,
    },
    {
        _id: '8',
        sender: 'Theresa Lane',
        emailAddress: 'abc@gmail.com',
        mail: {
            subject: "Build prototypes without code",
            text: `<p>Dear, Candidate,</p><p><br></p><p>Office on saturday 5th jan for interview.</p><p><br></p><ol><li class="ql-align-justify"><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. </li><li class="ql-align-justify">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </li><li class="ql-align-justify">when an unknown printer took a galley of type and scrambled</li><li class="ql-align-justify">it to make a type specimen book. It has survived not only five</li><li class="ql-align-justify">centuries, but also the leap into electronic typesetting, remaining essentially </li><li class="ql-align-justify">unchanged. It was popularised</li></ol><p class="ql-align-justify"><br></p><p class="ql-align-justify"><span style="color: rgb(0, 0, 0);">It is a long established fact that a </span><strong style="color: rgb(0, 0, 0);">reader will</strong><span style="color: rgb(0, 0, 0);"> be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here</span></p>`,
        },
        dateAndTime: "Dec 20",
        isRead: false,
    },
];
function Inbox({ }) {
    const [toggleEmailView, setToggleEmailView] = useState(false);
    const [selectedEmail, setSelectedEmail] = useState(null);

    const openEmail = (emailId) => {
        setSelectedEmail(emailId);
        setToggleEmailView(!toggleEmailView);
    };
    const closeEmail = () => {
        setSelectedEmail(null);
        setToggleEmailView(!toggleEmailView);
    };

    // console.log("selectedEmail", selectedEmail)
    // console.log("toggleEmailView", toggleEmailView)
    return (
        <>
            {toggleEmailView ? (
                <div>
                    <h2 className='flex items-center gap-x-3 text-purple-2 text-[20px] font-bold mb-3'>
                        <span onClick={closeEmail} className='cursor-pointer hover:bg-purple-7 rounded-full p-2'>
                            <Icon name="ChevronLeft" />
                        </span>
                    </h2>
                    <div className='mt-1'>
                        <h5 className='text-black-2 text-[24px] leading-[32px] font-medium'>{selectedEmail?.mail?.subject}</h5>
                        <div className='flex justify-between py-2'>
                            <div>
                                <h6 className='text-[18px] leading-[24px] font-medium'>{selectedEmail?.sender}</h6>
                                <span className='opacity-90'>&lt;{selectedEmail?.emailAddress}&gt;</span>
                            </div>
                            <span className='opacity-90'>{selectedEmail?.dateAndTime}</span>
                        </div>
                        <div className='text-black-2 mt-2' dangerouslySetInnerHTML={{ __html: selectedEmail?.mail?.text }}></div>
                    </div>
                </div>
            ) : (
                <ul>
                    {emails.map(item => {

                        const htmlText = item?.mail?.text
                        const tempElement = document.createElement('div');
                        tempElement.innerHTML = htmlText;
                        const textContent = tempElement.textContent || tempElement.innerText;
                        const initialText = textContent.slice(0, 110);

                        return (
                            (
                                <li key={item._id + item.sender} onClick={() => { openEmail(item) }} className='whitespace-nowrap border-b-[1px] border-gray-200 cursor-pointer hover:bg-gray-100 transition-all py-3'>
                                    <div className='flex justify-between'>
                                        <div className='flex justify-start'>
                                            {item?.isRead ?
                                                <span className='min-w-[160px] max-w-[160px] overflow-hidden pr-8'>{item?.sender}</span>
                                                :
                                                <strong className='min-w-[160px] max-w-[160px] overflow-hidden pr-8'>{item?.sender}</strong>
                                            }
                                            <div className='flex justify-start gap-x-1 pl-3'>
                                                {item?.isRead ?
                                                    <span>{item?.mail?.subject}</span>
                                                    :
                                                    <strong>{item?.mail?.subject}</strong>
                                                }
                                                -
                                                <span className='email-first-view'>{initialText}</span>
                                            </div>
                                        </div>
                                        <span className='min-w-[90px] max-w-[90px] overflow-hidden text-right pl-8'>{item?.dateAndTime}</span>
                                    </div>
                                </li>
                            )
                        )
                    })}
                </ul>
            )}
        </>
    );
}

export default Inbox


import React, { useEffect, useState } from 'react';
import { Core } from '..';
import TableB from '../table/TableB';

const columns = [
    {
        title: 'Email Title',
        key: 'emailTitle',
        dataIndex: 'emailTitle',
    },
    {
        title: 'Action',
        key: 'action',
        dataIndex: 'action',
    },
];

const savedTemplate = [
    {
        id: "1",
        emailTitle: {
            subject: "Congratulations! prototypes without code",
            text: `<p>Dear, Candidate,</p><p><br></p><p>Office on saturday 5th jan for interview.</p><p><br></p><ol><li class="ql-align-justify"><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. </li><li class="ql-align-justify">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </li><li class="ql-align-justify">when an unknown printer took a galley of type and scrambled</li><li class="ql-align-justify">it to make a type specimen book. It has survived not only five</li><li class="ql-align-justify">centuries, but also the leap into electronic typesetting, remaining essentially </li><li class="ql-align-justify">unchanged. It was popularised</li></ol><p class="ql-align-justify"><br></p><p class="ql-align-justify"><span style="color: rgb(0, 0, 0);">It is a long established fact that a </span><strong style="color: rgb(0, 0, 0);">reader will</strong><span style="color: rgb(0, 0, 0);"> be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here</span></p>`,
        },
    },
    {
        id: "2",
        emailTitle: {
            subject: "Welcome Sir, prototypes without code",
            text: `<p>Dear, Employer,</p><p><br></p><p>Office on saturday 5th jan for interview.</p><p><br></p><ol><li class="ql-align-justify"><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. </li><li class="ql-align-justify">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </li><li class="ql-align-justify">when an unknown printer took a galley of type and scrambled</li><li class="ql-align-justify">it to make a type specimen book. It has survived not only five</li><li class="ql-align-justify">centuries, but also the leap into electronic typesetting, remaining essentially </li><li class="ql-align-justify">unchanged. It was popularised</li></ol><p class="ql-align-justify"><br></p><p class="ql-align-justify"><span style="color: rgb(0, 0, 0);">It is a long established fact that a </span><strong style="color: rgb(0, 0, 0);">reader will</strong><span style="color: rgb(0, 0, 0);"> be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here</span></p>`,
        },
    },
    {
        id: "3 ",
        emailTitle: {
            subject: "Build prototypes without code",
            text: `<p>Hi, Candidate,</p><p><br></p><p>Office on saturday 5th jan for interview.</p><p><br></p><ol><li class="ql-align-justify"><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. </li><li class="ql-align-justify">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </li><li class="ql-align-justify">when an unknown printer took a galley of type and scrambled</li><li class="ql-align-justify">it to make a type specimen book. It has survived not only five</li><li class="ql-align-justify">centuries, but also the leap into electronic typesetting, remaining essentially </li><li class="ql-align-justify">unchanged. It was popularised</li></ol><p class="ql-align-justify"><br></p><p class="ql-align-justify"><span style="color: rgb(0, 0, 0);">It is a long established fact that a </span><strong style="color: rgb(0, 0, 0);">reader will</strong><span style="color: rgb(0, 0, 0);"> be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here</span></p>`,
        },
    },
    {
        id: "4",
        emailTitle: {
            subject: "Hi, prototypes without code",
            text: `<p>Dear, Sir,</p><p><br></p><p>Office on saturday 5th jan for interview.</p><p><br></p><ol><li class="ql-align-justify"><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. </li><li class="ql-align-justify">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </li><li class="ql-align-justify">when an unknown printer took a galley of type and scrambled</li><li class="ql-align-justify">it to make a type specimen book. It has survived not only five</li><li class="ql-align-justify">centuries, but also the leap into electronic typesetting, remaining essentially </li><li class="ql-align-justify">unchanged. It was popularised</li></ol><p class="ql-align-justify"><br></p><p class="ql-align-justify"><span style="color: rgb(0, 0, 0);">It is a long established fact that a </span><strong style="color: rgb(0, 0, 0);">reader will</strong><span style="color: rgb(0, 0, 0);"> be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here</span></p>`,
        },
    },
    {
        id: "5",
        emailTitle: {
            subject: "Build prototypes without code",
            text: `<p>Welcome, Candidate,</p><p><br></p><p>Office on saturday 5th jan for interview.</p><p><br></p><ol><li class="ql-align-justify"><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. </li><li class="ql-align-justify">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </li><li class="ql-align-justify">when an unknown printer took a galley of type and scrambled</li><li class="ql-align-justify">it to make a type specimen book. It has survived not only five</li><li class="ql-align-justify">centuries, but also the leap into electronic typesetting, remaining essentially </li><li class="ql-align-justify">unchanged. It was popularised</li></ol><p class="ql-align-justify"><br></p><p class="ql-align-justify"><span style="color: rgb(0, 0, 0);">It is a long established fact that a </span><strong style="color: rgb(0, 0, 0);">reader will</strong><span style="color: rgb(0, 0, 0);"> be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here</span></p>`,
        },
    },
    {
        id: "6",
        emailTitle: {
            subject: "Build prototypes without code",
            text: `<p>Dear, Candidate,</p><p><br></p><p>Office on saturday 5th jan for interview.</p><p><br></p><ol><li class="ql-align-justify"><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. </li><li class="ql-align-justify">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </li><li class="ql-align-justify">when an unknown printer took a galley of type and scrambled</li><li class="ql-align-justify">it to make a type specimen book. It has survived not only five</li><li class="ql-align-justify">centuries, but also the leap into electronic typesetting, remaining essentially </li><li class="ql-align-justify">unchanged. It was popularised</li></ol><p class="ql-align-justify"><br></p><p class="ql-align-justify"><span style="color: rgb(0, 0, 0);">It is a long established fact that a </span><strong style="color: rgb(0, 0, 0);">reader will</strong><span style="color: rgb(0, 0, 0);"> be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here</span></p>`,
        },
    },
];

const actions = {
    edit: true,
};

function PersonalizedEmail({
}) {
    // const [titleToEdit, setTitleToEdit] = useState("");
    const [emailToEdit, setEmailToEdit] = useState("");
    const [emailTitle, setEmailTitle] = useState("");
    const [emailContent, setEmailContent] = useState("");


    useEffect(() => {
        if (
            emailToEdit?.emailTitle?.subject) {
            setEmailContent(emailToEdit.emailTitle.text)
            setEmailTitle(emailToEdit.emailTitle.subject)
        }
    }, [emailToEdit])

    const onEditClick = (id) => {
        const selectedTemplate = savedTemplate.find(template => template.id === id);
        if (selectedTemplate) {
            setEmailToEdit(selectedTemplate)
        }
    };


    const handleTitle = (e) => {
        setEmailTitle(e.target.value)
    };
    return (
        <Core.Card className={'p-5'} border>
            {/* <h5 className='text-black-2 text-[24px] leading-[32px] font-medium mb-2'>Create an Employer Account</h5> */}

            <div className="mb-4">
                <Core.InputWithLabel
                    name={"title"}
                    value={emailTitle ? emailTitle : ""}
                    onChange={handleTitle}
                    label
                    sm
                    edit
                />
            </div>

            <div className='mb-4'>
                <Core.TextEditorWithLabel name={'emailContent'} height={"h-[300px]"} style={{ height: "84%" }} value={emailContent} setValue={setEmailContent} />
            </div>

            <div className="mt-5 flex justify-start items-center gap-x-2">
                <Core.Button type="narrow" submit>Save</Core.Button>
            </div>

            <h2 className='text-purple-2 text-[20px] font-bold mt-8'> Saved Template</h2>

            <TableB
                data={savedTemplate}
                columns={columns}
                actions={actions}
                onEditClick={onEditClick}
                filterBy={[]}
                border="none"
            />

        </Core.Card>
    );
}

export default PersonalizedEmail



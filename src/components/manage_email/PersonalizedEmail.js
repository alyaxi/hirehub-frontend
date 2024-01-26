import React, { useState } from 'react';
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
        emailTitle: "Job Interview Invitation",
    },
    {
        id: "2",
        emailTitle: "Onboarding Information",

    },
    {
        id: "3 ",
        emailTitle: "Assessment/Testing Instructions",

    },
    {
        id: "4",
        emailTitle: "Job Offer",

    },
    {
        id: "5",
        emailTitle: "Your Application has been viewed",

    },
    {
        id: "6",
        emailTitle: "Job Interview Invitation",

    },
];



const actions = {
    edit: true,
};

function PersonalizedEmail({
}) {
    // const [description, setDescription] = useState(projectToEdit?.description ? projectToEdit?.description : "");
    const [emailContent, setEmailContent] = useState("");

    const onEditClick = (id) => {
        // navigate(`/${id}`);
        // navigate(`/`);
    };
    return (
        <Core.Card className={'p-5'} border>
            {/* <h5 className='text-black-2 text-[24px] leading-[32px] font-medium mb-2'>Create an Employer Account</h5> */}

            <div className="mb-4">
                <Core.InputWithLabel
                    name={"title"}
                    // label="Company Name"
                    label
                    sm
                // onChange={(value) => handleChange("companyName", value)}
                />
            </div>

            <div className='mb-4'>
                <Core.TextEditorWithLabel name={'emailContent'} height={"h-[300px]"} style={{ height: "84%" }} value={emailContent} setValue={setEmailContent} />
            </div>

            <div className="mt-5 flex justify-start items-center gap-x-2">
                <Core.Button
                    // onClick={handleFinish}
                    type="narrow" submit>Save</Core.Button>
            </div>





            <h2 className='text-purple-2 text-[20px] font-bold mt-8 mb-3'> Saved Template</h2>

            <TableB
                data={savedTemplate}
                columns={columns}
                actions={actions}
                onEditClick={onEditClick}
                filterBy={[

                ]}
                border="none"
            />




        </Core.Card>
    );
}

export default PersonalizedEmail



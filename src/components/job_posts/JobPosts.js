import React, { useState } from 'react';
import { Core, JobDetails } from '..';
import dropdownOptions from '../../data/dropdownOptions.json';
import Icon from '../icon';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space, Divider, Button, theme, Modal } from 'antd';

const jobPosts = [
    {
        _id: "1",
        aboutPosition: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\n",
        applicationCount: 0,
        benefits: ['Health Insurance'],
        careerLevel: "Senior Level",
        department: "Graphics Designers",
        experience: "1",
        expirationDate: "2024-01-10T00:00:00.000Z",
        gender: "Male",
        industry: "Art and Design",
        isDeleted: false,
        jobLocation: "Palo Alto, CA",
        jobShift: "Second Shift (Afternoon)",
        jobStatus: "Closed",
        jobType: "Temporary",
        minimumEducation: "Bachelor's Degree",
        noOfOpenings: "20",
        positionTitle: "Full Stack Developer",
        postedDate: "01/26/24 5:25pm",
        qualification: "<p class=\"ql-align-justify\"><strong>Lorem Ipsum</strong>&nbsp;is simply dummy t</p><h1 class=\"ql-align-justify\">ext of the printing and typesetting indus</h1><h3 class=\"ql-align-justify\">try. Lorem Ipsum has been the indust</h3><p class=\"ql-align-justify\"><br></p><p class=\"ql-align-justify\">ry's standard dummy text ever since the 1500s, when an unknown printer</p><h2 class=\"ql-align-justify\">took a galley of type and scrambled it to m</h2><p class=\"ql-align-justify\">ake a type<em> specimen </em>book. It has survive</p><p class=\"ql-align-justify\">d not <strong>only five centuries, </strong>but als</p><p class=\"ql-align-justify\"><br></p><p class=\"ql-align-justify\">o the leap<u> into electronic typ</u>esetting, r</p><ol><li class=\"ql-align-justify\">emaining essentially unchanged. It was</li></ol><p class=\"ql-align-justify\">popularised in the 1960s with the re</p><p class=\"ql-align-justify\"><br></p><ul><li class=\"ql-align-justify\">lease of Letraset sheets containing Lo</li></ul><p class=\"ql-align-justify\">rem Ipsum passages, and more recently with</p><p>desktop publishing software like Al</p><p class=\"ql-align-justify\">d</p><p class=\"ql-align-justify\">us PageMaker including versions of Lorem Ipsum.</p><p><br></p>",
        responsibilities: "<p class=\"ql-align-justify\"><strong>Lorem Ipsum</strong>&nbsp;is simply dummy t</p><h1 class=\"ql-align-justify\">ext of the printing and typesetting indus</h1><h3 class=\"ql-align-justify\">try. Lorem Ipsum has been the indust</h3><p class=\"ql-align-justify\"><br></p><p class=\"ql-align-justify\">ry's standard dummy text ever since the 1500s, when an unknown printer</p><h2 class=\"ql-align-justify\">took a galley of type and scrambled it to m</h2><p class=\"ql-align-justify\">ake a type<em> specimen </em>book. It has survive</p><p class=\"ql-align-justify\">d not <strong>only five centuries, </strong>but als</p><p class=\"ql-align-justify\"><br></p><p class=\"ql-align-justify\">o the leap<u> into electronic typ</u>esetting, r</p><ol><li class=\"ql-align-justify\">emaining essentially unchanged. It was</li></ol><p class=\"ql-align-justify\">popularised in the 1960s with the re</p><p class=\"ql-align-justify\"><br></p><ul><li class=\"ql-align-justify\">lease of Letraset sheets containing Lo</li></ul><p class=\"ql-align-justify\">rem Ipsum passages, and more recently with</p><p>desktop publishing software like Al</p><p class=\"ql-align-justify\">d</p><p class=\"ql-align-justify\">us PageMaker including versions of Lorem Ipsum.</p><p><br></p>",
        salary: { type: 'range', value: '$3000 - $3500', rate: 'GBP/hour' },
        skills: "<h2>sdfg</h2><h3>fg</h3><h1>sdf</h1><p><strong>dfs</strong></p><p><em>df</em></p><p><u>df</u></p><ol><li>df</li></ol><ul><li>sdf</li></ul><p><br></p><p>sdf</p><p>df</p><p>df</p><p>df</p><p>sdf</p><p>sdf</p><p>df</p><p><br></p><p>sdf</p>",
        employer: {
            address: "Alternative AV", title: "Cyber Tech Group"
        }
    },
    {
        _id: "2",
        aboutPosition: "Contrary to popular belief, Lorem Ipsum is not simply random text.\nIt has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.\nRichard McClintock, a Latin professor at Hampden-Sydney\nCollege in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,\ndiscovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,\n\"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.\n",
        applicationCount: 0,
        benefits: ['Vision Insurance', 'Paid Time Off (PTO)'],
        careerLevel: "Mid Level",
        department: "Marketing",
        experience: "0.5",
        expirationDate: "2024-01-11T00:00:00.000Z",
        gender: "Male",
        industry: "Accounting",
        isDeleted: false,
        jobLocation: "Plantation, FL",
        jobShift: "Second Shift (Afternoon)",
        jobStatus: "Open",
        jobType: "Remote",
        minimumEducation: "Associate's Degree",
        noOfOpenings: "20",
        positionTitle: "Product UX Designer(Retail)",
        postedDate: "01/26/24 5:05pm",
        qualification: "<ul><li class=\"ql-align-justify\">Contrary to popular belief, Lorem Ipsum is not simply random text.</li><li class=\"ql-align-justify\">It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</li><li class=\"ql-align-justify\">Richard McClintock, a Latin professor at Hampden-Sydney</li><li class=\"ql-align-justify\">College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,</li><li class=\"ql-align-justify\">discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,</li><li class=\"ql-align-justify\">\"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.</li></ul><p><br></p>",
        responsibilities: "<ul><li class=\"ql-align-justify\">Contrary to popular belief, Lorem Ipsum is not simply random text.</li><li class=\"ql-align-justify\">It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</li><li class=\"ql-align-justify\">Richard McClintock, a Latin professor at Hampden-Sydney</li><li class=\"ql-align-justify\">College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,</li><li class=\"ql-align-justify\">discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,</li><li class=\"ql-align-justify\">\"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.</li></ul><p><br></p>",
        salary: { type: 'range', value: '$3000 - $3500', rate: 'GBP/hour' },
        skills: "<ul><li class=\"ql-align-justify\">Contrary to popular belief, Lorem Ipsum is not simply random text.</li><li class=\"ql-align-justify\">It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</li><li class=\"ql-align-justify\">Richard McClintock, a Latin professor at Hampden-Sydney</li><li class=\"ql-align-justify\">College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,</li><li class=\"ql-align-justify\">discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,</li><li class=\"ql-align-justify\">\"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.</li></ul><p><br></p>",
        employer: {
            address: "Plantation, FL", title: "Chewy"
        }
    },
    {
        _id: "3",
        aboutPosition: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\n",
        applicationCount: 0,
        benefits: ['Vision Insurance'],
        careerLevel: "Entry Level",
        department: "Design",
        experience: "0.5",
        expirationDate: "2024-01-10T00:00:00.000Z",
        gender: "Male",
        industry: "Cleaning & Maintenance",
        isDeleted: false,
        jobLocation: "Alternative AV",
        jobShift: "Second Shift (Afternoon)",
        jobStatus: "Open",
        jobType: "Full Time",
        minimumEducation: "Associate's Degree",
        noOfOpenings: "200",
        positionTitle: "Web Designer",
        postedDate: "01/26/24 5:19pm",
        qualification: "<p class=\"ql-align-justify\"><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><p><br></p>",
        responsibilities: "<h1>a</h1><h2>d</h2><h3>d</h3><p>d</p><p><strong>d</strong></p><p><em>d</em></p><p><u>d</u></p><ol><li>d</li></ol><h2>d</h2><h3>d</h3><p><br></p><ol><li>d</li><li>d</li></ol><p>d</p><ul><li>d</li><li>d</li></ul><p>d</p><ol><li>d</li><li>d</li></ol><p><br></p>",
        salary: { type: 'range', value: '$3000 - $3500', rate: 'CAD/hour' },
        skills: "<p class=\"ql-align-justify\"><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><p><br></p>",
        employer: {
            address: "Houston, TX 77060", title: "tesla"
        }
    },
    {
        _id: "4",
        aboutPosition: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\n",
        applicationCount: 0,
        benefits: ['Health Insurance'],
        careerLevel: "Senior Level",
        department: "Graphics Designers",
        experience: "1",
        expirationDate: "2024-01-10T00:00:00.000Z",
        gender: "Male",
        industry: "Art and Design",
        isDeleted: false,
        jobLocation: "Palo Alto, CA",
        jobShift: "Second Shift (Afternoon)",
        jobStatus: "Closed",
        jobType: "Temporary",
        minimumEducation: "Bachelor's Degree",
        noOfOpenings: "20",
        positionTitle: "Full Stack Developer",
        postedDate: "01/26/24 5:25pm",
        qualification: "<p class=\"ql-align-justify\"><strong>Lorem Ipsum</strong>&nbsp;is simply dummy t</p><h1 class=\"ql-align-justify\">ext of the printing and typesetting indus</h1><h3 class=\"ql-align-justify\">try. Lorem Ipsum has been the indust</h3><p class=\"ql-align-justify\"><br></p><p class=\"ql-align-justify\">ry's standard dummy text ever since the 1500s, when an unknown printer</p><h2 class=\"ql-align-justify\">took a galley of type and scrambled it to m</h2><p class=\"ql-align-justify\">ake a type<em> specimen </em>book. It has survive</p><p class=\"ql-align-justify\">d not <strong>only five centuries, </strong>but als</p><p class=\"ql-align-justify\"><br></p><p class=\"ql-align-justify\">o the leap<u> into electronic typ</u>esetting, r</p><ol><li class=\"ql-align-justify\">emaining essentially unchanged. It was</li></ol><p class=\"ql-align-justify\">popularised in the 1960s with the re</p><p class=\"ql-align-justify\"><br></p><ul><li class=\"ql-align-justify\">lease of Letraset sheets containing Lo</li></ul><p class=\"ql-align-justify\">rem Ipsum passages, and more recently with</p><p>desktop publishing software like Al</p><p class=\"ql-align-justify\">d</p><p class=\"ql-align-justify\">us PageMaker including versions of Lorem Ipsum.</p><p><br></p>",
        responsibilities: "<p class=\"ql-align-justify\"><strong>Lorem Ipsum</strong>&nbsp;is simply dummy t</p><h1 class=\"ql-align-justify\">ext of the printing and typesetting indus</h1><h3 class=\"ql-align-justify\">try. Lorem Ipsum has been the indust</h3><p class=\"ql-align-justify\"><br></p><p class=\"ql-align-justify\">ry's standard dummy text ever since the 1500s, when an unknown printer</p><h2 class=\"ql-align-justify\">took a galley of type and scrambled it to m</h2><p class=\"ql-align-justify\">ake a type<em> specimen </em>book. It has survive</p><p class=\"ql-align-justify\">d not <strong>only five centuries, </strong>but als</p><p class=\"ql-align-justify\"><br></p><p class=\"ql-align-justify\">o the leap<u> into electronic typ</u>esetting, r</p><ol><li class=\"ql-align-justify\">emaining essentially unchanged. It was</li></ol><p class=\"ql-align-justify\">popularised in the 1960s with the re</p><p class=\"ql-align-justify\"><br></p><ul><li class=\"ql-align-justify\">lease of Letraset sheets containing Lo</li></ul><p class=\"ql-align-justify\">rem Ipsum passages, and more recently with</p><p>desktop publishing software like Al</p><p class=\"ql-align-justify\">d</p><p class=\"ql-align-justify\">us PageMaker including versions of Lorem Ipsum.</p><p><br></p>",
        salary: { type: 'range', value: '$3000 - $3500', rate: 'GBP/hour' },
        skills: "<h2>sdfg</h2><h3>fg</h3><h1>sdf</h1><p><strong>dfs</strong></p><p><em>df</em></p><p><u>df</u></p><ol><li>df</li></ol><ul><li>sdf</li></ul><p><br></p><p>sdf</p><p>df</p><p>df</p><p>df</p><p>sdf</p><p>sdf</p><p>df</p><p><br></p><p>sdf</p>",
        employer: {
            address: "Palo Alto, CA", title: "Beans.ai"
        }
    },
    {
        _id: "5",
        aboutPosition: "Contrary to popular belief, Lorem Ipsum is not simply random text.\nIt has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.\nRichard McClintock, a Latin professor at Hampden-Sydney\nCollege in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,\ndiscovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,\n\"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.\n",
        applicationCount: 0,
        benefits: ['Vision Insurance', 'Paid Time Off (PTO)'],
        careerLevel: "Mid Level",
        department: "Marketing",
        experience: "0.5",
        expirationDate: "2024-01-11T00:00:00.000Z",
        gender: "Male",
        industry: "Accounting",
        isDeleted: false,
        jobLocation: "Palo Alto, CA",
        jobShift: "Second Shift (Afternoon)",
        jobStatus: "Open",
        jobType: "Part Time",
        minimumEducation: "Associate's Degree",
        noOfOpenings: "20",
        positionTitle: "ui ux designer",
        postedDate: "01/26/24 5:05pm",
        qualification: "<ul><li class=\"ql-align-justify\">Contrary to popular belief, Lorem Ipsum is not simply random text.</li><li class=\"ql-align-justify\">It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</li><li class=\"ql-align-justify\">Richard McClintock, a Latin professor at Hampden-Sydney</li><li class=\"ql-align-justify\">College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,</li><li class=\"ql-align-justify\">discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,</li><li class=\"ql-align-justify\">\"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.</li></ul><p><br></p>",
        responsibilities: "<ul><li class=\"ql-align-justify\">Contrary to popular belief, Lorem Ipsum is not simply random text.</li><li class=\"ql-align-justify\">It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</li><li class=\"ql-align-justify\">Richard McClintock, a Latin professor at Hampden-Sydney</li><li class=\"ql-align-justify\">College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,</li><li class=\"ql-align-justify\">discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,</li><li class=\"ql-align-justify\">\"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.</li></ul><p><br></p>",
        salary: { type: 'range', value: '$3000 - $3500', rate: 'GBP/hour' },
        skills: "<ul><li class=\"ql-align-justify\">Contrary to popular belief, Lorem Ipsum is not simply random text.</li><li class=\"ql-align-justify\">It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</li><li class=\"ql-align-justify\">Richard McClintock, a Latin professor at Hampden-Sydney</li><li class=\"ql-align-justify\">College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,</li><li class=\"ql-align-justify\">discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,</li><li class=\"ql-align-justify\">\"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.</li></ul><p><br></p>",
        employer: {
            address: "Palo Alto, CA", title: "tesla"
        }
    },
    {
        _id: "6",
        aboutPosition: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\n",
        applicationCount: 0,
        benefits: ['Vision Insurance'],
        careerLevel: "Entry Level",
        department: "Design",
        experience: "0.5",
        expirationDate: "2024-01-10T00:00:00.000Z",
        gender: "Male",
        industry: "Cleaning & Maintenance",
        isDeleted: false,
        jobLocation: "Palo Alto, CA",
        jobShift: "Second Shift (Afternoon)",
        jobStatus: "Open",
        jobType: "Part Time",
        minimumEducation: "Associate's Degree",
        noOfOpenings: "200",
        positionTitle: "Web Designer",
        postedDate: "01/26/24 5:19pm",
        qualification: "<p class=\"ql-align-justify\"><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><p><br></p>",
        responsibilities: "<h1>a</h1><h2>d</h2><h3>d</h3><p>d</p><p><strong>d</strong></p><p><em>d</em></p><p><u>d</u></p><ol><li>d</li></ol><h2>d</h2><h3>d</h3><p><br></p><ol><li>d</li><li>d</li></ol><p>d</p><ul><li>d</li><li>d</li></ul><p>d</p><ol><li>d</li><li>d</li></ol><p><br></p>",
        salary: { type: 'range', value: '$3000 - $3500', rate: 'CAD/hour' },
        skills: "<p class=\"ql-align-justify\"><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><p><br></p>",
    }
]

function JobPosts() {
    const {
        salaryOptions_String,
        experienceOptions_String,
        jobShift_String,
        skillsOptions_String,
        industryOptions_String,
        funtionalAreaOptions_String,
        companyOptions_String,
    } = dropdownOptions;

    const { useToken } = theme;

    const [open, setOpen] = useState(false);
    const handleMenuClick = (e) => {
        if (e.key === '3') {
            setOpen(false);
        }
    };
    const handleOpenChange = (nextOpen, info) => {
        if (info.source === 'trigger' || nextOpen) {
            setOpen(nextOpen);
        }
    };

    const items = [
        {
            key: '1',
            label: (
                <div className=" ">
                    <input
                        className="w-5 h-5 rounded-[20px]"
                        type="checkbox"
                        id="fullTime"
                        name="fullTime"
                    // disabled={pageType === "view" ? true : false}
                    // checked={eligibilityStatus === 'checked'}
                    // onChange={handleCheckboxChange}
                    />
                    <label className="text-gray-1" htmlFor="terms-conditions">
                        Full Time
                    </label>
                </div>


            ),
        },
        {
            key: '2',
            label: (
                <div className=" ">
                    <input
                        className="w-5 h-5 rounded-[20px]"
                        type="checkbox"
                        id="partTime"
                        name="partTime"
                    // disabled={pageType === "view" ? true : false}
                    // checked={eligibilityStatus === 'checked'}
                    // onChange={handleCheckboxChange}
                    />
                    <label className="text-gray-1" htmlFor="terms-conditions">
                        Part Time
                    </label>
                </div>


            ),
        },
        {
            key: '3',
            label: (
                <div className=" ">
                    <input
                        className="w-5 h-5 rounded-[20px]"
                        type="checkbox"
                        id="fullTime"
                        name="fullTime"
                    // disabled={pageType === "view" ? true : false}
                    // checked={eligibilityStatus === 'checked'}
                    // onChange={handleCheckboxChange}
                    />
                    <label className="text-gray-1" htmlFor="terms-conditions">
                        Full Time
                    </label>
                </div>


            ),
        },
        {
            key: '4',
            label: (
                <div className=" ">
                    <input
                        className="w-5 h-5 rounded-[20px]"
                        type="checkbox"
                        id="partTime"
                        name="partTime"
                    // disabled={pageType === "view" ? true : false}
                    // checked={eligibilityStatus === 'checked'}
                    // onChange={handleCheckboxChange}
                    />
                    <label className="text-gray-1" htmlFor="terms-conditions">
                        Part Time
                    </label>
                </div>


            ),
        },
    ];


    const { token } = useToken();
    const contentStyle = {
        backgroundColor: token.colorBgElevated,
        borderRadius: token.borderRadiusLG,
        boxShadow: token.boxShadowSecondary,
    };
    const menuStyle = {
        boxShadow: 'none',
    };

    const [jobTitle, setJobTitle] = useState("")
    const [location, setLocation] = useState("")
    const [salary, setSalary] = useState("")
    const [experience, setExperience] = useState("")
    const [jobShift, setJobShift] = useState("")
    const [skills, setSkills] = useState("")
    const [industry, setIndustry] = useState("")
    const [funtionalArea, setFuntionalArea] = useState("")
    const [company, setCompany] = useState("")


    const [selectedJob, setSelectedJob] = useState("")
    const [selectedJobId, setSelectedJobId] = useState('');


    const openJob = (id) => {
        console.log("id", id)
        const _selectedJob = jobPosts.find(job => job._id === id);
        setSelectedJob(_selectedJob);
        setSelectedJobId(id);
    }

    const closeDetail = () => {
        console.log("closeDetail called")
        setSelectedJob("")
        setSelectedJobId("")
    }


    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };


    const onApply = () => {
        showModal()
    }

    console.log("jobTitle", jobTitle)
    console.log("location", location)
    console.log("salary", salary)
    console.log("experience", experience)
    console.log("jobShift", jobShift)
    console.log("skills", skills)
    console.log("industry", industry)
    console.log("funtionalArea", funtionalArea)
    console.log("company", company)


    console.log(selectedJob.positionTitle)
    console.log(selectedJob.positionTitle !== "" ? "ys" : "no")
    return (
        <>
            <Modal title={'title'} width={715} open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={[]} >
            </Modal>




            <div className='w-full mb-2'>

                <div className={`flex justify-start items-center w-full mb-4`}>
                    <Core.InputWithLabel
                        name={'SearchByJobTitle'}
                        onChange={(e) => setJobTitle(e.target.value)}
                        sm
                        className={'w-full'}
                        iconic
                    />
                    <div className='flex justify-start gap-x-1 items-center w-full'>
                        <Core.InputWithLabel
                            type="text"
                            name={'SearchByLocation'}
                            onChange={(e) => setLocation(e.target.value)}
                            sm
                            iconic
                        />
                        <Core.Button sm type="narrow" color="white" className={'max-w-[100px]'}>Search</Core.Button>
                    </div>
                </div>

                <div className='flex justify-start items-center flex-wrap gap-2 w-full'>
                    <Core.Dropdown2 options={salaryOptions_String} setState={setSalary} defaultTitle="Salary" menuWidth={'w-[190px]'} />
                    {/* city ???? */}
                    {/* <Core.Dropdown2 options={cityOptions} setState={setCity} defaultTitle="City" menuWidth={'w-[190px]'} /> */}
                    <Core.Dropdown2 options={experienceOptions_String} setState={setExperience} defaultTitle="Experience" menuWidth={'w-[190px]'} />





                    <Dropdown

                        menu={{
                            items,
                            onClick: handleMenuClick,
                        }}

                        onOpenChange={handleOpenChange}
                        open={open}


                        dropdownRender={(menu) => (
                            <div style={contentStyle}>
                                {React.cloneElement(menu, {
                                    style: menuStyle,
                                })}
                                <Divider
                                    style={{
                                        margin: 0,
                                    }}
                                />
                                <Space
                                    style={{
                                        paddingLeft: 16,
                                        paddingRight: 16,
                                        paddingTop: 8,
                                        paddingBottom: 8,
                                    }}
                                >
                                    <Core.Button xs >Apply</Core.Button>
                                    <Core.Button xs color="white" >Reset</Core.Button>
                                </Space>
                            </div>
                        )}
                    >
                        <a onClick={(e) => e.preventDefault()}>
                            <Space>
                                Hover me
                                <DownOutlined />
                            </Space>
                        </a>
                    </Dropdown>


                    <Core.Dropdown2 options={jobShift_String} setState={setJobShift} defaultTitle="Job Shift" menuWidth={'w-[190px]'} />
                    <Core.Dropdown2 options={skillsOptions_String} setState={setSkills} defaultTitle="Skills" menuWidth={'w-[190px]'} />
                    {/* years of experience ???? */}
                    <Core.Dropdown2 options={industryOptions_String} setState={setIndustry} defaultTitle="Industry" menuWidth={'w-[190px]'} />
                    <Core.Dropdown2 options={funtionalAreaOptions_String} setState={setFuntionalArea} defaultTitle="Funtional Area" menuWidth={'w-[190px]'} />
                    <Core.Dropdown2 options={companyOptions_String} setState={setCompany} defaultTitle="Company" menuWidth={'w-[190px]'} />
                    {/* quick apply ???? */}
                </div>

            </div>
            <div className='flex justify-between gap-x-6 w-full pt-5'>
                <div className='flex flex-col gap-y-3 w-full pb-[50px]'>
                    {jobPosts.map((job, index) => {
                        console.log("job", job)
                        return (
                            <Core.Card key={job.positionTitle + index}
                                className={`
                                    flex flex-col gap-y-3 w-full w-full p-4
                                    ${selectedJobId === job._id ? 'border-[2pt] border-purple-1' : "border-[1pt] border-gray-11"}
                                `}
                            >
                                <div onClick={() => openJob(job?._id)} className='w-full h-full flex justify-between flex-col'>

                                    <div className='flex justify-between'>
                                        <div>
                                            <h6 className='text-[16px] leading-[14px] capitalize font-medium'>{job?.positionTitle}</h6>
                                            <a className='text-purple-4 text-[12px] leading-[18px] underline capitalize font-medium mb-2'>{job?.employer?.title}</a>
                                            <p className='text-gray-6 text-[12px] leading-[20px]'><span>{job?.employer?.jobMode}Remote,&nbsp;&nbsp;</span>{job?.employer?.address}</p>
                                        </div>
                                        <span className='text-gray-8 cursor-pointer px-1'>
                                            <Icon name="Options" />
                                        </span>
                                    </div>
                                    <p className='text-gray-6 text-[14px] leading-[20px] max-h-[61px] overflow-hidden mt-5 mb-2'>{job?.aboutPosition}</p>
                                    <div className='flex justify-start gap-x-6 text-gray-14 text-[12px] leading-[20px] py-1'><span className='flex justify-start items-center gap-x-1'><Icon name="Calender2" size={18} /> {job?.postedDate}</span> <span className='flex justify-start items-center gap-x-1'><Icon name="Currency" />{job?.salary?.value}</span></div>
                                </div>
                            </Core.Card>
                        )
                    })}
                </div>
                {selectedJob.positionTitle !== undefined &&
                    <div className='w-full'>
                        <JobDetails data={selectedJob} pageType="quickView" closeDetail={closeDetail} onApply={onApply} />
                    </div>
                }
            </div>

            {/* <div className='flex justify-between gap-x-6 w-full'>
                <Core.Card className={'flex flex-col gap-y-3 w-full max-w-[50%] pb-[50px] p-5'}>
                    {/* <Core.PersonalInformation data={personalInformation} user={user} /> * /}
                    card
                </Core.Card>
                <Core.Card className={'flex flex-col gap-y-3 w-full max-w-[50%] p-5'}>
                    card
                </Core.Card>
            </div> */}
        </>
    )
}

export default JobPosts
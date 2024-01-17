import React from 'react';
import { Breadcrumb, } from '../../../../components/core';
import { JobDetails, } from '../../../../components';
import { useLocation } from 'react-router-dom';

const breadcrumb = [
    { label: "Dashboard", link: "/admin/dashboard" },
    { label: "Manage Jobs" },
    { label: "Job Details" },
];

const jobs = [
    {
        id: "1",
        positionTitle: "Mern Stack Developer",
        jobType: "Part Time",
        noOfOpenings: "05",
        expirationDate: "11/06/24",
        jobStatus: "Open",
        postedDate: 'May 24, 2020',
        company: {
            title: "DevDynamics Labs",
            address: "Hybrid remote in Ann Arbor, MI 48109"
        },
        jobLocation: "PAC remote in Ann Arbor, ND 33109",
        salary: {
            type: "single",
            value: "10,000",
            rate: "GBP/hour",
        },
        aboutPosition: "The successful UI/UX Designer will work to deliver a complex enterprise-grade Desktop, Web, and Cloud solutions with local and offshore colleagues. As a designer, you're a true expert in your field and a strong advocate for the customer. You're formally trained in design and passionate about customer-centric innovation. You take pride in your work. You obsess over details and iterate on them until you've gotten it right. You see feedback as a good thing. You're a great storyteller who is at ease presenting and comfortable discussing your work with colleagues and stakeholders. You challenge old ways of thinking and put the customer at the center of everything you do. User-Centered Design methodologies are second nature to you.If this sounds like you and you're interested in transforming the legal technology industry, then we want to hear from you.",
        benefits: ["Remote Work Opportunities", "Paid Time Off (PTO)"],
        qualification: "<p>Bachelors/Master’s in Design or equivalent</p><p>4+ years of total work experience working as a Product/UX Designer, preferably in a dynamic start-up environment</p><p>Proficiency in Arabic language is a must</p>",
        responsibilities: "<ol><li>Partner with Product Managers, engineers, researchers, and content strategist to oversee the user experience of a product from conception until launch and beyond.</li><li>Develop and design the Personas, User journey, Interaction patterns, Task Flows, process flows, wireframes, and mock-ups to effectively conceptualize and communicate high-level design strategies and detailed interaction models.</li><li>Manage projects autonomously and serve as a design expert with a cross-functional team.</li><li>Using techniques like storyboards and sketching to communicate interactive design concepts to stakeholders.</li><li>Applying a user-centered approach to requirements and inter dependencies – to develop engaging interfaces.</li><li>Conduct design experiments and validation exercises like A/B testing, usability testing etc and effectively use quantitative and qualitative data to drive decisions and measure success.</li><li>Analyze customer data through funnel and examine high traffic screens to determine why certain journeys perform better</li><li>Create surveys for research through various media platforms to gather feedback on user’s ease of use and satisfaction interfacing on company websites and products</li></ol>",
        skills: "<ol><li>React js</li><li>Next js</li><li>Bootstrap</li><li>Node js</li><li>Express js</li><li>PHP</li><li>MySQL</li></ol>",
        industry: "Information Technology",
        jobShift: "First Shift (Day)",
        department: "MERN Stack Developer",
        gender: "No Preference",
        minimumEducation: "Bachelor",
        careerLevel: "Experienced Professional",
        applicantCounts: "150",
        experience: "5 Years",
    },
    {
        id: "2",
        positionTitle: "Mern Stack Developer",
        jobType: "",
        noOfOpenings: "09",
        expirationDate: "10/19/24",
        jobStatus: "Closed",
        postedDate: 'May 24, 2020',
        company: {
            title: "CodeMinds Software",
            address: "Hybrid remote in Ann Arbor, MI 48109"
        },
        jobLocation: "PAC remote in Ann Arbor, ND 33109",
        salary: {
            type: "single",
            value: "20,000",
            rate: "GBP/hour",
        },
        aboutPosition: "The successful UI/UX Designer will work to deliver a complex enterprise-grade Desktop, Web, and Cloud solutions with local and offshore colleagues. As a designer, you're a true expert in your field and a strong advocate for the customer. You're formally trained in design and passionate about customer-centric innovation. You take pride in your work. You obsess over details and iterate on them until you've gotten it right. You see feedback as a good thing. You're a great storyteller who is at ease presenting and comfortable discussing your work with colleagues and stakeholders. You challenge old ways of thinking and put the customer at the center of everything you do. User-Centered Design methodologies are second nature to you.If this sounds like you and you're interested in transforming the legal technology industry, then we want to hear from you.",
        benefits: ["Remote Work Opportunities", "Paid Time Off (PTO)"],
        qualification: "<p>Bachelors/Master’s in Design or equivalent</p><p>4+ years of total work experience working as a Product/UX Designer, preferably in a dynamic start-up environment</p><p>Proficiency in Arabic language is a must</p>",
        responsibilities: "<ol><li>Partner with Product Managers, engineers, researchers, and content strategist to oversee the user experience of a product from conception until launch and beyond.</li><li>Develop and design the Personas, User journey, Interaction patterns, Task Flows, process flows, wireframes, and mock-ups to effectively conceptualize and communicate high-level design strategies and detailed interaction models.</li><li>Manage projects autonomously and serve as a design expert with a cross-functional team.</li><li>Using techniques like storyboards and sketching to communicate interactive design concepts to stakeholders.</li><li>Applying a user-centered approach to requirements and inter dependencies – to develop engaging interfaces.</li><li>Conduct design experiments and validation exercises like A/B testing, usability testing etc and effectively use quantitative and qualitative data to drive decisions and measure success.</li><li>Analyze customer data through funnel and examine high traffic screens to determine why certain journeys perform better</li><li>Create surveys for research through various media platforms to gather feedback on user’s ease of use and satisfaction interfacing on company websites and products</li></ol>",
        skills: "<ol><li>React js</li><li>Next js</li><li>Bootstrap</li><li>Node js</li><li>Express js</li><li>PHP</li><li>MySQL</li></ol>",
        industry: "Information Technology",
        jobShift: "First Shift (Day)",
        department: "MERN Stack Developer",
        gender: "No Preference",
        minimumEducation: "Bachelor",
        careerLevel: "Experienced Professional",
        applicantCounts: "150",
        experience: "Fresh",
    },
    {
        id: "3",
        positionTitle: "Mern Stack Developer",
        jobType: "",
        noOfOpenings: "10",
        expirationDate: "10/19/24",
        jobStatus: "Closed",
        postedDate: 'May 24, 2020',
        company: {
            title: "Cyber Tech Group",
            address: "Hybrid remote in Ann Arbor, MI 48109"
        },
        jobLocation: "PAC remote in Ann Arbor, ND 33109",
        salary: {
            type: "single",
            value: "15,000",
            rate: "GBP/hour",
        },
        aboutPosition: "The successful UI/UX Designer will work to deliver a complex enterprise-grade Desktop, Web, and Cloud solutions with local and offshore colleagues. As a designer, you're a true expert in your field and a strong advocate for the customer. You're formally trained in design and passionate about customer-centric innovation. You take pride in your work. You obsess over details and iterate on them until you've gotten it right. You see feedback as a good thing. You're a great storyteller who is at ease presenting and comfortable discussing your work with colleagues and stakeholders. You challenge old ways of thinking and put the customer at the center of everything you do. User-Centered Design methodologies are second nature to you.If this sounds like you and you're interested in transforming the legal technology industry, then we want to hear from you.",
        benefits: ["Remote Work Opportunities", "Paid Time Off (PTO)"],
        qualification: "<p>Bachelors/Master’s in Design or equivalent</p><p>4+ years of total work experience working as a Product/UX Designer, preferably in a dynamic start-up environment</p><p>Proficiency in Arabic language is a must</p>",
        responsibilities: "<ol><li>Partner with Product Managers, engineers, researchers, and content strategist to oversee the user experience of a product from conception until launch and beyond.</li><li>Develop and design the Personas, User journey, Interaction patterns, Task Flows, process flows, wireframes, and mock-ups to effectively conceptualize and communicate high-level design strategies and detailed interaction models.</li><li>Manage projects autonomously and serve as a design expert with a cross-functional team.</li><li>Using techniques like storyboards and sketching to communicate interactive design concepts to stakeholders.</li><li>Applying a user-centered approach to requirements and inter dependencies – to develop engaging interfaces.</li><li>Conduct design experiments and validation exercises like A/B testing, usability testing etc and effectively use quantitative and qualitative data to drive decisions and measure success.</li><li>Analyze customer data through funnel and examine high traffic screens to determine why certain journeys perform better</li><li>Create surveys for research through various media platforms to gather feedback on user’s ease of use and satisfaction interfacing on company websites and products</li></ol>",
        skills: "<ol><li>React js</li><li>Next js</li><li>Bootstrap</li><li>Node js</li><li>Express js</li><li>PHP</li><li>MySQL</li></ol>",
        industry: "Information Technology",
        jobShift: "First Shift (Day)",
        department: "MERN Stack Developer",
        gender: "No Preference",
        minimumEducation: "Bachelor",
        careerLevel: "Experienced Professional",
        applicantCounts: "150",
        experience: "4 Years",
    },
    {
        id: "4",
        positionTitle: "Mern Stack Developer",
        jobType: "Full Time",
        noOfOpenings: "10",
        expirationDate: "10/19/24",
        jobStatus: "Republished",
        postedDate: 'May 24, 2020',
        company: {
            title: "CodeHarbor Technologies",
            address: "Hybrid remote in Ann Arbor, MI 48109"
        },
        jobLocation: "PAC remote in Ann Arbor, ND 33109",
        salary: {
            type: "single",
            value: "30,000",
            rate: "GBP/hour",
        },
        aboutPosition: "The successful UI/UX Designer will work to deliver a complex enterprise-grade Desktop, Web, and Cloud solutions with local and offshore colleagues. As a designer, you're a true expert in your field and a strong advocate for the customer. You're formally trained in design and passionate about customer-centric innovation. You take pride in your work. You obsess over details and iterate on them until you've gotten it right. You see feedback as a good thing. You're a great storyteller who is at ease presenting and comfortable discussing your work with colleagues and stakeholders. You challenge old ways of thinking and put the customer at the center of everything you do. User-Centered Design methodologies are second nature to you.If this sounds like you and you're interested in transforming the legal technology industry, then we want to hear from you.",
        benefits: ["Remote Work Opportunities", "Paid Time Off (PTO)"],
        qualification: "<p>Bachelors/Master’s in Design or equivalent</p><p>4+ years of total work experience working as a Product/UX Designer, preferably in a dynamic start-up environment</p><p>Proficiency in Arabic language is a must</p>",
        responsibilities: "<ol><li>Partner with Product Managers, engineers, researchers, and content strategist to oversee the user experience of a product from conception until launch and beyond.</li><li>Develop and design the Personas, User journey, Interaction patterns, Task Flows, process flows, wireframes, and mock-ups to effectively conceptualize and communicate high-level design strategies and detailed interaction models.</li><li>Manage projects autonomously and serve as a design expert with a cross-functional team.</li><li>Using techniques like storyboards and sketching to communicate interactive design concepts to stakeholders.</li><li>Applying a user-centered approach to requirements and inter dependencies – to develop engaging interfaces.</li><li>Conduct design experiments and validation exercises like A/B testing, usability testing etc and effectively use quantitative and qualitative data to drive decisions and measure success.</li><li>Analyze customer data through funnel and examine high traffic screens to determine why certain journeys perform better</li><li>Create surveys for research through various media platforms to gather feedback on user’s ease of use and satisfaction interfacing on company websites and products</li></ol>",
        skills: "<ol><li>React js</li><li>Next js</li><li>Bootstrap</li><li>Node js</li><li>Express js</li><li>PHP</li><li>MySQL</li></ol>",
        industry: "Information Technology",
        jobShift: "First Shift (Day)",
        department: "MERN Stack Developer",
        gender: "No Preference",
        minimumEducation: "Bachelor",
        careerLevel: "Experienced Professional",
        applicantCounts: "150",
        experience: "2 Years",
    },
    {
        id: "5",
        positionTitle: "Mern Stack Developer",
        jobType: "Part Time",
        noOfOpenings: "10",
        expirationDate: "10/19/23",
        jobStatus: "Closed",
        postedDate: 'May 24, 2020',
        company: {
            title: "Cyber Tech Group",
            address: "Hybrid remote in Ann Arbor, MI 48109"
        },
        jobLocation: "PAC remote in Ann Arbor, ND 33109",
        salary: {
            type: "single",
            value: "40,000",
            rate: "GBP/hour",
        },
        aboutPosition: "The successful UI/UX Designer will work to deliver a complex enterprise-grade Desktop, Web, and Cloud solutions with local and offshore colleagues. As a designer, you're a true expert in your field and a strong advocate for the customer. You're formally trained in design and passionate about customer-centric innovation. You take pride in your work. You obsess over details and iterate on them until you've gotten it right. You see feedback as a good thing. You're a great storyteller who is at ease presenting and comfortable discussing your work with colleagues and stakeholders. You challenge old ways of thinking and put the customer at the center of everything you do. User-Centered Design methodologies are second nature to you.If this sounds like you and you're interested in transforming the legal technology industry, then we want to hear from you.",
        benefits: ["Remote Work Opportunities", "Paid Time Off (PTO)"],
        qualification: "<p>Bachelors/Master’s in Design or equivalent</p><p>4+ years of total work experience working as a Product/UX Designer, preferably in a dynamic start-up environment</p><p>Proficiency in Arabic language is a must</p>",
        responsibilities: "<ol><li>Partner with Product Managers, engineers, researchers, and content strategist to oversee the user experience of a product from conception until launch and beyond.</li><li>Develop and design the Personas, User journey, Interaction patterns, Task Flows, process flows, wireframes, and mock-ups to effectively conceptualize and communicate high-level design strategies and detailed interaction models.</li><li>Manage projects autonomously and serve as a design expert with a cross-functional team.</li><li>Using techniques like storyboards and sketching to communicate interactive design concepts to stakeholders.</li><li>Applying a user-centered approach to requirements and inter dependencies – to develop engaging interfaces.</li><li>Conduct design experiments and validation exercises like A/B testing, usability testing etc and effectively use quantitative and qualitative data to drive decisions and measure success.</li><li>Analyze customer data through funnel and examine high traffic screens to determine why certain journeys perform better</li><li>Create surveys for research through various media platforms to gather feedback on user’s ease of use and satisfaction interfacing on company websites and products</li></ol>",
        skills: "<ol><li>React js</li><li>Next js</li><li>Bootstrap</li><li>Node js</li><li>Express js</li><li>PHP</li><li>MySQL</li></ol>",
        industry: "Information Technology",
        jobShift: "First Shift (Day)",
        department: "MERN Stack Developer",
        gender: "No Preference",
        minimumEducation: "Bachelor",
        careerLevel: "Experienced Professional",
        applicantCounts: "150",
        experience: "1 Years",
    },
    {
        id: "6",
        positionTitle: "Mern Stack Developer",
        jobType: "Temporary",
        noOfOpenings: "9",
        expirationDate: "10/19/22",
        jobStatus: "Open",
        postedDate: 'May 24, 2020',
        company: {
            title: "Cyber Tech Group",
            address: "Hybrid remote in Ann Arbor, MI 48109"
        },
        jobLocation: "PAC remote in Ann Arbor, ND 33109",
        salary: {
            type: "single",
            value: "20,000",
            rate: "GBP/hour",
        },
        aboutPosition: "The successful UI/UX Designer will work to deliver a complex enterprise-grade Desktop, Web, and Cloud solutions with local and offshore colleagues. As a designer, you're a true expert in your field and a strong advocate for the customer. You're formally trained in design and passionate about customer-centric innovation. You take pride in your work. You obsess over details and iterate on them until you've gotten it right. You see feedback as a good thing. You're a great storyteller who is at ease presenting and comfortable discussing your work with colleagues and stakeholders. You challenge old ways of thinking and put the customer at the center of everything you do. User-Centered Design methodologies are second nature to you.If this sounds like you and you're interested in transforming the legal technology industry, then we want to hear from you.",
        benefits: ["Remote Work Opportunities", "Paid Time Off (PTO)"],
        qualification: "<p>Bachelors/Master’s in Design or equivalent</p><p>4+ years of total work experience working as a Product/UX Designer, preferably in a dynamic start-up environment</p><p>Proficiency in Arabic language is a must</p>",
        responsibilities: "<ol><li>Partner with Product Managers, engineers, researchers, and content strategist to oversee the user experience of a product from conception until launch and beyond.</li><li>Develop and design the Personas, User journey, Interaction patterns, Task Flows, process flows, wireframes, and mock-ups to effectively conceptualize and communicate high-level design strategies and detailed interaction models.</li><li>Manage projects autonomously and serve as a design expert with a cross-functional team.</li><li>Using techniques like storyboards and sketching to communicate interactive design concepts to stakeholders.</li><li>Applying a user-centered approach to requirements and inter dependencies – to develop engaging interfaces.</li><li>Conduct design experiments and validation exercises like A/B testing, usability testing etc and effectively use quantitative and qualitative data to drive decisions and measure success.</li><li>Analyze customer data through funnel and examine high traffic screens to determine why certain journeys perform better</li><li>Create surveys for research through various media platforms to gather feedback on user’s ease of use and satisfaction interfacing on company websites and products</li></ol>",
        skills: "<ol><li>React js</li><li>Next js</li><li>Bootstrap</li><li>Node js</li><li>Express js</li><li>PHP</li><li>MySQL</li></ol>",
        industry: "Information Technology",
        jobShift: "First Shift (Day)",
        department: "MERN Stack Developer",
        gender: "No Preference",
        minimumEducation: "Bachelor",
        careerLevel: "Experienced Professional",
        applicantCounts: "150",
        experience: "2 Years",
    }
];

const modifiedJobs = jobs.map((job) => {
    return {
        id: job.id,
        positionTitle: job.positionTitle,
        noOfOpenings: job.noOfOpenings,
        expirationDate: job.expirationDate,
        salary: job.salary.value + ' ' + job.salary.rate,
        jobStatus: job.jobStatus,
        employer: {
            title: job.company.title,
            address: job.company.address,
        },
        postedDate: job.postedDate,
        shortSummery: [
            { title: "industry", value: job.industry },
            { title: "gender", value: job.gender },
            { title: "package", value: job.salary.value + ' ' + job.salary.rate },
            { title: "minimum Education", value: job.minimumEducation },
            { title: "total Positions", value: job.noOfOpenings },
            { title: "career Level", value: job.careerLevel },
            { title: "job Shift", value: job.jobShift },
            { title: "experience", value: job.experience },
            { title: "job Type", value: job.jobType },
            { title: "apply Before", value: job.expirationDate },
            { title: "department", value: job.department },
            { title: "posting Date", value: job.postedDate },
            { title: "job Location", value: job.jobLocation },
        ],
    };
});

function ViewJob() {
    const location = useLocation();
    const parts = location?.pathname.split('/');
    const id = parts[parts.length - 1];
    const data = modifiedJobs.find(job => job.id === id);
    return (
        <>
            <Breadcrumb
                heading="Job Details"
                breadcrumb={breadcrumb}
            />
            <JobDetails data={data} pageType="view" />
        </>
    );
}

export default ViewJob;

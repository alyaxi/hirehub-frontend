import React, { useState } from 'react';
import { CandidateProfile, } from '../../../components';
import projectImg1 from '../../../assets/images/projects/project1.png'
import projectImg2 from '../../../assets/images/projects/project2.png'
import projectImg3 from '../../../assets/images/projects/project3.png'
import projectImg4 from '../../../assets/images/projects/project4.png'
import projectImg5 from '../../../assets/images/projects/project5.jpg'
import logo1 from "../../../assets/images/company-logos/logo1.png";
import logo2 from "../../../assets/images/company-logos/logo2.png";
import logo3 from "../../../assets/images/company-logos/logo3.png";
import logo4 from "../../../assets/images/company-logos/logo4.png";
import logo5 from "../../../assets/images/company-logos/logo4.png";

function ManageProfileCandidate() {
    const personalInformation = {
        name: "John Francois22",
        statusLine: "Design Lead | Author of the 'Design Manual' and the 'Ultimate Guide to Web Design' | Teaching 300,000+ Designers Worldwide",
        phoneNo: "+1 215-538-6957",
        email: "michaeljfuller@rhyta.com",
        profileCompletion: "50",
    }

    const experience = [
        {
            title: "Art Director",
            company: "Techigon Software House",
            startDate: "Nov 2022 - Present · 4 yrs 7 mos",
            description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making.",
            logo: logo3,
        },
        {
            title: "Graphics Designer",
            company: "ITHUB Software House",
            startDate: "Nov 2010 - Present · 7 yrs 1 mos",
            description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
            logo: logo5,
        },
        // {
        //     title: "UI/UX Designer",
        //     company: "Horizon Software House",
        //     startDate: "Nov 2015 - Present · 6 yrs 7 mos",
        //     description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
        //     logo: logo1,
        // }
    ]
    const education = [
        {
            degree: "MPhil Economics",
            school: "Koc University",
            startDate: "Nov 2015 - Present · 7 yrs 7 mos",
            description: "Over the last couple of years I've worked on 10+ projects across different fields among which are MVPs for start-ups, cosmetics & beauty industry, e-commerce, art & architecture, photography and others.",
            logo: logo2,
        },
        {
            degree: "BS Computer Science ",
            school: "Oxford University",
            startDate: "Nov 2018 - Present · 3 yrs 9 mos",
            description: "Cosmetics & beauty industry, e-commerce, art & architecture, photography and others.",
            logo: logo3,
        },
        // {
        //     degree: "BS Hons ",
        //     school: "Adamjee University",
        //     startDate: "Nov 2018 - Present · 5 yrs",
        //     description: "Projects across different fields among which are MVPs for start-ups, cosmetics & beauty industry, e-commerce, art & architecture, photography and others.",
        //     logo: logo4,
        // }
    ]
    const skill = [
        {
            addNewSkills: "React.js",
            proficiency: '6 years',
        },
        {
            addNewSkills: "Next.js",
            proficiency: '4 years',
        },
        {
            addNewSkills: "Node.js",
            proficiency: '2 years',
        }
    ]
    const summary = [
        {
            text: "Including a summary in your job application provides a brief overview of your qualifications, skills, and career goals, helping recruiters assess your fit for the position.",
        },
    ]
    const projects = [
        {
            title: "Project 1",
            link: "https://www.shutterstock.com/image-vector/website-template-design-vector-illustration-260nw-1059153563.jpg",
            img: projectImg1,
        },
        {
            title: "Project 2",
            link: "https://www.shutterstock.com/image-vector/web-design-template-vector-illustration-260nw-1362343523.jpg",
            img: projectImg2,
        },
        {
            title: "Project 3",
            link: "https://previews.123rf.com/images/darkovujic/darkovujic1809/darkovujic180900011/110267002-landing-page-template-of-web-design-modern-flat-design-concept-of-web-page-design-for-website-and.jpg",
            img: projectImg3,
        },
        // {
        //     title: "Project 4",
        //     link: "https://mir-s3-cdn-cf.behance.net/projects/404/469b22176695451.64c95edd2a9e7.jpg",
        //     img: projectImg4,
        // },
        // {
        //     title: "Project 5",
        //     link: "https://i.pinimg.com/736x/f6/52/22/f65222d817856ce6d0ae8bebcd998168.jpg",
        //     img: projectImg5,
        // },
    ]
    const language = [
        {
            addNewLanguage: "Spanish",
            proficiency: "Intermediate",
        },
        {
            addNewLanguage: "German",
            proficiency: "Basic",
        },
        {
            addNewLanguage: "French",
            proficiency: "Expert",
        }
    ]
    const jobPreference = {
        desiredJobTitle: ["abc", 'xyz'],
        desiredSalary: 20000,
        relocation: {
            anywhere: true,
            onlyNearMe: { locations: ['kjlk'] }
        },
        desiredSalary: 50000,
        skills: ["Angular Js"],
        onlyNearMeonlyNearMe: "",
    }
    const [resumePrivacySetting, setResumePrivacySetting] = useState('Public');
    const handlePrivacyChange = (e) => {
        setResumePrivacySetting(e.target.value);
    };
    let name = 'John Francois'
    const firstLetter = name ? name.trim().charAt(0).toUpperCase() : '';

    const extractedData = {

    }
    const handleNext = () => {
        console.log("handleNext")
    }

    return (
        <CandidateProfile
            handleNext={handleNext}
            data={extractedData}
            personalInformation={personalInformation}
            summary={summary}
            projects={projects}
            experience={experience}
            education={education}
            skill={skill}
            language={language}
            jobPreference={jobPreference}
        />
    );
}

export default ManageProfileCandidate;

import React, { useState } from 'react';
import { Core } from '..';
import dropdownOptions from '../../data/dropdownOptions.json';

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



    const [jobTitle, setJobTitle] = useState("")
    const [location, setLocation] = useState("")
    const [salary, setSalary] = useState("")
    const [experience, setExperience] = useState("")
    const [jobShift, setJobShift] = useState("")
    const [skills, setSkills] = useState("")
    const [industry, setIndustry] = useState("")
    const [funtionalArea, setFuntionalArea] = useState("")
    const [company, setCompany] = useState("")





    console.log("jobTitle", jobTitle)
    console.log("location", location)
    console.log("salary", salary)
    console.log("experience", experience)
    console.log("jobShift", jobShift)
    console.log("skills", skills)
    console.log("industry", industry)
    console.log("funtionalArea", funtionalArea)
    console.log("company", company)

    return (
        <>
            <div className='w-full mb-2'>



                <div className={`flex justify-start items-center gap-1 w-full`}>
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
                        <Core.Button sm type="narrow" color="white" >Search</Core.Button>
                    </div>
                </div>



                <div>
                    <Core.Dropdown2 options={salaryOptions_String} setState={setSalary} defaultTitle="Salary" menuWidth={'w-[190px]'} />
                    {/* city ???? */}
                    {/* <Core.Dropdown2 options={cityOptions} setState={setCity} defaultTitle="City" menuWidth={'w-[190px]'} /> */}
                    <Core.Dropdown2 options={experienceOptions_String} setState={setExperience} defaultTitle="Experience" menuWidth={'w-[190px]'} />
                    <Core.Dropdown2 options={jobShift_String} setState={setJobShift} defaultTitle="Job Shift" menuWidth={'w-[190px]'} />
                    <Core.Dropdown2 options={skillsOptions_String} setState={setSkills} defaultTitle="Skills" menuWidth={'w-[190px]'} />
                    {/* years of experience ???? */}
                    <Core.Dropdown2 options={industryOptions_String} setState={setIndustry} defaultTitle="Industry" menuWidth={'w-[190px]'} />
                    <Core.Dropdown2 options={funtionalAreaOptions_String} setState={setFuntionalArea} defaultTitle="Funtional Area" menuWidth={'w-[190px]'} />
                    <Core.Dropdown2 options={companyOptions_String} setState={setCompany} defaultTitle="Company" menuWidth={'w-[190px]'} />
                    {/* quick apply ???? */}
                </div>


            </div>
            <div className='flex justify-between gap-x-6 w-full'>
                <div className='w-full'>
                    <div className='flex flex-col gap-y-3 pb-[50px]'>
                        <Core.Card className={'p-5'}>
                            {/* <Core.PersonalInformation data={personalInformation} user={user} /> */}
                            card
                        </Core.Card>
                    </div>
                </div>
                <div className='flex flex-col gap-y-3 min-w-[310px]'>
                    <Core.Card className={'p-5'}>
                        card
                    </Core.Card>
                </div>
            </div>
        </>
    )
}

export default JobPosts
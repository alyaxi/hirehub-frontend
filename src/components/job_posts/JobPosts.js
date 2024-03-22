import React, { useEffect, useState } from "react";
import { Core, JobDetails } from "..";
import dropdownOptions from "../../data/dropdownOptions.json";
import Icon from "../icon";
import { DownOutlined } from "@ant-design/icons";
import {
  Dropdown,
  Space,
  Divider,
  Button,
  theme,
  Modal,
  Form,
  Spin,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  applyforJob,
  getAllJobsforCandidate,
} from "../../Slices/Candidates/CandidateJobsSlice";
import notificationService from "../../utilis/notification";
import { ToastContainer } from "react-toastify";
import { ErrorMessage, Field, Formik } from "formik";

// const jobPosts = [
//     {
//         _id: "1",
//         aboutPosition: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\n",
//         applicationCount: 0,
//         benefits: ['Health Insurance'],
//         careerLevel: "Senior Level",
//         department: "Graphics Designers",
//         experience: "1",
//         expirationDate: "2024-01-10T00:00:00.000Z",
//         gender: "Male",
//         industry: "Art and Design",
//         isDeleted: false,
//         jobLocation: "Palo Alto, CA",
//         jobShift: "Second Shift (Afternoon)",
//         jobStatus: "Closed",
//         jobType: "Temporary",
//         minimumEducation: "Bachelor's Degree",
//         noOfOpenings: "20",
//         positionTitle: "Full Stack Developer",
//         postedDate: "01/26/24 5:25pm",
//         qualification: "<p>paragraph 1</p>",
//         responsibilities: "<p>paragraph 2</p>",
//         salary: { type: 'range', value: '$3000 - $3500', rate: 'GBP/hour' },
//         skills: "<ul><li>a</li><li>b</li></ul>",
//         employer: {
//             address: "Alternative AV", title: "Cyber Tech Group"
//         }
//     },
//     {
//         _id: "2",
//         aboutPosition: "Contrary to popular belief, Lorem Ipsum is not simply random text.\nIt has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.\nRichard McClintock, a Latin professor at Hampden-Sydney\nCollege in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,\ndiscovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,\n\"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.\n",
//         applicationCount: 0,
//         benefits: ['Vision Insurance', 'Paid Time Off (PTO)'],
//         careerLevel: "Mid Level",
//         department: "Marketing",
//         experience: "0.5",
//         expirationDate: "2024-01-11T00:00:00.000Z",
//         gender: "Male",
//         industry: "Accounting",
//         isDeleted: false,
//         jobLocation: "Plantation, FL",
//         jobShift: "Second Shift (Afternoon)",
//         jobStatus: "Open",
//         jobType: "Remote",
//         minimumEducation: "Associate's Degree",
//         noOfOpenings: "20",
//         positionTitle: "Product UX Designer(Retail)",
//         postedDate: "01/26/24 5:05pm",
//         qualification: "<p>paragraph 1</p>",
//         responsibilities: "<p>paragraph 2</p>",
//         salary: { type: 'range', value: '$3000 - $3500', rate: 'GBP/hour' },
//         skills: "<ul><li>a</li><li>b</li></ul>",
//         employer: {
//             address: "Plantation, FL", title: "Chewy"
//         }
//     }
// ]

const {
  salaryOptions_String,
  experienceOptions_String,
  jobShift_String,
  skillsOptions_String,
  industryOptions_String,
  funtionalAreaOptions_String,
  companyOptions_String,
} = dropdownOptions;

function JobPosts() {
  const { useToken } = theme;
  const dispatch = useDispatch();
  const jobPosts = useSelector((state) => state?.candidateJobs?.allJobs);
  const reload = useSelector((state) => state?.candidateJobs?.reload);

  // console.log("jobPosts", jobPosts);

  let sortedArray = [];

  if (Array.isArray(jobPosts)) {
    sortedArray = Array.isArray(jobPosts)
      ? [...jobPosts]?.sort((a, b) =>
          b?.postedDate?.localeCompare(a?.postedDate)
        )
      : [];
  } else {
    // console.error('jobPosts is not an array.');
    sortedArray = [];
  }

  // console.log("sortedArray", sortedArray);

  const [open, setOpen] = useState(false);

  const handleMenuClick = (e) => {
    if (e.key === "3") {
      setOpen(false);
    }
  };

  const handleOpenChange = (nextOpen, info) => {
    if (info.source === "trigger" || nextOpen) {
      setOpen(nextOpen);
    }
  };

  useEffect(() => {
    // console.log("reload..")
    try {
      dispatch(getAllJobsforCandidate())
        .unwrap()
        .then((res) => {
          console.log("Successfully fetched data", res);
        })
        .catch((err) => {
          console.error(`Error Fetching Data ${err}`);
        });
    } catch (error) {
      console.error(`Error in useEffect of Dashboard ${error}`);
    }
  }, [reload]);

  const items = [
    {
      key: "1",
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
      key: "2",
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
      key: "3",
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
      key: "4",
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
    boxShadow: "none",
  };

  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");
  const [experience, setExperience] = useState("");
  const [jobShift, setJobShift] = useState("");
  const [skills, setSkills] = useState("");
  const [industry, setIndustry] = useState("");
  const [funtionalArea, setFuntionalArea] = useState("");
  const [company, setCompany] = useState("");

  const [selectedJob, setSelectedJob] = useState("");
  const [selectedJobId, setSelectedJobId] = useState("");

  const [savingForm, setSavingForm] = useState(false);

  const [data] = useState({
    whyApply: "",
    availability: "",
    whyForUs: "",
    threeQualities: "",
    notify: false,
    quickApply: false,
  });

  console.log('selectedJobId jobpost',selectedJobId);

  const openJob = (id) => {
    // console.log("====== id", id)
    const _selectedJob = sortedArray.find((job) => job._id === id);
    setSelectedJob(_selectedJob);
    setSelectedJobId(id);
  };

  const closeDetail = () => {
    // console.log("closeDetail called")
    setSelectedJob("");
    setSelectedJobId("");
  };

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

  const onApply = (id) => {
    console.log("id", id);
    setIsModalOpen(true);
    setSelectedJobId(id);
    // showModal()
    // try {
    //   console.log(selectedJobId, "jobIddd");
    //   dispatch(
    //     applyforJob({
    //       employerId: selectedJob?.employer[0]?.userId,
    //       jobId: selectedJobId,
    //     })
    //   )
    //     .then(() => {
    //       notificationService.success("Application Sent Successfully");
    //     })
    //     .catch((err) => {
    //       notificationService.error("Error Sending");
    //     });
    // } catch (error) {
    //   notificationService.danger("Error Sending");
    // }
  };

  // const handleSubmit = (values) => {
  //   console.log("handleSubmit called");
  //   console.log("values", values);
  // };

  // console.log("filterby", {
  //   jobTitle: jobTitle,
  //   location: location,
  //   salary: salary,
  //   experience: experience,
  //   jobShift: jobShift,
  //   skills: skills,
  //   industry: industry,
  //   funtionalArea: funtionalArea,
  //   company: company,
  // });

  // console.log(selectedJob.positionTitle);
  // console.log(selectedJob.positionTitle !== "" ? "ys" : "no");

  return (
    <>
      <ToastContainer></ToastContainer>

      <Core.PopupModalJob isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} type={'type'} action={'action'} id={selectedJobId} selectedJobData={selectedJob} index={'index'} />

      {/* <Modal
        // title={"title"}
        width={715}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[]}
      >
        <Formik
          initialValues={data}
          // validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue, values }) => {
            console.log("formik values", values);
            return (
              <Form>
                <div>
                  <h6
                    className={`text-[22px] leading-[22px] capitalize font-semibold `}
                  >
                    Product UX Designer(Retail)
                  </h6>
                  <span className="text-purple- 4 text-[12px] leading-[22px] underlin e capitalize font-medium mb-2">
                    companyName
                  </span>
                  <p className="text-gray-6 text-[12px] leading-[20px]">
                    <span>jobType</span>
                    employer?.address
                  </p>
                </div>
                <br />

                <div className="flex justify-between items-center pt-1 mb-2">
                  <div className="flex justify-start items-center gap-x-1">
                    <Field type="checkbox" name="quickApply" />
                    Quick Apply
                    <ErrorMessage
                      name="quickApply"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                </div>

                <br />
                <p className="text-black-1 text-[14px] font-semibold mb-2">
                  Quick reply for these questions
                </p>
                <div className="mb-4">
                  <Field name="whyApply">
                    {({ field }) => (
                      <Core.InputWithLabel
                        {...field}
                        sm
                        name="whyApply"
                        label
                        bgGray
                        edit
                      />
                    )}
                  </Field>
                </div>
                <div className="mb-4">
                  <Field name="availability">
                    {({ field }) => (
                      <Core.InputWithLabel
                        {...field}
                        sm
                        name="availability"
                        label
                        bgGray
                        edit
                      />
                    )}
                  </Field>
                </div>
                <div className="mb-4">
                  <Field name="whyForUs">
                    {({ field }) => (
                      <Core.InputWithLabel
                        {...field}
                        sm
                        name="whyForUs"
                        label
                        bgGray
                        edit
                      />
                    )}
                  </Field>
                </div>
                <div className="mb-4">
                  <Field name="threeQualities">
                    {({ field }) => (
                      <Core.InputWithLabel
                        {...field}
                        sm
                        name="threeQualities"
                        label
                        bgGray
                        edit
                      />
                    )}
                  </Field>
                </div>
                <div className="flex justify-between items-center pt-1 mb-2">
                  <div className="flex justify-start items-center gap-x-1">
                    <Field type="checkbox" name="notify" />
                    Notify me when similar jobs are available
                    <ErrorMessage
                      name="notify"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                </div>

                <div className="flex justify-between pt-6 mt-8 border-t-[1px]">
                  <div className="flex justify-start gap-x-3 ">
                    {savingForm ? (
                      <div className=" flex justify-center items-center w-[77px] bg-white border text-[18px] leading-[20px] rounded-[8px] py-[12px]">
                        <Spin />
                      </div>
                    ) : (
                      <Core.Button
                        type="narrow"
                        submit
                        onClick={() => handleSubmit(values)}
                        isDisabled={
                          values?.whyApply === "" ||
                          values?.availability === "" ||
                          values?.whyForUs === "" ||
                          values?.threeQualities === ""
                        }
                      >
                        Quick Apply
                      </Core.Button>
                    )}
                    <Core.Button
                      type="narrow"
                      color="white"
                      // onClick={() => {
                      //   handleCancel();
                      //   resetForm();
                      //   if (action === "add") {
                      //     setDescription("");
                      //     setSelectedStartMonth("");
                      //     setSelectedEndMonth("");
                      //     setSelectedStartYear("");
                      //     setSelectedEndYear("");
                      //     setStartDate("");
                      //     setEndDate("");
                      //     setProjectImage("");
                      //     setCancelImg(true);
                      //   }
                      // }}
                    >
                      Back
                    </Core.Button>
                  </div>
                </div>
              </Form>
            );
          }}
        </Formik>
      </Modal> */}

      <div className="w-full mb-2">
        <div className={`flex justify-start items-center w-full mb-4`}>
          <Core.InputWithLabel
            name={"SearchByJobTitle"}
            onChange={(e) => setJobTitle(e.target.value)}
            sm
            className={"w-full"}
            iconic
          />
          <div className="flex justify-start gap-x-1 items-center w-full">
            <Core.InputWithLabel
              type="text"
              name={"SearchByLocation"}
              onChange={(e) => setLocation(e.target.value)}
              sm
              iconic
            />
            <Core.Button
              sm
              type="narrow"
              color="white"
              className={"max-w-[100px]"}
            >
              Search
            </Core.Button>
          </div>
        </div>

        <div className="flex justify-start items-center flex-wrap gap-2 w-full">
          <Core.Dropdown2
            options={salaryOptions_String}
            setState={setSalary}
            defaultTitle="Salary"
            menuWidth={"w-[190px]"}
          />
          {/* city ???? */}
          {/* <Core.Dropdown2 options={cityOptions} setState={setCity} defaultTitle="City" menuWidth={'w-[190px]'} /> */}
          <Core.Dropdown2
            options={experienceOptions_String}
            setState={setExperience}
            defaultTitle="Experience"
            menuWidth={"w-[190px]"}
          />

          {/* <Dropdown

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
                    </Dropdown> */}

          <Core.Dropdown2
            options={jobShift_String}
            setState={setJobShift}
            defaultTitle="Job Shift"
            menuWidth={"w-[190px]"}
          />
          <Core.Dropdown2
            options={skillsOptions_String}
            setState={setSkills}
            defaultTitle="Skills"
            menuWidth={"w-[190px]"}
          />
          {/* years of experience ???? */}
          <Core.Dropdown2
            options={industryOptions_String}
            setState={setIndustry}
            defaultTitle="Industry"
            menuWidth={"w-[190px]"}
          />
          <Core.Dropdown2
            options={funtionalAreaOptions_String}
            setState={setFuntionalArea}
            defaultTitle="Funtional Area"
            menuWidth={"w-[190px]"}
          />
          <Core.Dropdown2
            options={companyOptions_String}
            setState={setCompany}
            defaultTitle="Company"
            menuWidth={"w-[190px]"}
          />
          {/* quick apply ???? */}
        </div>
      </div>
      <div className="flex justify-between gap-x-6 w-full pt-5">
        <div className="flex flex-col gap-y-3 w-full pb-[50px]">
          {sortedArray?.map((job, index) => {
            return (
              <Core.Card
                key={job.positionTitle + index}
                className={`
                                    flex flex-col gap-y-3 w-full
                                    // $ { selectedJobId === job._id ? 'border-[2pt] border-purple-1' : "border-[1pt] border-gray-11"}
                                    border-[2px]
                                    ${
                                      selectedJobId === job._id
                                        ? "border-purple-1"
                                        : "border-[transparent] hover:border-gray-11"
                                    } 
                                    transition-all
                                    cursor-pointer p-4
                                `}
              >
                <div
                  onClick={() => openJob(job?._id)}
                  className="w-full h-full flex justify-between flex-col"
                >
                  <div className="flex justify-between">
                    <div>
                      <h6 className="text-[16px] leading-[14px] capitalize font-medium">
                        {job?.positionTitle}
                      </h6>
                      <a className="text-purple-4 text-[12px] leading-[18px] underline capitalize font-medium mb-2">
                        {job?.employer?.title}
                      </a>
                      <p className="text-gray-6 text-[12px] leading-[20px]">
                        <span>{job?.jobType},&nbsp;&nbsp;</span>
                        {job?.employer?.address}
                      </p>
                    </div>
                    <span className="text-gray-8 cursor-pointer px-1">
                      <Icon name="Options" />
                    </span>
                  </div>
                  <p className="text-gray-6 text-[14px] leading-[20px] max-h-[61px] overflow-hidden mt-5 mb-2">
                    {job?.aboutPosition}
                  </p>
                  <div className="flex justify-start gap-x-6 text-gray-14 text-[12px] leading-[20px] py-1">
                    <span className="flex justify-start items-center gap-x-1">
                      <Icon name="Calender2" size={18} /> {job?.postedDate}
                    </span>{" "}
                    <span className="flex justify-start items-center gap-x-1">
                      <Icon name="Currency" />
                      {job?.salary?.value}
                    </span>
                  </div>
                </div>
              </Core.Card>
            );
          })}
        </div>
        {selectedJob.positionTitle !== undefined && (
          <div className="w-full">
            <JobDetails
              data={selectedJob}
              pageType="quickView"
              closeDetail={closeDetail}
              onApply={onApply}
            />
          </div>
        )}
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
  );
}

export default JobPosts;

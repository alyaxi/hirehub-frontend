import React, { useState } from 'react';
import { Breadcrumb, } from '../../../../components/core';
import { JobDetails, } from '../../../../components';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import notificationService from '../../../../utilis/notification';
import { ChangeStatusJob } from '../../../../Slices/Employer/JobSlice';
import { useNavigate } from "react-router-dom"


const breadcrumb = [
    { label: "Dashboard", link: "/admin/dashboard" },
    { label: "Manage Jobs" },
    { label: "Job Details" },
];

function EditJob() {
    const location = useLocation();
    const parts = location?.pathname.split('/');
    const id = parts[parts.length - 1];
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const jobs = useSelector((state) => state?.jobSlice.jobs);
    const data = jobs.find(job => job.id === id);
    const [status, setStatus] = useState();
    console.log("status", status)


    const handleNext = () => {
        console.log(status, "statusssssssssssss")
        try {
            if (!status) return;
            console.log({ id })

            dispatch(ChangeStatusJob({ id, status })).unwrap().then(res => {
                console.log("reSSSSSSSSS", res);
                if (res.data) {
                    notificationService?.success(res?.data?.msg)
                    setTimeout(() => {
                        navigate("/employer/manage-jobs")
                    }, 2000)
                }
               

            }).catch(err => {

                // Handle other errors
                notificationService.error("An unexpected error occurred.");

            })
        } catch (error) {
            console.error(`Error in useEffect of Dashboard ${error}`)
            notificationService.error("An unexpected error occurred.");

        }
    }
    return (
        <>
            <Breadcrumb
                heading="Job Details"
                breadcrumb={breadcrumb}
            />
            <JobDetails handleNext={handleNext} data={data} setStatus={setStatus} status={status} pageType="edit" />
        </>
    );
}

export default EditJob;

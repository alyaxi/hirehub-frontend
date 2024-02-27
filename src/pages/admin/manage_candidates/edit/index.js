import React, { useState } from 'react';
import { Breadcrumb, } from '../../../../components/core';
import { UserProfile, } from '../../../../components';
import { useSelector, useDispatch } from 'react-redux';
import { changeAppliedJobStatusAdmin } from '../../../../Slices/Admin/ManageCandidate';
import notificationService from '../../../../utilis/notification';
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import dropdownOptions from '../../../../data/dropdownOptions.json';

const {
    candidateStageOptions, 
} = dropdownOptions; 

const breadcrumb = [
    { label: "Dashboard", link: "/admin/dashboard" },
    { label: "Manage Candidates", link: "/admin/manage-candidates" },
    { label: "Edit" },
];

function EditCandidates() {

    const AppliedAllJobs = useSelector((state) => state?.manageCandidateAdmin?.jobs);
    console.log(AppliedAllJobs, "AppliedAllJobs admin edit")
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [status, setStatus] = useState();
    const { id } = useParams();
    const extractedData = AppliedAllJobs?.find(item => item?.candidate?.userId === id);


    const handleNext = () => {
        // console.log(status, "statusssssssssssss")
        try {
            if (!status) return;
            console.log({ id })
            const statusCheck = status === "screening" || status === "new application" || status === "hire" || status === "selection"
                ? { appicaionStage: status }
                : { applicationStatus: status }
            console.log({ statusCheck })

            dispatch(changeAppliedJobStatusAdmin({ id, statusCheck })).unwrap().then(res => {
                // console.log("reSSSSSSSSS", res);
                if (res) {
                    notificationService.success(res?.data?.msg)
                }
                setTimeout(() => {
                    navigate("/admin/manage-candidates")
                }, 3000)
            }).catch(err => {
                console.error(`Error Fetching Data ${err}`);
                notificationService.error(err)
            })
        } catch (error) {
            console.error(`Error in useEffect of Dashboard ${error}`)
            notificationService.error(error)

        }
    }

    return (
        <>
            <ToastContainer></ToastContainer>
            <Breadcrumb
                heading="Edit Candidates"
                breadcrumb={breadcrumb}
            />
            <UserProfile
                handleNext={handleNext}
                status={status}
                setStatus={setStatus}
                data={extractedData}
                dropdownOptions={candidateStageOptions}
                pageType="edit"
                type="admin"
            />
        </>
    );
}

export default EditCandidates;

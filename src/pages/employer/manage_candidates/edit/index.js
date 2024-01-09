import React, { useState } from 'react';
import { Breadcrumb, } from '../../../../components/core';
import { Core, } from '../../../../components';
// import employersData from '../../../../data/employersData.json';
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate , useParams} from "react-router-dom";
import { changeAppliedJobStatusEmployer } from '../../../../Slices/Employer/ManageCandidate';
import notificationService from '../../../../utilis/notification';
import { ToastContainer } from 'react-toastify';



const breadcrumb = [
    { label: "Dashboard", link: "/admin/dashboard" },
    { label: "Manage Candidates", link: "/admin/manage-candidates" },
    { label: "Edit" },
];

function EditCandidates() {
    // const { tableData } = employersData;
    const  AppliedJobCandidate  = useSelector((state) => state?.manageCandidate?.jobs);
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [status, setStatus] = useState();
    
    const extractedData = AppliedJobCandidate?.find(item => item.id === id);
    console.log(extractedData, "data frm comp")

    const dropdownOptions = [
        'screening',
        'new application',
        'hire',
        "selection"
    ];
    const handleNext = () => {
        console.log(status, "statusssssssssssss")
        try {
            if (!status) return;
            console.log({ id })
            const statusCheck = status === "screening" || status === "new application" || status === "hire" || status === "selection"
            ? { appicaionStage: status }
            : { applicationStatus: status }
            console.log({ statusCheck })
            
            dispatch(changeAppliedJobStatusEmployer({ id, statusCheck })).unwrap().then(res => {
                console.log("reSSSSSSSSS", res);
                if (res) {
                    notificationService.success(res?.data?.msg)
                }
                setTimeout(() => {
                    navigate("/employer/manage-candidates")
                }, 2000)
                
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
            <Core.UserProfile handleNext={handleNext} status={status} setStatus={setStatus} data={extractedData} dropdownOptions={dropdownOptions} pageType="edit"  />
        </>
    );
}

export default EditCandidates;

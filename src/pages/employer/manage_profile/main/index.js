// import React from 'react';
// import { Core, } from '../../../../components';
// import adminData from '../../../../data/adminData.json';
// import { Breadcrumb, } from '../../../../components/core';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { getEmployerById } from '../../../../Slices/Employer/EmployerSlice';

// const breadcrumb = [
//     { label: "Dashboard", link: "/employer/dashboard" },
//     { label: "View Profile" },
// ];

// function ManageProfile() {

//     const { profile } = adminData;

//     return (
//         <>
//             <Breadcrumb
//                 breadcrumb={breadcrumb}
//             />
//             <Core.ViewProfile data={profile} />
//         </>
//     );
// }

// export default ManageProfile;










import React, { useEffect } from 'react';
import { Core, } from '../../../../components'; 
import { Breadcrumb, } from '../../../../components/core';
import { useDispatch, useSelector } from 'react-redux';
import { getEmployerById } from '../../../../Slices/Employer/EmployerSlice';

const breadcrumb = [
    { label: "Dashboard", link: "/employer/dashboard" },
    { label: "Profile Information" },
];

function ViewProfile() {
    // const { profile } = adminData;
    const dispatch = useDispatch()
    const viewprofile = useSelector((state) => state?.employer?.employer);
    const reload = useSelector((state) => state?.employer?.reload);

    // console.log("data3", viewprofile)

    useEffect(() => {
        try {
            dispatch(getEmployerById()).unwrap().then(res => {
                console.log("DATAAAAAAAAAAAAAAAAA", res);

            }).catch(err => {
                console.error(`Error Fetching Data ${err}`);
            });
        } catch (error) {
            console.error(`Error in useEffect of Dashboard ${error}`)

        }
    }, [reload])

    return (
        <>
            <Breadcrumb
                breadcrumb={breadcrumb}
            />
            <Core.ViewProfile data={viewprofile} />
        </>
    );
}

export default ViewProfile;




// import React from 'react';
// import { Core, } from '../../../../components';
// import { useNavigate } from "react-router-dom"

// function ViewProfile({ data }) {

//     // console.log("ViewProfile data", data)

//     const navigate = useNavigate();

//     const editProfile = () => {
//         navigate("/employer/manage-profile/edit")
//     }

//     return (
//         <Core.Card className={`py-[20px] px-[20px]`}>
//             <div className='flex justify-between'>
//                 <h5 className='text-black-2 text-[24px] leading-[32px] font-medium mb-4'>View Profile</h5>
//                 <Core.Button sm type="narrow" onClick={editProfile} className={"ml-3"}>Edit Profile</Core.Button>
//             </div>
//             <div className="mb-8">
//                 <h6 className={`block text-[14px] font-medium text-gray-2 tracking-wide mb-1 capitalize`}>
//                     Email
//                 </h6>
//                 <span className={`block text-[14px] font-medium text-gray-8 tracking-wide mb-2 capitalize`}>
//                     {data?.userId?.email || <span className="text-gray-6 text-[14px] leading-[25px] opacity-50">Please update your information</span>}
//                 </span>
//             </div>
//             <div className="mb-8">
//                 <h6 className={`block text-[14px] font-medium text-gray-2 tracking-wide mb-1 capitalize`}>
//                     Company Name
//                 </h6>
//                 <span className={`block text-[14px] font-medium text-gray-8 tracking-wide mb-2 capitalize`}>
//                     {data?.companyName || <span className="text-gray-6 text-[14px] leading-[25px] opacity-50">Please update your information</span>}
//                 </span>
//             </div>
//             <div className="mb-8">
//                 <h6 className={`block text-[14px] font-medium text-gray-2 tracking-wide mb-1 capitalize`}>
//                     Number of Employees
//                 </h6>
//                 <span className={`block text-[14px] font-medium text-gray-8 tracking-wide mb-2 capitalize`}>
//                     {data?.noOfEmployes || <span className="text-gray-6 text-[14px] leading-[25px] opacity-50">Please update your information</span>}
//                 </span>
//             </div>
//             <div className="mb-8">
//                 <h6 className={`block text-[14px] font-medium text-gray-2 tracking-wide mb-1 capitalize`}>
//                     Logo
//                 </h6>
//                 <span className={`block mb-2 capitalize`}>
//                     {data?.logo ?
//                         <img src={data?.logo} className='flex justify-center items-center max-w-[110px] bg-gray-12 rounded-[10px] text-[12px]' alt="Company Logo" width={150} height={150} />
//                         :
//                         <h2 className='w-[170px] text-gray-2 text-[20px] text-center rounded-[10px] opacity-70 bg-gray-5 px-1 py-3'>No Logo</h2>
//                     }
//                 </span>
//             </div>
//             <div className="mb-8">
//                 <h6 className={`block text-[14px] font-medium text-gray-2 tracking-wide mb-1 capitalize`}>
//                     Welcome Video
//                 </h6>
//                 <div className={`block max-w-[300px] rounded-[10px] overflow-hidden mb-2`}>
//                     {data?.welcomeVideo ?
//                         <Core.VideoPlayer src={data?.welcomeVideo} />
//                         :
//                         <h2 className='w-[280px] text-gray-2 text-[20px] text-center rounded-[10px] opacity-70 bg-gray-5 px-2 py-12'>No Video</h2>
//                     }
//                     {/* <img src={data?.welcomeVideo} alt="Welcome Video" /> */}
//                 </div>
//             </div>
//             <div className="mb-8">
//                 <h6 className={`block text-[14px] font-medium text-gray-2 tracking-wide mb-1 capitalize`}>
//                     Phone Number
//                 </h6>
//                 <span className={`block text-[14px] font-medium text-gray-8 tracking-wide mb-2 capitalize`}>
//                     {data?.phoneNo || <span className="text-gray-6 text-[14px] leading-[25px] opacity-50">Please update your information</span>}
//                 </span>
//             </div>
//             <div className="mb-8">
//                 <h6 className={`block text-[14px] font-medium text-gray-2 tracking-wide mb-1 capitalize`}>
//                     Company Industry
//                 </h6>
//                 <span className={`block text-[14px] font-medium text-gray-8 tracking-wide mb-2 capitalize`}>
//                     {data?.companyIndustry || <span className="text-gray-6 text-[14px] leading-[25px] opacity-50">Please update your information</span>}
//                 </span>
//             </div>
//             <div className="mb-8">
//                 <h6 className={`block text-[14px] font-medium text-gray-2 tracking-wide mb-1 capitalize`}>
//                     Company Description
//                 </h6>
//                 <span className={`block text-[14px] font-medium text-gray-8 tracking-wide mb-2 capitalize`}>
//                     {data?.description || <span className="text-gray-6 text-[14px] leading-[25px] opacity-50">Please update your information</span>}
//                 </span>
//             </div>
//         </Core.Card>
//     )
// }

// export default ViewProfile
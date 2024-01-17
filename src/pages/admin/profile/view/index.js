import React, { useEffect } from 'react';
import { Core, } from '../../../../components';
import adminData from '../../../../data/adminData.json';
import { Breadcrumb, } from '../../../../components/core';
import { useDispatch, useSelector } from 'react-redux';
import { getEmployerById } from '../../../../Slices/Employer/EmployerSlice';

const breadcrumb = [
    { label: "Dashboard", link: "/admin/dashboard" },
    { label: "View Profile" },
];

function ViewProfile() {
    const { profile } = adminData; 

    const dispatch = useDispatch()
    const viewprofile = useSelector((state) => state?.employer?.employer);
    const reload = useSelector((state) => state?.employer?.reload);

    console.log("data3", viewprofile)

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

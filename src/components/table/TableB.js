import React, { useState } from 'react';
import Icon from '../icon';
import { Button, InputWithLabel, Badge } from '../core';
import { Avatar, Table, Flex } from 'antd';
import '../../assets/css/table.css'
import { Core } from '..';

function TableB({
    columns,
    data,
    filterBy,
    actions,
    onViewClick,
    onEditClick,
    onDeleteClick,
    onMessageClick,
    name,
    setName,
    title,
    setTitle,
    employer,
    setEmployer,
    setEligibility,
    setAppliedDate,
    setCandidateStage,
    setUserStatus,
    jobStatus,
    setJobStatus,
    jobTitle,
    setJobTitle,
    setExpirationDate,
}) {
    const newColumn = columns.map((value, index) => {
        let columnSorter;
        if (value.sorter === true) {
            // If sorter is true, implement a custom sorter function based on data type
            columnSorter = (a, b) => {
                if (typeof a.name === 'string' && typeof b.name === 'string') {
                    return a.name.localeCompare(b.name);
                } else if (typeof a.name === 'number' && typeof b.name === 'number') {
                    return a.name - b.name;
                } else {
                    // Handle other data types if needed
                    return 0; // No sorting
                }
            };
        } else if (value.sorter === false) {
            // If sorter is explicitly false, don't define a sorter function
            columnSorter = undefined;
        }
        return {
            ...value,
            render: (val, id) => {
                const firstLetter = val?.name ? val.name.trim().charAt(0).toUpperCase() : '';
                if (value.dataIndex === "name" || value.dataIndex === "employerName" || value.dataIndex === "companyName") {
                    return (
                        <>
                            {val?.img ?
                                <div className='flex justify-start items-center gap-x-2 min-w-[140px]'>
                                    <img className="inline-block h-[30px] w-[30px] rounded-full" src={val?.img} alt="profile image" />
                                    <Avatar src={val?.img}>{firstLetter}</Avatar>
                                    <span className='whitespace-nowrap font-semibold'>{val?.name}</span>
                                </div> :
                                <span>{val}</span>
                            }
                        </>
                    )
                }
                else if (value.dataIndex === "payment") {
                    return (
                        <div className='capitalize'>
                            {val}
                        </div>
                    )
                }
                else if (value.dataIndex === "account") {
                    return (
                        <div className='w-full text-center'>
                            <Badge>{id.account}</Badge>
                        </div>
                    )
                }
                else if (value.dataIndex === "stage") {
                    return <div className='w-full text-center'><Badge>{id.stage}</Badge></div>;
                }
                else if (value.dataIndex === "status") {
                    return <div className='w-full text-center'><Badge>{id.status}</Badge></div>;
                }
                else if (value.dataIndex === "jobStatus") {
                    return <div className='w-full text-center'><Badge>{id.jobStatus}</Badge></div>;
                }
                else if (value.dataIndex === "accountStatus") {
                    return (
                        <div className='w-full text-center'>
                            <Badge>{id.accountStatus}</Badge>
                        </div>
                    )
                }
                else if (value.dataIndex === "action") {
                    return (
                        <Flex gap="small">
                            {actions.view &&
                                <span className='text-gray-6 hover:text-purple-2 cursor-pointer'
                                    onClick={() => onViewClick(id?.id)}>
                                    <Icon name="View" />
                                </span>
                            }
                            {actions.edit &&
                                <span className='text-gray-6 hover:text-purple-2 cursor-pointer'
                                    onClick={() => onEditClick(id?.id)}>
                                    <Icon name="Edit" />
                                </span>
                            }
                            {actions.delete &&
                                <span className='text-gray-6 hover:text-purple-2 cursor-pointer'
                                    onClick={() => onMessageClick(id?.id)}>
                                    <Icon name="Delete" />
                                </span>
                            }
                            {actions.message &&
                                <span className='text-gray-6 hover:text-purple-2 cursor-pointer'
                                    onClick={() => onMessageClick(id?.id)}>
                                    <Icon name="Message" />
                                </span>
                            }
                            {actions.date &&
                                <span className='text-gray-6 hover:text-purple-2 cursor-pointer'>
                                    <Icon name="Calender1" />
                                </span>
                            }
                        </Flex>
                    )
                }
                else if (value.dataIndex === "positionTitle") {
                    return <span className='whitespace-nowrap font-medium'>{val}</span>;
                }
                else {
                    return <span className='text-gray-6'>{val}</span>;
                }
            },
            sorter: columnSorter,
        }
    });

    const handleTableChange = (pagination, filters, sorter) => {
        // Handle pagination change here
        // Update the data displayed based on the new page number or other changes
        // You might want to update your data source or fetch new data here
        console.log(pagination); // Use pagination object to get current, pageSize, total, etc.
    };
    const UserStatusdropdownOptions = [
        'new',
        'attempted to contact',
        'Connected',
        'On Hold',
        'Qualified',
        'Not Interested',
        'Unqualified',
    ];

    const CandidateStagedropdownOptions = [
        'New Application ',
        'Screening',
        'Interview',
        'Selection',
        'Job Offer',
        'Hire',
    ];
    const JobStatusDropdownOptions = [
        'Open',
        'Closed',
        'Republished',
    ];
    // Inside TableB component
    const [resetTrigger, setResetTrigger] = useState(false);
    const [resetTrigger2, setResetTrigger2] = useState(false);
    const [resetTrigger3, setResetTrigger3] = useState(false);

    const resetFilters = () => {
        console.log("resetFilters", resetFilters)
        setJobTitle && setJobTitle('');
        setName && setName('');
        setTitle && setTitle('');
        setEmployer && setEmployer('');
        setEligibility && setEligibility('');
        setExpirationDate && setExpirationDate('');
        console.log("resetFilters", resetFilters)
        setResetTrigger((prev) => !prev); // Toggle the trigger to re-render
        setResetTrigger2((prev) => !prev); // Toggle the trigger to re-render
        setResetTrigger3((prev) => !prev); // Toggle the trigger to re-render

        //         setName
        // setTitle
        // setEmployer
        // setEligibility
        // setJobTitle
    };
    // setJobStatus
    return (
        <div className="flex flex-col bg-white rounded-[8px] overflow-hidden border shadow-md">
            <div className="-m-1.5 overflow-x-auto">
                <div className="p-1.5 min-w-full inline-block align-middle">
                    <div className="overflow-hidden ">
                        <div className="bg-white flex justify-between items-center py-3 px-5">
                            <span className='text-black-2 text-[18px] leading-[28px] font-medium'>Filters</span>
                            <div className='flex justify-end items-center gap-1'>
                                {filterBy?.map(value => {
                                    //   const stateValue = () => {
                                    //     if (value === 'SearchByName') {
                                    //         return name
                                    //     }
                                    //     if (value === 'SearchByTitle') {
                                    //         return title
                                    //     }
                                    //     if (value === 'SearchByEmployer') {
                                    //         return employer
                                    //     } 
                                    //     if (value === 'SearchByJobTitle') {
                                    //         return jobTitle
                                    //     }
                                    //     return ""
                                    // }
                                    const onInputChange = (e) => {
                                        if (value === 'SearchByName') {
                                            setName(e.target.value);
                                        }
                                        if (value === 'SearchByTitle') {
                                            setTitle(e.target.value);
                                        }
                                        if (value === 'SearchByEmployer') {
                                            setEmployer(e.target.value);
                                        }
                                        if (value === 'SearchByEligibility') {
                                            setEligibility(e.target.value);
                                        }
                                        if (value === 'SearchByJobTitle') {
                                            setJobTitle(e.target.value);
                                        }
                                    }
                                    const onDateChange = (e) => {
                                        if (value === 'SearchByExpirationDate') {
                                            setExpirationDate(e.target.value);
                                        }
                                        if (value === 'SearchByAppliedDate') {
                                            setAppliedDate(e.target.value);
                                        }
                                    }

                                    let inputWidth = 'auto'
                                    switch (value) {
                                        case 'SearchByName':
                                            inputWidth = 'w-[160px]';
                                            break;
                                        case 'SearchByTitle':
                                            inputWidth = 'w-[150px]';
                                            break;
                                        case 'SearchByEmployer':
                                            inputWidth = 'w-[100px]';
                                            break;
                                        case 'SearchByEligibility':
                                            inputWidth = 'w-[100px]';
                                            break;
                                        case 'SearchByJobStatus':
                                            inputWidth = 'w-[100px]';
                                            break;
                                        case 'SearchByJobTitle':
                                            inputWidth = 'w-[100px]';
                                            break;
                                        default:
                                            break;
                                    }
                                    if (value === "SearchByAppliedDate") {
                                        return (
                                            <InputWithLabel  key={resetTrigger2 ? 'reset' : 'normal'} name={'calender'} setValue={setAppliedDate} onChange={onDateChange} sm />
                                        )
                                    }
                                    if (value === "SearchByExpirationDate") {
                                        return (
                                            <InputWithLabel  key={resetTrigger3 ? 'reset' : 'normal'} name={'calender'} setValue={setExpirationDate} onChange={onDateChange} sm />
                                        )
                                    }
                                    if (value === "SearchByUserStatus") {
                                        return (
                                            <Core.Dropdown2 options={UserStatusdropdownOptions} setState={setUserStatus} defaultTitle="Status" menuWidth={'w-[190px]'} />
                                        )
                                    }
                                    if (value === "SearchByCandidateStage") {
                                        return (
                                            <Core.Dropdown2 options={CandidateStagedropdownOptions} setState={setCandidateStage} defaultTitle="Stage" menuWidth={'w-[150px]'} />
                                        )
                                    }
                                    if (value === "SearchByJobStatus") {
                                        return (
                                            <Core.Dropdown2 options={JobStatusDropdownOptions} setState={setJobStatus} defaultTitle="Job Status" menuWidth={'w-[150px]'} />
                                        )
                                    }
                                    else {
                                        // console.log("value", value)
                                        return (
                                            <InputWithLabel
                                                key={resetTrigger ? 'reset' : 'normal'} // Change the key to trigger re-render
                                                name={value} onChange={onInputChange}
                                                // value={stateValue}
                                                sm className={inputWidth} />
                                        )
                                    }
                                })}
                                <div className='flex justify-end items-center gap-1'>
                                    <Button sm type="narrow" >Search</Button>
                                    <Button sm type="narrow" color="white" icon="Cross" onClick={resetFilters}>Reset</Button>
                                </div>
                            </div>
                        </div>
                        <div className="overflow-hidden">
                            <Table
                                columns={newColumn}
                                dataSource={data}
                                pagination={{ pageSize: 10 }} // Set your desired page size
                                onChange={handleTableChange} // Handle pagination change
                            />
                        </div>
                        <div className="flex justify-between items-center border-t py-5 px-4">
                            {/* <span className='text-gray-6 text-[14px] leading-[20px] font-semibold'>
                                Showing 1-10 from 100
                            </span> */}
                            {/* <Pagination defaultCurrent={6} total={500} /> */}
                            {/* itemBg={"#000"} itemInputBg={"#fcfcfc"} itemLinkBg={"#f6cf6c"} itemSize="100" */}
                            {/* <nav className="flex items-center space-x-1">
                                <button type="button" className="w-[32px] h-[32px] flex items-center gap-x-2 text-sm rounded-[8px] text-purple-4 bg-purple-7 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 p-2.5 ">
                                    <span aria-hidden="true">
                                        <Icon name="ChevronLeft" size="10" />
                                    </span>
                                    <span className="sr-only">Previous</span>
                                </button>
                                <button type="button" className="w-[32px] h-[32px] flex justify-center items-center text-purple-4 text-[14px] leading-[20px] font-semibold bg-purple-7 py-2.5 rounded-[8px] disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10" aria-current="page">1</button>
                                <button type="button" className="w-[32px] h-[32px] flex justify-center items-center text-purple-4 text-[14px] leading-[20px] font-semibold bg-purple-7 py-2.5 rounded-[8px] disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10">2</button>
                                <button type="button" className="w-[32px] h-[32px] flex justify-center items-center text-purple-4 text-[14px] leading-[20px] font-semibold bg-purple-7 py-2.5 rounded-[8px] disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10">3</button>
                                <button type="button" className="w-[32px] h-[32px] flex items-center gap-x-2 text-purple-4 text-[14px] leading-[20px] font-semibold bg-purple-7 rounded-[8px] disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 p-2.5 ">
                                    <span className="sr-only">Next</span>
                                    <span aria-hidden="true">
                                        <Icon name="ChevronRight" size="10" />

                                    </span>
                                </button>
                            </nav> */}
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default TableB








// import React, { useState } from 'react';
// import { Table } from 'antd';

// const TableComponent = () => {
//   const [dataSource, setDataSource] = useState([]);

//   // Generate dummy data
//   const generateData = () => {
//     const data = [];
//     for (let i = 1; i <= 50; i++) {
//       data.push({
//         key: i,
//         name: `John Doe ${i}`,
//         age: 25 + i,
//         address: `New York No. ${i} Lake Park`,
//       });
//     }
//     setDataSource(data);
//   };

//   // Set initial data
//   useState(() => {
//     generateData();
//   }, []);

//   // Columns for the table
//   const columns = [
//     {
//       title: 'Name',
//       dataIndex: 'name',
//       key: 'name',
//     },
//     {
//       title: 'Age',
//       dataIndex: 'age',
//       key: 'age',
//     },
//     {
//       title: 'Address',
//       dataIndex: 'address',
//       key: 'address',
//     },
//   ];

//   return (
//     <div>
//       <h2>Ant Design Table with Pagination</h2>
//       <Table
//         dataSource={dataSource}
//         columns={columns}
//         pagination={{ pageSize: 5 }} // Set the number of rows per page
//       />
//     </div>
//   );
// };

// export default TableComponent;

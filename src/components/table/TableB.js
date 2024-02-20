import React, { useState } from 'react';
import Icon from '../icon';
import { Avatar, Table, Flex, Button } from 'antd';
import '../../assets/css/table.css'
import { Core } from '..';

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

function TableB({
    tableId,
    border,
    columns,
    data,
    filterBy,
    actions,
    onViewClick,
    onEditClick,
    onStageClick,
    onDeleteClick,
    onMessageClick,
    onCalenderClick,
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
    setProduct,
    setEmailProcess,
    addQuestion,
    addButton
}) {

    // console.log(data, "tableDataa")

    const newColumn = columns.map((value, index) => {

        let columnSorter;
        if (value.sorter === true) {
            columnSorter = (a, b) => {
                if (typeof a.name === 'string' && typeof b.name === 'string') {
                    return a.name.localeCompare(b.name);
                } else if (typeof a.name === 'number' && typeof b.name === 'number') {
                    return a.name - b.name;
                } else {
                    return 0;
                }
            };
        } else if (value.sorter === false) {
            columnSorter = undefined;
        }
        return {
            ...value,
            render: (val, id, record, rowIndex) => {
                const firstLetter = val?.name ? val.name.trim().charAt(0).toUpperCase() : '';
                if (value.dataIndex === "name" || value.dataIndex === "employerName" || value.dataIndex === "companyName") {
                    return (
                        <React.Fragment key={`render-${value.dataIndex}-${index}`}>
                            {val?.img ?
                                <div className={`render-${value.dataIndex}-${index} flex justify-start items-center gap-x-2 min-w-[140px]`}>
                                    <img className="inline-block h-[30px] w-[30px] rounded-full" src={val?.img} alt="profile image" />
                                    <Avatar src={val?.img}>{firstLetter}</Avatar>
                                    <span className='whitespace-nowrap font-semibold'>{val?.name}</span>
                                </div> :
                                <span>{val}</span>
                            }
                        </React.Fragment>
                    )
                }
                else if (value.dataIndex === "payment") {
                    return (
                        <div className='capitalize' key={`render-${value.dataIndex}-${index}`}>
                            {val}
                        </div>
                    )
                }
                else if (value.dataIndex === "question") {
                    return (
                        <>
                            {val !== "" &&
                                <div className='capitalize' key={`render-${value.dataIndex}-${index}`} dangerouslySetInnerHTML={{ __html: val }}></div>
                            }
                        </>
                    )
                }
                else if (value.dataIndex === "account") {
                    return (
                        <div className='w-full text-center' key={`render-${value.dataIndex}-${index}`}>
                            <Core.Badge>{id.account}</Core.Badge>
                        </div>
                    )
                }
                else if (value.dataIndex === "stage") {
                    return <div key={`render-${value.dataIndex}-${index}`} className='w-full text-center'><Core.Badge>{id.stage}</Core.Badge></div>;
                }
                else if (value.dataIndex === "status") {
                    return <div key={`render-${value.dataIndex}-${index}`} className='w-full text-center'><Core.Badge>{id.status}</Core.Badge></div>;
                }
                else if (value.dataIndex === "jobStatus") {
                    return <div key={`render-${value.dataIndex}-${index}`} className='w-full text-center'><Core.Badge>{id.jobStatus}</Core.Badge></div>;
                }
                else if (value.dataIndex === "process") {
                    return <div key={`render-${value.dataIndex}-${index}`} className='w-full text-center'>
                        <Button
                            onClick={() => onStageClick && onStageClick(id?._id)}
                        >
                            Proceed to Next
                        </Button>

                    </div>;
                }

                else if (value.dataIndex === "accountStatus") {
                    return (
                        <div key={`render-${value.dataIndex}-${index}`} className='w-full text-center'>
                            <Core.Badge>{id.accountStatus}</Core.Badge>
                        </div>
                    )
                }
                else if (value.dataIndex === "positionTitle") {
                    return <span key={`render-${value.dataIndex}-${index}`} className='whitespace-nowrap font-medium'>{val}</span>;
                }
                else if (value.dataIndex === "emailTitle") {
                    // const htmlText = val?.text
                    // const tempElement = document.createElement('div');
                    // tempElement.innerHTML = htmlText;
                    // const textContent = tempElement.textContent || tempElement.innerText;
                    // const initialText = textContent.slice(0, 140);
                    return <span key={`render-${value.dataIndex}-${index}`} className='whitespace-nowrap font-medium'>
                        {val?.subject}
                    </span>;
                }
                else if (value.dataIndex === "salary") {
                    return <span key={`render-${value.dataIndex}-${index}`}>{val?.value || val || "-"}</span>;
                }
                else if (value.dataIndex === "action") {
                    // console.log(id, "idddddddlll")
                    return (
                        <Flex className={`gap-x-2 ${tableId === "email_template" && 'justify-center gap-x-[35px]'}`} key={`render-${value.dataIndex}-${index}`}>
                            {actions.view &&
                                <span className={`text-gray-6 hover:text-purple-2 cursor-pointer ${tableId === "email_template" && 'order-2'}`}
                                    onClick={() => onViewClick(id?.id)}>
                                    <Icon name="View" />
                                </span>
                            }
                            {actions.edit &&
                                <span className={`text-gray-6 hover:text-purple-2 cursor-pointer ${tableId === "email_template" && 'order-1'}`}
                                    onClick={() => onEditClick(id?.id || id?._id)}>
                                    <Icon name="Edit" />
                                </span>
                            }
                            {actions.delete &&
                                <span className={`text-gray-6 hover:text-purple-2 cursor-pointer`}
                                    onClick={() => onDeleteClick(id?.id || id?._id)}>
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
                                <span className='text-gray-6 hover:text-purple-2 cursor-pointer'
                                    onClick={() => onCalenderClick(id?.jobId, id?.candidate?.userId)}>
                                    <Icon name="Calender1" />
                                </span>
                            }
                        </Flex>
                    )
                }
                else if (value.dataIndex === "employer") {
                    return (
                        <span key={`render-${value.dataIndex}-${index}`}>
                            {val?.title}
                        </span>
                    )
                }
                else {
                    return <span className='text-gray-6' key={`render-${value.dataIndex}-${index}`}>{val}</span>;
                }
            },
            sorter: columnSorter,
        }
    });

    const handleTableChange = (pagination, filters, sorter) => {
        console.log(pagination);
    };
    const [resetTrigger, setResetTrigger] = useState(false);
    const [resetTrigger2, setResetTrigger2] = useState(false);
    const [resetTrigger3, setResetTrigger3] = useState(false);

    const resetFilters = () => {
        setJobTitle && setJobTitle('');
        setName && setName('');
        setTitle && setTitle('');
        setEmployer && setEmployer('');
        setEligibility && setEligibility('');
        setExpirationDate && setExpirationDate('');
        setProduct && setProduct('');
        setResetTrigger((prev) => !prev);
        setResetTrigger2((prev) => !prev);
        setResetTrigger3((prev) => !prev);
    };
    // console.log("data", data)
    return (
        <div className={`flex flex-col bg-white rounded-[8px] overflow-hidden ${border === 'none' ? 'border-0' : 'border shadow-md'}`}>
            <div className="-m-1.5 overflow-x-auto">
                <div className="p-1.5 min-w-full inline-block align-middle">
                    <div className="overflow-hidden ">
                        <div className="bg-white flex justify-between items-center gap-x-2 py-3 px-5">

                            {filterBy.length ?
                                <>
                                    {(!filterBy.includes("SearchByProduct") || !filterBy.includes("SearchByEmailProcess")) &&
                                        <span className='text-black-2 text-[18px] leading-[28px] font-medium'>Filters</span>}
                                </>
                                :
                                null
                            }
                            <div className={`flex ${addButton ? '' : 'justify-end'} items-center gap-1 w-full`}>
                                {filterBy?.map((value, index) => {
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
                                        if (value === 'SearchByProduct') {
                                            setProduct(e.target.value);
                                        }
                                        if (value === 'SearchByEmailProcess') {
                                            setEmailProcess(e.target.value);
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
                                            <Core.InputWithLabel key={resetTrigger2 ? ('reset' + value) : ('normal' + value)} name={'calender'} setValue={setAppliedDate} onChange={onDateChange} sm />
                                        )
                                    }
                                    if (value === "SearchByExpirationDate") {
                                        return (
                                            <Core.InputWithLabel key={resetTrigger3 ? ('reset' + value) : ('normal' + value)} name={'calender'} setValue={setExpirationDate} onChange={onDateChange} sm />
                                        )
                                    }
                                    if (value === "SearchByUserStatus") {
                                        return (
                                            <Core.Dropdown2 key={`userStatus-${index}`} options={UserStatusdropdownOptions} setState={setUserStatus} defaultTitle="Status" menuWidth={'w-[190px]'} />
                                        )
                                    }
                                    if (value === "SearchByCandidateStage") {
                                        return (
                                            <Core.Dropdown2 key={`candidateStage-${index}`} options={CandidateStagedropdownOptions} setState={setCandidateStage} defaultTitle="Stage" menuWidth={'w-[150px]'} />
                                        )
                                    }
                                    if (value === "SearchByProduct") {
                                        return (
                                            <div key={`searchProduct-${index}`} className='flex justify-start items-center w-full'>
                                                <Core.SearchInput onInputChange={onInputChange} name="searchProduct" />
                                                <Core.Button sm type="narrow" onClick={addQuestion} className={"ml-3"}>Add Question</Core.Button>
                                            </div>
                                        )
                                    }
                                    if (value === "SearchByEmailProcess") {
                                        return (
                                            <div key={`SearchByEmailProcess-${index}`} className='flex justify-start items-center w-full'>
                                                <Core.SearchInput onInputChange={onInputChange} name="SearchByEmailProcess" />
                                                {/* <Core.Button sm type="narrow" onClick={addQuestion} className={"ml-3"}>Add Question</Core.Button> */}
                                            </div>
                                        )
                                    }
                                    if (value === "SearchByJobStatus") {
                                        return (
                                            <Core.Dropdown2 key={`jobStatus-${index}`} options={JobStatusDropdownOptions} setState={setJobStatus} defaultTitle="Job Status" menuWidth={'w-[150px]'} />
                                        )
                                    }
                                    else {
                                        return (
                                            <Core.InputWithLabel
                                                key={resetTrigger ? ('reset' + value) : ('normal' + value)}
                                                name={value} onChange={onInputChange}
                                                sm className={inputWidth} />
                                        )
                                    }
                                })}
                                {filterBy && filterBy.length > 2 ? <div className='flex justify-end items-center gap-1'>
                                    <Core.Button sm type="narrow" >Search</Core.Button>
                                    <Core.Button sm type="narrow" color="white" icon="Cross" onClick={resetFilters}>Reset</Core.Button>
                                </div> : null}
                            </div>
                            {/* <div> */}
                            {addButton &&
                                <Core.Button sm type="narrow" onClick={addButton?.func} className={"ml-3"}>{addButton?.title}</Core.Button>
                            }
                            {/* </div> */}
                        </div>
                        <div className="overflow-hidden">
                            <Table
                                columns={newColumn}
                                // dataSource={data}
                                dataSource={data.map(_data => ({ ..._data, key: _data.id }))}
                                pagination={{ pageSize: 10 }}
                                onChange={handleTableChange}
                            />
                        </div>
                        {/* <div className="flex justify-between items-center border-t py-5 px-4"> 
                        </div> */}
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

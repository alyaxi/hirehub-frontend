import React, { useState } from 'react';
import Icon from '../icon';
import { Button, InputWithLabel, Badge } from '../core';
import { Avatar, Pagination } from 'antd';

function Table({
    columns,
    data,
    filterBy,
    actions,
    onViewClick,
    onEditClick,
    onDeleteClick,
}) {
    const tableHeading = (col) => {
        switch (col) {
            case "name":
            case "plans":
            case "account":
                return <div className='flex justify-between items-center w-full'>
                    {col}
                    <span className='text-gray-8 cursor-pointer'>
                        <Icon name="Sort1" />
                    </span>
                </div>;

            case "createdOn":
                return "Created On";
            case "nextPayment":
                return "Next Payment";

            default:
                return col;
        }
    };
    const renderTableCell = (td, col) => {
    const firstLetter = td?.name ? td.name.trim().charAt(0).toUpperCase() : '';
    // console.log("td--", td)
        if (typeof td === "string") td = td.toLowerCase();
        switch (col) {
            case "payment":
                if (td === true) {
                    return ("Paid");
                }
                return ("Unpaid");
            case "name":
                if (td?.img) {
                    return <div className='flex justify-start items-center gap-x-2 min-w-[140px]'>
                        {/* <img className="inline-block h-[30px] w-[30px] rounded-full" src={td?.img} alt="profile image" /> */}
                        <Avatar src={td?.img}>{firstLetter}</Avatar>
                        <span className='whitespace-nowrap'>{td?.name}</span>
                    </div>;
                }
                else {
                    return <span>{td}</span>;
                }
            case "jobTitle":
                return td;
            case "eligibility":
                if (td === true) {
                    return "Yes";
                }
                return "No";
            case "account":
            case "stage":
            case "status":
                return <div className='w-full text-center'><Badge>{td}</Badge></div>;
            // case "duration":
            //     return `${convertDaysToYearsAndMonths(td)}`;
            // case "cost":
            //     return `$${td}`;
            // case "date":
            //     return `${formatDateAndTime(td)}`;
            // case "createdOn":
            //     return `${formatDateAndTime(td)}`;
            default:
                return <span className='whitespace-nowrap'>{td}</span>;
        }
    };
    return (
        <div className="flex flex-col bg-white rounded-[8px] overflow-hidden shadow-md">
            <div className="-m-1.5 overflow-x-auto">
                <div className="p-1.5 min-w-full inline-block align-middle">
                    <div className="overflow-hidden ">
                        <div className="bg-white flex justify-between items-center py-3 px-5 ">
                            <span className='text-black-2 text-[18px] leading-[28px] font-medium'>Filters</span>
                            <div className='flex justify-end items-center gap-1'>
                                {filterBy?.map(value => {
                                    return (
                                        <InputWithLabel name={value} />
                                    )
                                })}
                                <div className='flex justify-end items-center gap-1'>
                                    <Button type="narrow">Search</Button>
                                    <Button type="narrow" color="white" icon="Cross">Reset</Button>
                                </div>
                            </div>
                        </div>
                        <div className="overflow-hidden">
                            <table className="min-w-full divide-y">
                                <thead className="bg-gray-9 dark:bg-gray-700 text-left">
                                    <tr>
                                        {columns?.map(value => {
                                            return (
                                                <>
                                                    {/* <th scope="col" className="py-3 px-4 pe-0">
                                                    <div className="flex items-center h-5">
                                                        <input id=" hs-table-pagination-checkbox-all" type="checkbox" className="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" />
                                                        <label for="hs-table-pagination-checkbox-all" className="sr-only">Checkbox</label>
                                                    </div>
                                                </th> */}
                                                    <th scope="col" className="text-black-2 text-[13px] leading-[19px] font-semibold px-5 py-3">
                                                        <div className='flex justify-between'>
                                                            <span className='w-full capitalize'>{tableHeading(value)}</span>
                                                        </div>
                                                    </th>
                                                </>
                                            )
                                        })}
                                    </tr>

                                </thead>
                                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                    {/* <td className="py-3 ps-4">
                                            <div className="flex items-center h-5">
                                                <input id="hs-table-pagination-checkbox-1" type="checkbox" className="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" />
                                                <label for="hs-table-pagination-checkbox-1" className="sr-only">Checkbox</label>
                                            </div>
                                        </td> */}
                                    {data.map(row => (
                                        <tr key={row * 5}>
                                            {columns.map(column => {
                                                if (column === "action" && actions) {
                                                    return (
                                                        <td
                                                            key={column}
                                                            className="flex justify-center items-center gap-x-2 h-[54px] whitespace-nowrap text-gray-6 dark:text-gray-200 text-[13px] leading-[19px] font-medium 
                                                            px-3 py-0
                                                            "
                                                        // maxW="500px"
                                                        // overflow={"auto"}
                                                        // isNumeric
                                                        // borderColor={"gray.200"}
                                                        >
                                                            {actions?.view && (
                                                                <span className='cursor-pointer'
                                                                    onClick={() => onViewClick(row._id)
                                                                    }>
                                                                    <Icon name="View" />
                                                                </span>
                                                            )}
                                                            {actions?.edit && (
                                                                <span className='cursor-pointer'
                                                                    onClick={() => onEditClick(row._id)
                                                                    }>
                                                                    <Icon name="Edit" />
                                                                </span>
                                                            )}
                                                            {actions?.message && (
                                                                <span className='cursor-pointer'
                                                                    onClick={() => onDeleteClick(row._id)
                                                                    }>
                                                                    <Icon name="Message" />
                                                                </span>
                                                            )}
                                                            {actions?.date && (
                                                                <span className='cursor-pointer'>
                                                                    <Icon name="Calender1" size="20" />
                                                                </span>
                                                            )}
                                                        </td>
                                                    );
                                                }
                                                return (
                                                    <td key={column * 5} className="h-[54px] text-gray-6 dark:text-gray-200 text-[13px] leading-[19px] capitalize font-medium
                                                      px-3 py-0
                                                            ">
                                                        {/* {row[column]} */}
                                                        {renderTableCell(row[column], column)}
                                                    </td>
                                                )

                                                {/* <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-teal-500 text-white">Badge</span> */ }

                                            })}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="flex justify-between items-center border-t py-5 px-4">
                            <span className='text-gray-6 text-[14px] leading-[20px] font-semibold'>
                                Showing 1-10 from 100
                            </span>
                            <Pagination defaultCurrent={6} total={500} />
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

export default Table
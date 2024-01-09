import React from 'react';
import { Badge, Breadcrumb, StatsGroup } from '../../../../components/core';
import avatar1 from "../../../../assets/images/avatars/2.png";
import { Pagination, Space, Table, Tag } from 'antd';
import Icon from '../../../../components/icon';
import TableB from '../../../../components/table/TableB';

const breadcrumb = [
    { label: "Dashboard", link: "/admin/dashboard" },
    { label: "Manage Employers"},
];

function ManageEmployers() {
    const statsData = [
        {
            title: "Approved Employers",
            count: "20",
            iconName: "People",
        },
        {
            title: "Employer’s Request",
            count: "50",
            iconName: "Users",
        },
        {
            title: "Rejected Employers",
            count: "10",
            iconName: "ProfileDelete",
        },
    ];

    const _columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            sorter: true,
        },
        {
            title: 'Plans',
            dataIndex: 'plans',
            key: 'plans',
            sorter: true,
        },
        {
            title: 'Payment',
            dataIndex: 'payment',
            key: 'payment',
        },
        {
            title: 'Next Payment',
            dataIndex: 'nextPayment',
            key: 'nextPayment',
        },
        {
            title: 'Account',
            key: 'account',
            dataIndex: 'account',
            sorter: true,
        },
        {
            title: 'Action',
            key: 'action',
            dataIndex: 'action',
        },
    ];

    // const columns = [
    //     {
    //         title: 'Name',
    //         dataIndex: 'name',
    //         key: 'name',
    //         render: (name) => {
    //             return (
    //                 <>
    //                     {name?.img ?
    //                         <div className='flex justify-start items-center gap-x-2 min-w-[140px]'>
    //                             <img className="inline-block h-[30px] w-[30px] rounded-full" src={name?.img} alt="profile image" />
    //                             <span className='whitespace-nowrap'>{name?.name}</span>
    //                         </div> :
    //                         <span>{name}</span>
    //                     }
    //                 </>
    //             )
    //         },
    //         sorter: (a, b) => a.name - b.name,
    //     },
    //     {
    //         title: 'Plans',
    //         dataIndex: 'plans',
    //         key: 'plans',
    //         sorter: (a, b) => a.plans - b.plans,
    //     },
    //     {
    //         title: 'Payment',
    //         dataIndex: 'payment',
    //         key: 'payment',
    //         render: (payment) => (
    //             <div className='capitalize' >
    //                 {payment}
    //             </div>
    //         ),
    //     },
    //     {
    //         title: 'Next Payment',
    //         dataIndex: 'nextPayment',
    //         key: 'nextPayment',
    //     },
    //     {
    //         title: 'Account',
    //         key: 'account',
    //         dataIndex: 'account',
    //         render: (_, { accounts }) => (
    //             <>
    //                 {accounts.map((account) => {
    //                     return (
    //                         <div className='w-full text-center' key={account}>
    //                             <Badge>{account}</Badge>
    //                         </div>
    //                     );
    //                 })}
    //             </>
    //         ),
    //         sorter: (a, b) => a.account - b.account,
    //     },
    //     {
    //         title: 'Action',
    //         key: 'action',
    //         render: (_, record) => (
    //             <Space size="middle">
    //                 <span className='cursor-pointer'
    //                 // onClick={() => onViewClick(row._id)
    //                 // }
    //                 >
    //                     <Icon name="View" />
    //                 </span>
    //                 <span className='cursor-pointer'
    //                 // onClick={() => onEditClick(row._id)
    //                 // }
    //                 >
    //                     <Icon name="Edit" />
    //                 </span>
    //                 <span className='cursor-pointer'
    //                 // onClick={() => onDeleteClick(row._id)
    //                 // }
    //                 >
    //                     <Icon name="Message" />
    //                 </span>
    //             </Space>
    //         ),
    //     },
    // ];

    const data = [
        {
            key: '1',
            name: {
                img: avatar1,
                name: "Handmade Pouch",
            },
            payment: 'paid',
            nextPayment: '10/19/25 5:45am',
            plans: 'Silver Plan',
            accounts: ['active',],
        },
        {
            key: '2',
            name: {
                img: avatar1,
                name: "Handmade Pouch",
            },
            payment: 'unpaid',
            nextPayment: '10/19/25 5:45am',
            plans: 'Browns Plan',
            accounts: ['Deactive'],
        },
        {
            key: '3',
            name: {
                img: avatar1,
                name: "Handmade Pouch",
            },
            payment: 'paid',
            nextPayment: '10/19/25 5:45am',
            plans: 'Platinum Plan',
            accounts: ['hold',],
        },
    ];

    return (
        <>
            <Breadcrumb
                heading="Manage Employers"
                breadcrumb={breadcrumb}
            />
            <StatsGroup data={statsData} />
            <TableB
                columns={_columns}
                data={data}
            />

        </>
    );
}

export default ManageEmployers;

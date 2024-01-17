// src\utilis\statsData.js
import { useSelector } from 'react-redux';

export const useStatsData = () => {
  const employersTableData = useSelector((state) => state?.admin?.employersDataTable);
  const approvedEmpLength = employersTableData.filter(x => x.isVerified === "Approved").length;
  const pendingEmpLength = employersTableData.filter(x => x.isVerified === "Pending").length;
  const rejectedEmpLength = employersTableData.filter(x => x.isVerified === "Rejected").length;

  const data = [
    {
      title: "Approved Employers",
      count: approvedEmpLength,
      iconName: "People",
      link: "/admin/approved-employers"
    },
    {
      title: "Employer’s Request",
      count: pendingEmpLength,
      iconName: "Users",
      link: "/admin/employers-request"
    },
    {
      title: "Rejected Employers",
      count: rejectedEmpLength,
      iconName: "ProfileDelete",
      link: "/admin/rejected-employers"
    }
  ];

  return data;
};

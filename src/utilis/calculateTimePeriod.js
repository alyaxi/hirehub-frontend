// export function calculateTimePeriod(startDate, endDate) {

//     // console.log('startDate',startDate)
//     // console.log('endDate',endDate)

//     const startDateObject = new Date(startDate);
//     let endDateObject;

//     if (endDate === 'present') {
//         endDateObject = new Date(); // Current date/time
//     } else {
//         endDateObject = new Date(endDate);
//     }

//     const startYear = startDateObject.getFullYear();
//     const startMonth = startDateObject.toLocaleString('default', { month: 'short' });

//     const endYear = endDateObject.getFullYear();
//     const endMonth = endDateObject.toLocaleString('default', { month: 'short' });

//     const yearsDiff = endYear - startYear;
//     const monthsDiff = (endYear - startYear) * 12 + (endDateObject.getMonth() - startDateObject.getMonth());

//     let result = `${startMonth} ${startYear}`;

//     if (endDate === 'present') {
//         result += ' - Present';
//     } else {
//         result += ` - ${endMonth} ${endYear}`;
//     }

//     result += ` · ${yearsDiff} yrs ${monthsDiff} mos`;
//     // console.log('result',result)

//     return result;
// }




export function calculateTimePeriod(startDate, endDate) {
 
    const startDateObject = new Date(startDate);
    let endDateObject;
  
    if (endDate === "present") {
      endDateObject = new Date(); // Current date/time
    } else {
      endDateObject = new Date(endDate);
    }
  
    const startYear = startDateObject.getFullYear();
    const startMonth = startDateObject.toLocaleString("default", {
      month: "short",
    });
  
    const endYear = endDateObject.getFullYear();
    const endMonth = endDateObject.toLocaleString("default", { month: "short" });
  
    const yearsDiff = endYear - startYear;
  
    // Calculate total months difference
    const totalMonthsDiff =
      (endYear - startYear) * 12 +
      (endDateObject.getMonth() - startDateObject.getMonth()) +
      1;
  
    console.log("88 totalMonthsDiff", totalMonthsDiff);
  
    // Calculate years difference in months
    const yearsInMonths = yearsDiff * 12;
  
    // Calculate months difference
    const monthsDiff = totalMonthsDiff - yearsInMonths;
  
    let result = `${startMonth} ${startYear}`;
  
    if (endDate === "present") {
      result += " - Present";
    } else {
      result += ` - ${endMonth} ${endYear}`;
    }
  
    // Update result based on months difference
    if (monthsDiff === 12) {
      result += ` · ${yearsDiff + 1} years`;
    } else {
      result += ` · ${yearsDiff} ${
        yearsDiff === 1 ? "year" : "years"
      } ${monthsDiff} ${monthsDiff === 1 ? "month" : "months"}`;
    }
  
    return result;
  }
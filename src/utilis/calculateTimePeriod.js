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
  console.log("7777777 startDate",startDate)
  console.log("7777777 endDate",endDate)
  // const startDateObject = new Date(startDate);
  // let endDateObject;

  // if (endDate === "present") {
  //   endDateObject = new Date(); // Current date/time
  // } else {
  //   endDateObject = new Date(endDate);
  // }

  const startDateParts = startDate.split("/");
  const endDateParts = endDate.split("/");

  // Create Date objects for startDate and endDate
  let startDateObject;

  if (startDateParts.length === 2) {
    startDateObject = new Date(
      parseInt(startDateParts[1]), // Year
      parseInt(startDateParts[0]) - 1, // Month (subtract 1 as months are 0-indexed)
      1 // Day (set to 1 as day is not provided)
    );
  } else {
    startDateObject = new Date(startDate);
  }

  let endDateObject;

  if (endDate === "present") {
    endDateObject = new Date(); // Current date/time
  } else {
    // endDateObject = new Date(
    //   parseInt(endDateParts[1]), // Year
    //   parseInt(endDateParts[0]) - 1, // Month (subtract 1 as months are 0-indexed)
    //   1 // Day (set to 1 as day is not provided)
    // );

    if (endDateParts.length === 2) {
      endDateObject = new Date(
        parseInt(endDateParts[1]), // Year
        parseInt(endDateParts[0]) - 1, // Month (subtract 1 as months are 0-indexed)
        1 // Day (set to 1 as day is not provided)
      );
    } else {
      endDateObject = new Date(endDate);
    }
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
    result += ` · ${yearsDiff !== 0 ? yearsDiff : ""}
     ${yearsDiff !== 0 ? (yearsDiff === 1 ? "year" : "years") : ""}
      ${monthsDiff}
      ${monthsDiff === 1 ? "month" : "months"}`;
  }

  return result;
}

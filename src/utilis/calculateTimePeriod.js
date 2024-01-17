export function calculateTimePeriod(startDate, endDate) {
    const startDateObject = new Date(startDate);
    let endDateObject;

    if (endDate === 'present') {
        endDateObject = new Date(); // Current date/time
    } else {
        endDateObject = new Date(endDate);
    }

    const startYear = startDateObject.getFullYear();
    const startMonth = startDateObject.toLocaleString('default', { month: 'short' });

    const endYear = endDateObject.getFullYear();
    const endMonth = endDateObject.toLocaleString('default', { month: 'short' });

    const yearsDiff = endYear - startYear;
    const monthsDiff = (endYear - startYear) * 12 + (endDateObject.getMonth() - startDateObject.getMonth());

    let result = `${startMonth} ${startYear}`;

    if (endDate === 'present') {
        result += ' - Present';
    } else {
        result += ` - ${endMonth} ${endYear}`;
    }

    result += ` · ${yearsDiff} yrs ${monthsDiff} mos`;

    return result;
}
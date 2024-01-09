export function convertDateFormat(inputDate) {
    // Create a Date object from the input string
    const dateObject = new Date(inputDate);
  
    // Extract date components
    const year = dateObject.getFullYear().toString().slice(2);
    const month = (dateObject.getMonth() + 1).toString().padStart(2, '0');
    const day = dateObject.getDate().toString().padStart(2, '0');
    const hours = dateObject.getHours().toString().padStart(2, '0');
    const minutes = dateObject.getMinutes().toString().padStart(2, '0');
  
    // Determine if it's AM or PM
    const ampm = hours >= 12 ? 'pm' : 'am';
  
    // Convert hours to 12-hour format
    const hours12 = (hours % 12) || 12;
  
    // Format the final date string
    const formattedDate = `${month}/${day}/${year} ${hours12}:${minutes}${ampm}`;
  
    return formattedDate;
  }
  
  
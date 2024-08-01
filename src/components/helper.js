export function formatToString(date) {
    
    const actualDate = new Date(date);
   
   
    actualDate.setSeconds(0);
    actualDate.setMilliseconds(0);
  
    const year = actualDate.getFullYear();
    const month = String(actualDate.getMonth() + 1).padStart(2, '0');
    const day = String(actualDate.getDate()).padStart(2, '0');
    const hour = String(actualDate.getHours()).padStart(2, '0');
    const minute = String(actualDate.getMinutes()).padStart(2, '0');
    const second = String(actualDate.getSeconds()).padStart(2, '0');
  
    const pickedDate = `Date: ${day}-${month}-${year}  Time  ${hour}:${minute}:${second}`;
    return pickedDate;
  }
import React from 'react';

const CurrentDate = () => {
    let current, months, month, year;
    current = new Date();//store today's date

    months = ['January', 'February', 'March', 'April', 'May', 'June' , 'July', 'August', 'September', 'October', 'November', 'December'];
    month = current.getMonth();

    year = current.getFullYear();

    return (
        
    <span>{months[month]} {year}</span>
        
    )
}

//months[month] + ' ' + year;
export default CurrentDate;
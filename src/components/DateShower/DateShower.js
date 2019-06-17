import React from 'react';
import './DateShower.scss';

const DateShower = (props) => {
    let weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let currentDay = weekdays[new Date().getDay()];
    let currentDate = new Date().getDate();
    let currentMonth = months[new Date().getMonth()];
    let currentYear = new Date().getFullYear();
    let suffix = 'th';

    switch (currentDate) {
        case 1:
            suffix = 'st';
            break;
        case 2:
            suffix = 'nd';
            break;
        case 3:
            suffix = 'rd';
            break;
        default:
            suffix = 'th';
    }

    return (
        <div className="todolist__date">
            <h1 className="todolist__date-title">{currentDay}, <span>{currentDate + suffix}</span></h1>
            <h2 className="todolist__month">{currentMonth}, {currentYear}</h2>
        </div>
    );
};

export default DateShower;
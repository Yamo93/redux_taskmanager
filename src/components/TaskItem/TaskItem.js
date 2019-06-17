import React from 'react';
import './TaskItem.scss';

const TaskItem = (props) => {
    return (
        <div className="task">
            <div className="task__icon">
                <i className="far fa-check-square"></i>
                {/* <i class="fas fa-check-square"></i> */}
            </div>
            <p className="task__text">{props.task}</p>
            <button className="task__deletebtn">Delete</button>
        </div>
    );
};

export default TaskItem;
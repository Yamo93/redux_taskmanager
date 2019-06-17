import React from 'react';
import './AddTaskBtn.scss';

const AddTaskBtn = (props) => {
    return (
        <div onClick={props.clicked} className="todolist__addbtn">
            <span className="todolist__addbtn-icon">+</span>
            <p className="todolist__addbtn-text">Add a task</p>
        </div>
    );
};

export default AddTaskBtn;
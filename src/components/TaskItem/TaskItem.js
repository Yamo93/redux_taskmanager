import React from 'react';
import './TaskItem.scss';

const TaskItem = (props) => {
    return (
        <div className="task" onClick={(task) => props.registerDone(props.task)}>
            <div className="task__icon">
                <i className={props.task.done ? "fas fa-check-square" : "far fa-check-square"}></i>
                {/* <i class="fas fa-check-square"></i> */}
            </div>
            <p className={props.task.done ? "task__text done" : "task__text"}>{props.task.text}</p>
            <button onClick={(task) => props.deleted(props.task)} className="task__deletebtn" data-id={props.task.id}>Delete</button>
        </div>
    );
};

export default TaskItem;
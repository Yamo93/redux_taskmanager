import React, { Component } from 'react';
import TaskItem from '../../components/TaskItem/TaskItem';
import { connect } from 'react-redux';
import './Tasks.scss';
import * as actionTypes from '../../store/actionTypes';

class Tasks extends Component {

    deleteTaskHandler = (task) => {
        this.props.onDeleteTask(task);
    }


    render() {

        return (
            <div className="tasks">
                {this.props.tasks.map(task => <TaskItem deleted={(task) => this.deleteTaskHandler(task)} key={task.id} id={task.id} task={task} />)}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        tasks: state.tsk.tasks
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddTask: () => dispatch({type: actionTypes.ADD_TASK}),
        onDeleteTask: (task) => dispatch({type: actionTypes.DELETE_TASK, task: task})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
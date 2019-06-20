import React, { Component } from 'react';
import TaskItem from '../../components/TaskItem/TaskItem';
import { connect } from 'react-redux';
import './Tasks.scss';
// import * as actionTypes from '../../store/actions/actionTypes';
import * as actionCreators from '../../store/actions/index';

class Tasks extends Component {

    deleteTaskHandler = (task) => {
        this.props.onDeleteTask(task);
    }


    render() {

        return (
            <div className="tasks">
                {this.props.tasks.map(task => <TaskItem deleted={(task) => this.deleteTaskHandler(task)} key={task.id} id={task.id} task={task} registerDone={this.props.onRegisterTaskAsDone} />)}
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
        onAddTask: () => dispatch(actionCreators.addTask()),
        onDeleteTask: (task) => dispatch(actionCreators.deleteTask(task)),
        onRegisterTaskAsDone: (task) => dispatch(actionCreators.registerTaskAsDone(task))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
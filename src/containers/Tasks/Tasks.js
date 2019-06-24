import React, { Component } from 'react';
import TaskItem from '../../components/TaskItem/TaskItem';
import { connect } from 'react-redux';
import './Tasks.scss';
// import * as actionTypes from '../../store/actions/actionTypes';
import * as actionCreators from '../../store/actions/index';

class Tasks extends Component {

    componentDidMount() {
        this.props.onGetTasks();
        console.log(this.props.tasks);
    }

    deleteTaskHandler = (task) => {
        this.props.onDeleteTaskFromDB(task);
    }


    render() {

        return (
            <div className="tasks">
                {/* <Spinner /> */}
                {this.props.tasks.map(task => <TaskItem deleted={(task) => this.deleteTaskHandler(task)} key={task.id} id={task.id} task={task} registerDone={(task) => this.props.onStoreDoneTask(task)} />)}
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
        onDeleteTaskFromDB: (task) => dispatch(actionCreators.deleteTaskFromDB(task)),
        onRegisterTaskAsDone: (task) => dispatch(actionCreators.registerTaskAsDone(task)),
        onStoreDoneTask: (task) => dispatch(actionCreators.storeDoneTask(task)),
        onGetTasks: () => dispatch(actionCreators.getTasks())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
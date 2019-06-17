import React, { Component } from 'react';
import TaskItem from '../../components/TaskItem/TaskItem';
import { connect } from 'react-redux';
import './Tasks.scss';
import * as actionTypes from '../../store/actionTypes';
import uuid from 'uuid';

class Tasks extends Component {
    render() {
        return (
            <div className="tasks">
                {this.props.tasks.map((task, index) => <TaskItem key={uuid.v1()} id={uuid.v1()} task={task} />)}
            </div>
        ); 
    }
}

const mapStateToProps = state => {
    return {
        tasks: state.tasks
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddTask: () => dispatch({type: actionTypes.ADD_TASK})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
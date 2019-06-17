import React, { Component } from 'react';
import './AddModal.scss';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actionTypes';

class AddModal extends Component {
    state = {
        task: ''
    }

    componentDidMount() {
        this.inputElement.focus();
    }
    // The problem here is that it renders at initialization and by the time you click on "add a task" the focus is gone. A solution can be to only render this whole modal conditionally, and remove it other wise (return a null)...

    saveTaskHandler = (event) => {
        this.setState({task: event.target.value})
    }

    render() {
        return (
            <div className="modal">
                <h1 className="modal__title">Add a Task</h1>
                <input ref={(inp) => { this.inputElement = inp }} onChange={(event) => this.saveTaskHandler(event)} type="text" className="modal__input" />
                <button onClick={(task) => this.props.onAddTask(this.state.task)} className="modal__btn">Add</button>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {

    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddTask: (task) => dispatch({type: actionTypes.ADD_TASK, task: task})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddModal);
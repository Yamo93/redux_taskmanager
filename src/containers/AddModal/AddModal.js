import React, { Component } from 'react';
import './AddModal.scss';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actionTypes';
import uuid from 'uuid';

class AddModal extends Component {
    // Made more sense to use local state here than Redux. Using Redux for this is overkill.
    state = {
        task: {
            text: '',
            id: null
        }
    }

    componentDidMount() {
        this.inputElement.focus();
    }

    addTaskHandler = (event, task) => {
        console.log(event.type);
        if (event.type === 'click' || (event.type === 'keyup' && event.keyCode === 13)) {
            this.props.onAddTask(this.state.task);
            if (this.state.task.text !== '') {
                this.props.onHideModal();
            }
        }
        

    }

    saveTaskHandler = (event) => {
        this.setState({
            task: {
                text: event.target.value,
                id: uuid.v1()
            }
        })
    }

    render() {
        return (
            <div className="modal">
                <h1 className="modal__title">Add a Task</h1>
                <input ref={(inp) => { this.inputElement = inp }} onChange={(event) => this.saveTaskHandler(event)} type="text" className="modal__input" 
                onKeyUp={(event, task) => this.addTaskHandler(event, this.state.task)} />
                <button onClick={(event, task) => this.addTaskHandler(event, this.state.task)} className="modal__btn">Add</button>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        modalShown: state.mdl.modalShown,
        success: state.tsk.success,
        message: state.tsk.message
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddTask: (task) => dispatch({type: actionTypes.ADD_TASK, task: task}),
        onHideModal: () => dispatch({type: actionTypes.HIDE_MODAL})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddModal);
import React, { Component } from 'react';
import './AddModal.scss';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';

class AddModal extends Component {
    // Made more sense to use local state here than Redux. Using Redux for this is overkill.
    state = {
        task: {
            text: '',
            id: null,
            done: false
        }
    }

    componentDidMount() {
        this.inputElement.focus();
    }

    addTaskHandler = (event, task) => {
        if (event.type === 'click' || (event.type === 'keyup' && event.keyCode === 13)) {
            this.props.onStoreTask(this.state.task);
            if (this.state.task.text !== '') {
                this.props.onHideModal();
            }
        }

    }

    saveTaskHandler = (event) => {
        this.setState({
            task: {
                text: event.target.value,
                id: null,
                done: false,
                userId: localStorage.getItem('userId')
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
        onAddTask: (task) => dispatch(actionCreators.addTask(task)),
        onStoreTask: task => dispatch(actionCreators.storeTask(task)),
        onHideModal: () => dispatch(actionCreators.hideModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddModal);
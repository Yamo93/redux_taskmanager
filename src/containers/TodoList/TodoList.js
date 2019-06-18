import React, { Component } from 'react';
import { connect } from 'react-redux';
import './TodoList.scss';
import Backdrop from '../../components/Backdrop/Backdrop';
import DateShower from '../../components/DateShower/DateShower';
import Message from '../../components/Message/Message';
import Tasks from '../Tasks/Tasks';
import AddTaskBtn from '../../components/AddTaskBtn/AddTaskBtn';
import AddModal from '../AddModal/AddModal';
import * as actionTypes from '../../store/actionTypes';


class TodoList extends Component {

    hideModalHandler = () => {
        this.props.onHideModal();
    }
    
    showModalHandler = () => {
        this.props.onShowModal();
    }

    render() {

        let modal = null;

        if (this.props.modalShown) {
            modal = <AddModal modalState={this.props.modalShown} />;
        }

        let message = null;

        if (this.props.message) {
            message = <Message message={this.props.message} isSuccessful={this.props.success} />;
        }
        
        return (
            <div className="todolist">
                {message}
                <Backdrop clicked={this.hideModalHandler} modalState={this.props.modalShown} />
                <DateShower />
                <Tasks />
                <AddTaskBtn clicked={this.showModalHandler} />
                {modal}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        message: state.tsk.message,
        success: state.tsk.success,
        modalShown: state.mdl.modalShown
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onShowModal: () => dispatch({type: actionTypes.SHOW_MODAL}),
        onHideModal: () => dispatch({type: actionTypes.HIDE_MODAL})
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
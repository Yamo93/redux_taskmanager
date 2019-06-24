import React, { Component } from 'react';
import { connect } from 'react-redux';
import './TodoList.scss';
import Backdrop from '../../components/Backdrop/Backdrop';
import DateShower from '../../components/DateShower/DateShower';
import Message from '../../components/Message/Message';
import Tasks from '../Tasks/Tasks';
import AddTaskBtn from '../../components/AddTaskBtn/AddTaskBtn';
import AddModal from '../AddModal/AddModal';
import * as actionCreators from '../../store/actions/index';

class TodoList extends Component {
    componentDidUpdate() {
        setTimeout(() => this.props.onHideMessage(), 4000);
    }

    hideModalHandler = () => {
        this.props.onHideModal();
    }
    
    showModalHandler = () => {
        this.props.onShowModal();
    }

    render() {

        let message = null;

        if (this.props.message) {
            message = <Message shown={true} message={this.props.message} isSuccessful={this.props.success} />;
        } else {
            message = <Message shown={false} message={this.props.message} isSuccessful={this.props.success} />;
        }

        let modal = null;

        if (this.props.modalShown) {
            modal = <AddModal modalState={this.props.modalShown} />;
        }
        
        return (
            <div className="todolist">
                {message}
                <Backdrop clicked={this.hideModalHandler} modalState={this.props.modalShown} />
                <DateShower loading={this.props.loading} />
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
        modalShown: state.mdl.modalShown,
        loading: state.tsk.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onShowModal: () => dispatch(actionCreators.showModal()),
        onHideModal: () => dispatch(actionCreators.hideModal()),
        onHideMessage: () => dispatch(actionCreators.hideMessage())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
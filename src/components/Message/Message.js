import React from 'react';
import './Message.scss';

const Message = (props) => {
    let classes = ['message'];
    if (!props.isSuccessful) {
        classes = ['message', 'danger-message'];
    }

    if (!props.shown) {
        classes.push('hidden');
    }
    return (
        <div className={classes.join(' ')}>
            <p>{props.message}</p>
        </div>
    );
};

export default Message;
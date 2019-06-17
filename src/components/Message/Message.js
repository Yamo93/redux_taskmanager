import React from 'react';
import './Message.scss';

const Message = (props) => {
    let classes = 'message';
    if (!props.isSuccessful) {
        classes = 'message danger-message';
    }
    return (
        <div className={classes}>
            <p>{props.message}</p>
        </div>
    );
};

export default Message;
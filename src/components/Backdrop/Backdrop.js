import React from 'react';
import './Backdrop.scss';

const Backdrop = (props) => {
    let classes = "backdrop";
    if (!props.modalState) {
        classes = "backdrop hidden";
    }
    return (
        <div onClick={props.clicked} className={classes}></div>
    );
};

export default Backdrop;
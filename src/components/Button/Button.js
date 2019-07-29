import React from 'react';

import './Button.scss';

const button = (props) => {
    let classes = ['button'];

    if (props.class) {
        classes.push(props.class);
    }
    return (
        <button className={classes.join(' ')} type="submit">{props.children}</button>
    );
};

export default button;
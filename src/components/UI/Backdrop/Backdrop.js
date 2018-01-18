import React from 'react';

import classes from './Backdrop.css';

const backdrop = (props) => (
	props.ifShow ? <div className={classes.Backdrop} onClick={props.clickHandler}></div> : null
);

export default backdrop;
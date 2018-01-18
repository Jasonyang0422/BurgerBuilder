import React from 'react';

//makes React aware of the burger-logo image in ../../assets/images
//Also, burgerLogo is a string which is the path where WebPack stores our images
import burgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.css';

const logo = (props) => (
	<div className={classes.Logo}>
		<img src={burgerLogo} alt="MyBurger" />
	</div>
);

export default logo;
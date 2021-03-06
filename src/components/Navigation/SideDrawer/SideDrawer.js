import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';

const sideDrawer = (props) => {
	let attachedClasses = [classes.SideDrawer, classes.Close];
	if (props.ifShow) {
		attachedClasses = [classes.SideDrawer, classes.Open];
	}
	return (
		<Aux>
			<div className={attachedClasses.join(' ')}>	
				<div className={classes.Logo}> 
					<Logo />
				</div>
				<nav>
					<NavigationItems />
				</nav>
			</div>
			<Backdrop ifShow={props.ifShow} clickHandler={props.closeSideDrawer} />
		</Aux>
	);
};

export default sideDrawer;
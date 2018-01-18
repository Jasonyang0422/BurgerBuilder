import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

//for boolean props we can just pass like active
//don't have to be active = {true}
const navigationItems = () => (
	<ul className={classes.NavigationItems}>
		<NavigationItem link="/" active>Burger Builder</NavigationItem>
		<NavigationItem link="/">Checkout</NavigationItem>
	</ul>
);

export default navigationItems;
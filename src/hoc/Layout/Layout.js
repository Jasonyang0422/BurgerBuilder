import React, { Component } from 'react';

import Aux from '../Aux/Aux'
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class layout extends Component {
	state = {
		showSideDrawer: false
	}

	sideDrawerClosedHandler = () => {
		this.setState({showSideDrawer: false});
	}

	toggleSideDrawerHandler = () => {
		this.setState((prevState) => {
			return {showSideDrawer: !prevState.showSideDrawer};
		});
	}

	render() {
		return (
			<Aux>
				<Toolbar toggleSideDrawer={this.toggleSideDrawerHandler} />
				<SideDrawer 
					ifShow={this.state.showSideDrawer} 
					closeSideDrawer={this.sideDrawerClosedHandler} />
				<main className={classes.Content}>
					{this.props.children}
				</main>
			</Aux>
		);
	}
};

export default layout;
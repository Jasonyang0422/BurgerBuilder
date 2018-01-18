import React, { Component } from 'react';

import classes from './Modal.css';
import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {

	//if you don't limit this step
	//the modal will re-render even if you just click the more ingredient
	shouldComponentUpdate(nextProps, nextState) {
		return nextProps.ifShow !== this.props.ifShow;
	}

	componentWillUpdate () {
		console.log('[Modal] will update');
	}

	render() {
		return (
			<Aux>
				<Backdrop ifShow={this.props.ifShow} clickHandler={this.props.modalClosed} />
				<div 
					className={classes.Modal}
					style={{
						transform: this.props.ifShow ? 'translateY(0)' : 'translateY(-100vh)',
						opacity: this.props.ifShow ? '1' : '0'
					}}>
					{this.props.children}
				</div>
			</Aux>
		);
	}	
};

export default Modal;
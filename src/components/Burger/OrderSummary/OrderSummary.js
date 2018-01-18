import React, { Component } from 'react';

import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

// This could be a functional component
class OrderSummary extends Component {
	componentWillUpdate() {
		console.log("[OrderSummary] will update");
	}

	render() {
		const ingredientSummary = Object.keys(this.props.ingredients)
			.map(ingredient => {
				return (
					<li key={ingredient}>
						<span style={{textTransform: 'capitalize'}}>{ingredient}</span>: {this.props.ingredients[ingredient]}
					</li>);
			});
		return (
			<Aux>
				<h3>Your Order</h3>
				<p>Your burger contains following ingredients:</p>
				<ul>
					{ingredientSummary}
				</ul>
				<p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
				<p>Continue to Checkout?</p>
				<Button type="Danger" clickHandler={this.props.purchaseCancelHandler}>CANCEL</Button>
				<Button type="Success" clickHandler={this.props.purchaseContinueHandler}>CONTINUE</Button>
			</Aux>
		);
	}
};

export default OrderSummary;
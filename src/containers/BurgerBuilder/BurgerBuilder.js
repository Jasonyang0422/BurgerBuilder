import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
	salad: 0.5,
	cheese: 0.3,
	meat: 1.6,
	bacon: 0.8
};

class BurgerBuilder extends Component {
	state = {
		ingredients: {
			salad: 0,
			bacon: 0,
			cheese: 0,
			meat: 0
		},
		totalPrice: 4,
		purchasable: false,
		purchasing: false
	}

	purchaseHandler = () => {
		this.setState({purchasing: true});
	}

	purchaseCancelHandler = () => {
		this.setState({purchasing: false});
	}

	purchaseContinueHandler = () => {
		alert('You Continue');
	}

	updatePurchaseState(ingredients) {
		const sum = Object.keys(ingredients)
			.map(ingredient => {
				return ingredients[ingredient];
			})
			.reduce((accumulation, ele) => {
				return accumulation + ele;
			}, 0);

		this.setState({purchasable: sum > 0});
	}

	addIngredientHandler = (type) => {
		const oldCount = this.state.ingredients[type];
		const updatedCount = oldCount + 1;
		const updatedIngredients = {
			...this.state.ingredients
		};
		updatedIngredients[type] = updatedCount;
		const priceAddition = INGREDIENT_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice + priceAddition;
		this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
		//setState is async, so we need to pass updated state mannualy
		this.updatePurchaseState(updatedIngredients);
	}

	removeIngredientHandler = (type) => {
		const oldCount = this.state.ingredients[type];
		if (oldCount <= 0) {
			return;
		}
		const updatedCount = oldCount - 1;
		const updatedIngredients = {
			...this.state.ingredients
		};
		updatedIngredients[type] = updatedCount;
		const priceDeduction = INGREDIENT_PRICES[type];
		const oldPrice = this.state.totalPrice;
		const newPrice = oldPrice - priceDeduction;
		this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
		//setState is async, so we need to pass updated state mannualy
		this.updatePurchaseState(updatedIngredients);
	}

	render () {
		const disableInfo = {
			...this.state.ingredients
		}
		for (let key in disableInfo) {
			disableInfo[key] = disableInfo[key] <= 0;
		}
		return (
			<Aux>
				<Modal ifShow={this.state.purchasing} modalClosed={this.purchaseCancelHandler} >
					<OrderSummary 
						ingredients={this.state.ingredients}
						price={this.state.totalPrice} 
						purchaseCancelHandler={this.purchaseCancelHandler}
						purchaseContinueHandler={this.purchaseContinueHandler} />
				</Modal>
				<Burger ingredients={this.state.ingredients} />
				<BuildControls 
					addIngredient={this.addIngredientHandler}
					removeIngredient={this.removeIngredientHandler}
					disableInfo={disableInfo} 
					price={this.state.totalPrice} 
					purchasable={this.state.purchasable} 
					purchase={this.purchaseHandler} />
			</Aux>
		);
	}
}

export default BurgerBuilder;







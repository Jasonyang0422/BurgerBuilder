import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
	//transfrom ingredients object to array
	let ingredientsArray = Object.keys(props.ingredients)
		.map(ingredient => {
			return [...Array(props.ingredients[ingredient])].map((ele, i) => {
				return <BurgerIngredient key={ingredient + i} type={ingredient} />;
			});
		})
		.reduce((accumulation, array) => {
			return accumulation.concat(array);
		}, []); //reduct from [[...], [...]] to [...]

	if (ingredientsArray.length === 0) {
		ingredientsArray = <p>Please start adding ingredients!</p>
	}
 	return (
		<div className={classes.Burger}>
			<BurgerIngredient type="bread-top" />			
			{ingredientsArray}
			<BurgerIngredient type="bread-bottom" />
		</div>
	);
};


export default burger;
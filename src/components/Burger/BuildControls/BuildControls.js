import React from 'react';

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
	{ label: 'Salad', type: 'salad'},
	{ label: 'Bacon', type: 'bacon'},
	{ label: 'Cheese', type: 'cheese'},
	{ label: 'Meat', type: 'meat'}
];

const buildControls = (props) => (
	<div className={classes.BuildControls}>
		<p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
		{controls.map(ctrl => (
			<BuildControl 
				key={ctrl.label} 
				label={ctrl.label} 
				addIngredient={() => props.addIngredient(ctrl.type)}
				removeIngredient={() => props.removeIngredient(ctrl.type)}
				disabled={props.disableInfo[ctrl.type]} />
		))}
		<button 
			className={classes.OrderButton}
			disabled={!props.purchasable}
			onClick={props.purchase}>ORDER NOW</button>
	</div>
);

export default buildControls;
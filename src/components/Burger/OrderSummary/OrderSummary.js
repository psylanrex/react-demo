import React from 'react';

import Aux from '../../../hoc/Aux';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
        return (
            <li key={igKey}>
            <span style={{textTransform: 'capitalized'}}>
                {igKey}
            </span>
            : {props.ingredients[igKey]}
            </li>    
        )
        
    });
    return (
        <Aux>
        <h3>Your order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>
            {ingredientSummary}
        </ul>
        <p>Continue to check out?</p>
    </Aux>
    );
    
};

export default orderSummary;
import React, { useContext } from "react";

import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";
import CartContext from '../../../store/cart-context';

const MealItem = ({ title, description, price, id }) => {
  const cartCtx = useContext(CartContext);

	const displayPrice = `$ ${price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: id,
      title: title,
      amount: amount,
      price: price
    });
  };

	return (
		<li className={classes.meal}>
			<div>
				<h3>{title}</h3>
				<p className={classes.description}>{description}</p>
				<p className={classes.price}>{displayPrice}</p>
			</div>
			<div>
				<MealItemForm onAddToCart={addToCartHandler} id={id} />
			</div>
		</li>
	);
};

export default MealItem;

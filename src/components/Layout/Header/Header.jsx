import React from "react";

import HeaderCartBtn from "./HeaderCartBtn";
import mealsImg from "../../../assets/food.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
	return (
		<React.Fragment>
			<header className={classes.header}>
				<h1>ReactMeals</h1>
				<HeaderCartBtn onClick={props.showCartHandler}>Cart</HeaderCartBtn>
			</header>
			<section className={classes["main-image"]}>
				<img src={mealsImg} />
			</section>
		</React.Fragment>
	);
};

export default Header;

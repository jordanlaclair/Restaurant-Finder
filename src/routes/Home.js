import React from "react";
import Header from "../components/Header/Header";
import AddRestaurant from "../components/AddRestaurant/AddRestaurant";
import RestaurantList from "../components/RestaurantList/RestaurantList";
const Home = () => {
	return (
		<div>
			<Header />
			<AddRestaurant />
			<RestaurantList />
		</div>
	);
};

export default Home;

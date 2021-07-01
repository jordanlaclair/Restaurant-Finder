import React from "react";
import Header from "../../components/Header/Header";
import AddRestaurant from "../../components/AddRestaurant/AddRestaurant";
import RestaurantList from "../../components/RestaurantList/RestaurantList";
import Background from "../../components/Background/Background";

const Home = () => {
	return (
		<div>
			<Header />
			<AddRestaurant />
			<RestaurantList />
			<Background />
		</div>
	);
};

export default Home;

import React, { useState, createContext } from "react";

export const RestaurantsContext = createContext();

const RestaurantContextProvider = ({ children }) => {
	const [restaurants, setRestaurants] = useState([]);
	const [selectedRestaurant, setSelectedRestaurant] = useState(null);

	const addRestaurant = (restaurant) => {
		setRestaurants([...restaurants, restaurant]);
	};

	return (
		<RestaurantsContext.Provider
			value={{
				restaurants: restaurants,
				setRestaurants: setRestaurants,
				addRestaurant: addRestaurant,
				selectedRestaurant: selectedRestaurant,
				setSelectedRestaurant: setSelectedRestaurant,
			}}
		>
			{children}
		</RestaurantsContext.Provider>
	);
};

export default RestaurantContextProvider;

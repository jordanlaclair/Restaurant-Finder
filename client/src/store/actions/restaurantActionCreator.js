import * as actionTypes from "./actionTypes";

export const updateName = (value) => {
	return {
		type: actionTypes.UPDATE_NAME,
		value: value,
	};
};

export const updateLocation = (value) => {
	return {
		type: actionTypes.UPDATE_LOCATION,
		value: value,
	};
};

export const updatePriceRange = (value) => {
	return {
		type: actionTypes.UPDATE_PRICE_RANGE,
		value: value,
	};
};

export const updateReview = (value) => {
	return {
		type: actionTypes.UPDATE_REVIEW,
		value: value,
	};
};

export const setRestaurants = (value) => {
	return {
		type: actionTypes.SET_RESTAURANTS,
		value: value,
	};
};

export const addRestaurant = (value) => {
	return {
		type: actionTypes.ADD_RESTAURANT,
		value: value,
	};
};

export const removeRestaurant = (value) => {
	return {
		type: actionTypes.REMOVE_RESTAURANT,
		value: value,
	};
};

export const newSelectedRestaurant = (value) => {
	return {
		type: actionTypes.NEW_SELECTED_RESTAURANT,
		value: value,
	};
};

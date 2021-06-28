import * as actionTypes from "../actions/actionTypes";

const initialState = {
	name: "",
	location: "",
	price_range: "Price Range",
	review: "",
	rating: "Rating",
	restaurants: [],
	selectedRestaurant: null,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.UPDATE_NAME:
			return {
				...state,
				name: action.value,
			};
		case actionTypes.UPDATE_LOCATION:
			return {
				...state,
				location: action.value,
			};

		case actionTypes.UPDATE_PRICE_RANGE:
			return {
				...state,
				price_range: action.value,
			};
		case actionTypes.ADD_RESTAURANT:
			return {
				...state,
				restaurants: [...state.restaurants, action.value],
			};
		case actionTypes.SET_RESTAURANTS:
			return {
				...state,
				restaurants: action.value,
			};
		case actionTypes.UPDATE_REVIEW:
			return {
				...state,
				review: action.value,
			};
		case actionTypes.UPDATE_RATING:
			return {
				...state,
				rating: action.value,
			};
		case actionTypes.REMOVE_RESTAURANT:
			return {
				...state,
				restaurants: state.restaurants.filter((restaurant) => {
					return restaurant.id !== action.value;
				}),
			};
		case actionTypes.NEW_SELECTED_RESTAURANT:
			return {
				...state,
				selectedRestaurant: action.value,
			};
		default:
			return state;
	}
};

export default reducer;

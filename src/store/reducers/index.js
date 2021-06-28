import restaurantReducer from "./restaurantReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
	restaurants: restaurantReducer,
});

export default allReducers;

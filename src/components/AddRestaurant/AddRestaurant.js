import React, { useState, useContext } from "react";
import { useDispatch } from "react-redux";
import RestaurantsFinder from "../../apis/RestaurantsFinder";
import { RestaurantsContext } from "../../context/RestaurantContext";
import * as action from "../../store/actions/index";

const AddRestaurant = () => {
	//const { addRestaurant } = useContext(RestaurantsContext);
	const [name, setName] = useState("");
	const [location, setLocation] = useState("");
	const [priceRange, setPriceRange] = useState("Price Range");

	const dispatch = useDispatch();

	const handleSubmit = async (e) => {
		//stop reloading
		e.preventDefault();

		try {
			//add a restaurant
			const response = await RestaurantsFinder.post("/", {
				name: name,
				location: location,
				price_range: priceRange,
			});
			//addRestaurant(response.data.data.restaurant);
			dispatch(action.addRestaurant(response.data.data.restaurant));
			console.log(response);
			//the response returns values since on our backend we made sure to
			//return that restaurant in psql using 'returning *'
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="container mb-4">
			<form autocomplete="off" action="">
				<div className="form-row">
					<div className="row justify-content-center align-items-center">
						<div className="col-3">
							<input
								autoComplete="off"
								type="text"
								value={name}
								onChange={(e) => {
									setName(e.target.value);
								}}
								placeholder="Name"
								className="form-control"
							/>
						</div>
						<div className="col-3">
							<input
								autoComplete="off"
								placeholder="Location"
								value={location}
								onChange={(e) => {
									setLocation(e.target.value);
								}}
								type="text"
								className="form-control"
							/>
						</div>
						<div className="col-3">
							<select
								value={priceRange}
								onChange={(e) => {
									setPriceRange(e.target.value);
								}}
								className="form-select my-1 mr-sm-2"
							>
								<option disabled>Price Range</option>
								<option value="1">$</option>
								<option value="2">$$</option>
								<option value="3">$$$</option>
								<option value="4">$$$$</option>
							</select>
						</div>
						<div className="col-1">
							<div className="m-0 p-0">
								<button
									type="submit"
									onClick={handleSubmit}
									className="btn btn-dark"
								>
									Add
								</button>
							</div>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};

export default AddRestaurant;

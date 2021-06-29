import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RestaurantsFinder from "../../apis/RestaurantsFinder";
import { useHistory } from "react-router-dom";

const UpdateRestaurant = () => {
	//lets us get data from the url
	const { id } = useParams();
	const [name, setName] = useState("");
	const [location, setLocation] = useState("");
	const [price, setPrice] = useState("");
	let history = useHistory();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await RestaurantsFinder.get(`/${id}`);
				setName(response.data.data.restaurant.name);
				setLocation(response.data.data.restaurant.location);
				setPrice(response.data.data.restaurant.price_range);
			} catch (error) {
				console.error(error);
			}
		};

		fetchData();
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const updatedRestaurant = await RestaurantsFinder.put(`/${id}`, {
				name: name,
				location: location,
				price_range: price,
			});
			history.push("/");
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="container ">
			<form action="">
				<div className="mb-3 row">
					<label className="col-sm-2 col-form-label" htmlFor="name">
						Name
					</label>
					<div className="col-sm-10">
						<input
							value={name}
							onChange={(e) => {
								setName(e.target.value);
							}}
							id="name"
							className="form-control"
							type="text"
						/>
					</div>
				</div>
				<div className="mb-3 row">
					<label className="col-sm-2 col-form-label" htmlFor="location">
						Location
					</label>
					<div className="col-sm-10">
						<input
							value={location}
							onChange={(e) => {
								setLocation(e.target.value);
							}}
							id="location"
							className="form-control"
							type="text"
						/>
					</div>
				</div>
				<div className=" mb-3 row ">
					<label className="col-sm-2 col-form-label" htmlFor="price_range">
						Price Range
					</label>
					<div className="col-sm-10">
						<input
							value={price}
							onChange={(e) => {
								setPrice(e.target.value);
							}}
							id="price_range"
							className="form-control"
							type="text"
						/>
					</div>
				</div>
				<button
					type="submit"
					className="btn btn-primary"
					onClick={handleSubmit}
				>
					Submit
				</button>
			</form>
		</div>
	);
};

export default UpdateRestaurant;

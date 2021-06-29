import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import RestaurantsFinder from "../apis/RestaurantsFinder";
import Reviews from "../components/Reviews/Reviews";
import AddReview from "../components/AddReview/AddReview";
import { useSelector, useDispatch } from "react-redux";
import * as action from "../store/actions/index";

const Details = () => {
	const selectedRestaurant = useSelector(
		(state) => state.restaurants.selectedRestaurant
	);
	const dispatch = useDispatch();

	const { id } = useParams();
	//const { selectedRestaurant, setSelectedRestaurant } = useContext(RestaurantsContext);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await RestaurantsFinder.get(`/${id}`);
				dispatch(action.newSelectedRestaurant(response.data.data));
				//setSelectedRestaurant(response.data.data);
			} catch (error) {
				console.error(error);
			}
		};

		fetchData();
	}, []);

	return (
		<div>
			{selectedRestaurant && (
				<>
					<div className="d-flex flex-column justify-content-center align-items-center">
						<h1 className="display-2">{selectedRestaurant.restaurant.name}</h1>
						<div className="d-flex justify-content-center align-items-center">
							<div className="me-2">
								<h2 className="display-6">
									{selectedRestaurant.restaurant.location}
								</h2>
							</div>

							<div className="me-2" style={{ fontSize: "5px" }}>
								<i className="fas fa-circle"></i>
							</div>

							<div className="me-1">
								<h2 className="display-8 fw-light m-0">
									{"$".repeat(selectedRestaurant.restaurant.price_range)}
								</h2>
							</div>
						</div>
					</div>
					<div className="mt-3 container">
						<Reviews reviews={selectedRestaurant.reviews} />
					</div>
					<AddReview />
				</>
			)}
		</div>
	);
};

export default Details;

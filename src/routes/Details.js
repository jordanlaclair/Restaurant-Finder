import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import RestaurantsFinder from "../apis/RestaurantsFinder";
import StarRating from "../components/StarRating/StarRating";
import Reviews from "../components/Reviews/Reviews";
import AddReview from "../components/AddReview/AddReview";
import { RestaurantsContext } from "../context/RestaurantContext";

const Details = () => {
	const { id } = useParams();
	const { selectedRestaurant, setSelectedRestaurant } =
		useContext(RestaurantsContext);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await RestaurantsFinder.get(`/${id}`);
				setSelectedRestaurant(response.data.data);
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

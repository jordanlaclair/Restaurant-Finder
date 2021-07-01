import React from "react";
import StarRating from "../StarRating/StarRating";
import "./Reviews.scss";
const Reviews = ({ reviews }) => {
	return (
		<div className="row row-cols-3 mb-2 ">
			{reviews.map((review) => {
				return (
					<div
						className="card text-white bg-primary m-3 --big-Entrance"
						style={{ maxWidth: "30%" }}
						key={review.id}
					>
						<div className="card-header d-flex justify-content-between">
							<span>{review.name}</span>
							<span>
								<StarRating rating={review.rating} />
							</span>
						</div>
						<div className="card-body">
							<p className="card-text">{review.review}</p>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Reviews;

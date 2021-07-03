import React from "react";
import StarRating from "../StarRating/StarRating";
import "./Reviews.scss";
const Reviews = ({ reviews }) => {
	return (
		<div className="review__wrapper justify-content-center mb-2 ">
			{reviews.map((review) => {
				return (
					<div
						className="card text-white bg-primary m-3 --big-Entrance review"
						key={review.id}
					>
						<div className="card-header review__header">
							<div>{review.name}</div>
							<div>
								<StarRating rating={review.rating} />
							</div>
						</div>
						<div className="card-body d-flex flex-column justify-content-center align-items-center">
							<p className="card-text">{review.review}</p>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Reviews;

import React from "react";
import StarRating from "../StarRating/StarRating";
import "./Reviews.scss";
const Reviews = ({ reviews }) => {
	return (
		<div className="row  justify-content-center mb-2 ">
			{reviews.map((review) => {
				return (
					<div
						className="  card text-white bg-primary m-3 --big-Entrance review"
						style={{ maxWidth: "30%" }}
						key={review.id}
					>
						<div className="card-header review__header">
							<div>{review.name}</div>
							<div>
								<StarRating rating={review.rating} />
							</div>
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

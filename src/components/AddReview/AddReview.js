import React, { useState } from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";
import RestaurantsFinder from "../../apis/RestaurantsFinder";
import "./AddReview.scss";
const AddReview = () => {
	//gives access to our url
	const { id } = useParams();
	const [name, setName] = useState("");
	const [review, setReview] = useState("");
	const [rating, setRating] = useState("Rating");
	const location = useLocation();
	const history = useHistory();
	console.log(location);
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await RestaurantsFinder.post(`${id}/addReview`, {
				name,
				review,
				rating,
			});
			history.push("/");
			history.push(location.pathname);

			//console.log(response);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="mb-2 mt-3 container --fade-In">
			<form action="">
				<div className="d-flex justify-content-start">
					<div className="d-flex flex-column  align-items-start col-7 me-4">
						<label htmlFor="name" className="mb-2">
							Name
						</label>
						<input
							id="name"
							value={name}
							onChange={(e) => {
								setName(e.target.value);
							}}
							placeholder="Name"
							className="form-control"
							type="text"
						/>
					</div>
					<div className="col-4 d-flex flex-column  align-items-start ">
						<label className="mb-2" htmlFor="rating">
							Rating
						</label>
						<select
							value={rating}
							onChange={(e) => {
								setRating(e.target.value);
							}}
							className="form-select"
							id="rating"
						>
							<option disabled>Rating</option>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
						</select>
					</div>
				</div>
				<div className="d-flex flex-column justify-content-center align-items-start mt-3">
					<label className="mb-2" htmlFor="Review">
						Review
					</label>
					<textarea
						value={review}
						onChange={(e) => {
							setReview(e.target.value);
						}}
						id="Review"
						placeholder="Insert your review here"
						className="form-control mb-3"
					></textarea>
					<button
						onClick={(e) => {
							handleSubmit(e);
						}}
						type="submit"
						className="btn btn-primary"
					>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};

export default AddReview;

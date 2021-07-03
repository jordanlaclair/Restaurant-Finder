import React from "react";
import UpdateRestaurant from "../../components/UpdateRestaurant/UpdateRestaurant";
import "./UpdatePage.scss";

const UpdatePage = () => {
	return (
		<div className="container p-3">
			<h1 className="p-5 text-center font-weight-light display-3 mb-4 --fade-In">
				Update Restaurant
			</h1>
			<UpdateRestaurant />
		</div>
	);
};

export default UpdatePage;

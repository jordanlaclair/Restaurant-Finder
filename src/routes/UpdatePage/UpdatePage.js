import React from "react";
import UpdateRestaurant from "../../components/UpdateRestaurant/UpdateRestaurant";
const UpdatePage = () => {
	return (
		<div className="container p-3">
			<h1 className="text-center font-weight-light display-3 mb-4">
				Update Restaurant
			</h1>
			<UpdateRestaurant />
		</div>
	);
};

export default UpdatePage;

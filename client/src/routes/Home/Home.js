import React from "react";
import Header from "../../components/Header/Header";
import AddRestaurant from "../../components/AddRestaurant/AddRestaurant";
import RestaurantList from "../../components/RestaurantList/RestaurantList";
import Background from "../../components/Background/Background";
import "./Home.scss";
const Home = () => {
	return (
		<div className="home">
			<Header />
			<AddRestaurant />
			<RestaurantList />
			<Background />
			<div className="home__footer">
				<svg
					viewBox="0 0 1440 292"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						id="Vector 3"
						d="M911.139 156.249C786.176 79.3577 429.001 -48.6489 0 54.4554V421H1478.59C1499.55 214.5 1511.45 -146.161 1391.33 63.1931C1271.21 272.547 1021.15 212.461 911.139 156.249Z"
						fill="url(#paint0_linear)"
					/>
					<defs>
						<linearGradient
							id="paint0_linear"
							x1="746"
							y1="0"
							x2="746"
							y2="421"
							gradientUnits="userSpaceOnUse"
						>
							<stop stop-color="#0D6EFD" stop-opacity="0.83" />
							<stop offset="1" stop-color="#C4C4C4" stop-opacity="0" />
						</linearGradient>
					</defs>
				</svg>
			</div>
		</div>
	);
};

export default Home;

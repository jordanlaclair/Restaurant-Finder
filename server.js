require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./db/index.js");

const path = require("path");
//gets value PORT from .env file

//first option is port, if that doesnt exist, then use port 5001
const PORT = process.env.PORT || 5001;

//next goes to next middleware / route handler
app.use(cors());
//converts json from client to object into the body and allows req.body to work
app.use(express.json());
app.use(express.static(path.join(__dirname, "client/build")));

if (process.env.NODE_ENV === "production") {
	//serve static content
	app.use(express.static(path.join(__dirname, "client/build")));
}

//GET ALL RESTAURANTS
//res is the response we send back
//req is when we receive that http request
//we use async await here since were getting data from our database
app.get("/api/v1/restaurants", async (req, res) => {
	try {
		//const results = await db.query("select * from restaurants");
		const restaurantRatingsData = await db.query(
			"select * from restaurants left join (select restaurant_id, COUNT(*), TRUNC(AVG(rating), 1) as average_rating from reviews group by restaurant_id) reviews on restaurants.id = reviews.restaurant_id;"
		);
		//console.log(restaurantRatingsData);
		const data = {
			status: "success",
			results: restaurantRatingsData.rows.length,
			data: { restaurants: restaurantRatingsData.rows },
		};
		//sends success response
		res.status(200).json(data);
	} catch (error) {
		console.error(error);
	}
});

//the colon represents a variables (since the id can be anything)
//gets one restaurant
app.get("/api/v1/restaurants/:id", async (req, res) => {
	//console.log(req.params.id);

	try {
		//this is equal to select * from restaurants where id = req.params.id
		//we can use template literal syntax here, but that is vulnerable to attacks
		const restaurant = await db.query(
			"select * from restaurants left join (select restaurant_id, COUNT(*), TRUNC(AVG(rating), 1) as average_rating from reviews group by restaurant_id) reviews on restaurants.id = reviews.restaurant_id where id = $1",
			[req.params.id]
		);

		const reviews = await db.query(
			"select * from reviews where restaurant_id = $1",
			[req.params.id]
		);

		//sends success response
		res.status(200).json({
			status: "success",
			data: {
				restaurant: restaurant.rows[0],
				reviews: reviews.rows,
			},
		});
	} catch (error) {
		console.error(error);
	}
});

//create restaurant
app.post("/api/v1/restaurants", async (req, res) => {
	//console.log(req.body);
	try {
		const results = await db.query(
			//the returning * returns all the columns we just posted
			"INSERT INTO restaurants (name, location, price_range) values ($1, $2, $3) returning *",
			[req.body.name, req.body.location, req.body.price_range]
		);
		//console.log(results);
		res.status(201).json({
			status: "success",
			data: {
				restaurant: results.rows[0],
			},
		});
	} catch (error) {
		console.error(error);
	}
	//sends success response
});

//update restaurants

app.put("/api/v1/restaurants/:id", async (req, res) => {
	try {
		const results = await db.query(
			//the returning * returns all the columns we just updated
			"UPDATE restaurants SET name = $1, location = $2, price_range = $3 where id = $4 returning *",
			[req.body.name, req.body.location, req.body.price_range, req.params.id]
		);
		//console.log(results);
		//console.log(req.params.id);
		//console.log(req.body);

		//sends success response
		res.status(200).json({
			status: "success",
			data: {
				restaurant: results.rows[0],
			},
		});
	} catch (error) {
		console.error(error);
	}
});

app.delete("/api/v1/restaurants/:id", async (req, res) => {
	try {
		const result = db.query("DELETE FROM restaurants where id = $1", [
			req.params.id,
		]);
		res.status(204).json({
			status: "success",
		});
	} catch (error) {
		console.error(error);
	}
});

app.post("/api/v1/restaurants/:id/addReview", async (req, res) => {
	try {
		const results = await db.query(
			"INSERT INTO reviews (restaurant_id, name, review, rating) values ($1,$2,$3,$4) returning *;",
			[req.params.id, req.body.name, req.body.review, req.body.rating]
		);
		res.status(201).json({
			status: "success",
			data: {
				review: results.rows[0],
			},
		});
	} catch (error) {
		console.error(error);
	}
});

app.get("*", (req, res) => {
	// sends user back to build if they go to unknown route
	res.sendFile(path.join(__dirname, "client/build/index.html"));
});

app.listen(PORT, () => {
	console.log(`express is runnning on port ${PORT}`);
});

//middleware is between the request and response, just like these route handlers
//anything in middleware u can do in route handler and vice versa

//req.params accesses the paramaters in the http request (for example, the id)

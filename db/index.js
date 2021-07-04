const { Pool } = require("pg");
require("dotenv").config();

/* const devConfig = {
	user: process.env.PGUSER,
	host: process.env.POGHOST,
	database: process.env.PGDATABASE,
	password: process.env.PGPASSWORD,
	port: process.env.PGPORT,
}; */

const devConfig = `postgres://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}:${process.env.PGPORT}/${process.env.PGDATABASE}`;

const proConfig = {
	connectionString: process.env.DATABASE_URL, //heroku addons
};

/* const pool = new Pool({
	user: process.env.PGUSER,
	host: process.env.POGHOST,
	database: process.env.PGDATABASE,
	password: process.env.PGPASSWORD,
	port: process.env.PGPORT,
}); */

//Pool uses default environment variables if empty, or use an object
const pool = new Pool({
	connectionString: process.env.DATABASE_URL, // use DATABASE_URL environment variable from Heroku app
	ssl: {
		rejectUnauthorized: false, // don't check for SSL cert
	},
});

module.exports = {
	query: (text, params) => pool.query(text, params),
};

const { Pool } = require("pg");
/* const pool = new Pool({
	user: process.env.PGUSER,
	host: process.env.POGHOST,
	database: process.env.PGDATABASE,
	password: process.env.PGPASSWORD,
	port: process.env.PGPORT,
}); */

//Pool uses default environment variables
const pool = new Pool();
module.exports = {
	query: (text, params) => pool.query(text, params),
};

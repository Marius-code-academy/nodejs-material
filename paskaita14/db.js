import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const pool = new pg.Pool({
  user: process.env.USER,
  port: 5432,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  host: process.env.SERVER,
});

export default pool;

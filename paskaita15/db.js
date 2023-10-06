import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new pg.Pool({
  database: process.env.DATABASE,
  user: process.env.USER,
  password: process.env.PASSWORD,
  host: process.env.SERVER,
  port: 5432
})

export default pool;
import { Pool } from "pg";
const pool = new Pool({
  host: "localhost",
  port: 5432,
  user: "prath",
  password: 123456,
  database: "node_crash_pgs",
});


const getallusers = await pool.query(` select * from users` );
console.log(getallusers.rows);

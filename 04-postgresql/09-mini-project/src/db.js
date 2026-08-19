import { Pool } from "pg";
import "dotenv/config"
console.log(process.env.database);

const pool = new Pool({
    host: process.env.host,
    port: process.env.Port,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database,
})

export default pool;
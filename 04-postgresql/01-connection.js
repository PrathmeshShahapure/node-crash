import { Client} from "pg";

const client = new Client({
  host: "localhost",
  port: 5432,
  user: "prath",
  password: "123456",// put this in env 
  database: "node_crash_pgs",// same
});

await client.connect();

console.log("Connected to PostgreSQL");

await client.end();

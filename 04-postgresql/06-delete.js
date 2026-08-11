import { Client } from "pg";
const client = new Client({
  host: "localhost",
  port: 5432,
  user: "prath",
  password: 123456,
  database: "node_crash_pgs",
});

await client.connect();

const delete_jon = await client.query(` delete from users  where id=$1 returning*` , [9]);
console.log(delete_jon.rows);

await client.end();
import { Client } from "pg";
const client = new Client({
  host: "localhost",
  port: 5432,
  user: "prath",
  password: 123456,
  database: "node_crash_pgs",
});

await client.connect();
const name = 'jon_banega_don';
const update_jon = await client.query(` update users set name=$1 where id=8 returning*` , [name]);
console.log(update_jon.rows);

await client.end();
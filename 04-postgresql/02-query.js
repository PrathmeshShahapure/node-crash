import { Client } from "pg";

const client = new Client({
  host: "localhost",
  port: 5432,
  user: "prath",
  password: 123456,
  database: 'node_crash_pgs',
});

await client.connect();

const res_from_users_table = await client.query('select * from users');
console.log(res_from_users_table.rows);

const specific_users =  await client.query('select * from users where name ilike $1',['pRa%']);
console.log(specific_users.rows);

await client.end();
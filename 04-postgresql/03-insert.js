import { Client } from "pg";

const client = new Client({
  host: "localhost",
  port: 5432,
  user: "prath",
  password: 123456,
  database: 'node_crash_pgs',
});

await client.connect();

const email = 'jon@example.com'
const name='jonnnya'
const insert_jon = await client.query(` insert into users(name,email) 
                                         values($1, $2)
                                          returning*
                                         `, [name, email]);
console.log(insert_jon.rows);



await client.end();
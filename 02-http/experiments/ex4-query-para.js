import http from "http";
import { URL } from "url";

const server = http.createServer((req, res) => {
  const url = new URL(req.url, "http://localhost:3000");

  console.log(url);
  console.log(url.searchParams.get("id"))
  res.end("Done");
});

server.listen(3000);

import http from "http"

const server = http.createServer((req, res) => {
    console.log(req.url);
    if (req.url === "/") {
      res.end("Home");
    } else if (req.url === "/about") {
      res.end("About");
    } else if (req.url === "/contact") {
      res.end("Contact");
    } else {
        res.statusCode=404
      res.end("Page Not Found");
    }
})
 
server.listen(3000)


import http from "http"

const server = http.createServer((req, res) => { 
 
    if (req.url === "/") {
         res.statusCode = 200;
         res.setHeader("content-Type", "text/html");
         res.end("<h1> Home Page </h1>");

    }
    else if (req.url == "/about")
    { 
         res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        const info = {
            name:"Prathmesh",
            age:21,
        }
         res.end(JSON.stringify(info));

    }
    else { 
        res.statusCode = 404;
        res.setHeader("Content-Type","text/plain");
        res.end("Not Found")
    }

})

server.listen(3000)
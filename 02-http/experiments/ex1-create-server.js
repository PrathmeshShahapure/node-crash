import http from "http"

const server =http.createServer( (req, res) => { 
    res.end("HI i am learning node ")
})

server.listen(3)

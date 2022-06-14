const http = require("http");


const server = htttp.createServer(function(req,res){
    req.writeHead(200, {"content-Type":"text/html"});
    res.end("Well! hello there ");
});
server.listen(7000);
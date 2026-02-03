var http = require('http');
const { hostname } = require('os');

http.createServer(function (req, res) {
    res.writeHead(200,{'content-Type':'text/html'});
    res.write("HTTP create server<br>");
    res.write("hello world");
    res.write('<h1>hello</h1>');
    res.end();
    
}).listen(8080);


http.get("http://www.google.com/index.html",(res)=>{
    console.log("HTTP GET")
    console.log(`Got response ${res.statusCode}`);
    res.resume();
});  //here .end is not needed get send request automatically 


const options={
    hostname:"www.google.com",
    port:80,
    path:"/",
    method:"GET"
}


const req=http.request(options,(res)=>{
    console.log(`Got response ${res.statusCode}`);
    res.resume();
});
req.end();  //it is necessary to send request 
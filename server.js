// var http = require('http');
// const { hostname } = require('os');

// http.createServer(function (req, res) {
//     res.writeHead(200,{'content-Type':'text/html'});
//     res.write("HTTP create server<br>");
//     res.write("hello world");
//     res.write('<h1>hello</h1>');
//     res.end();
    
// }).listen(8080);


// http.get("http://www.google.com/index.html",(res)=>{
//     console.log("HTTP GET")
//     console.log(`Got response ${res.statusCode}`);
//     res.resume();
// }); 


// const options={
//     hostname:"www.google.com",
//     port:80,
//     path:"/",
//     method:"GET"
// }


// const req=http.request(options,(res)=>{
//     console.log(`Got response ${res.statusCode}`);
//     res.resume();
// });
// req.end();  //it is necessary to send request 
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Mock database for PDPU users
const users = [
  { email: "cyrus@pdpu.ac.in", password: "123", name: "Cyrus", role: "student" },
  { email: "admin@pdpu.ac.in", password: "456", name: "admin", role: "faculty" }
];

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    res.json({ success: true, user });
  } else {
    res.status(401).json({ success: false, message: "Invalid Credentials" });
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));
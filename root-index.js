// Regular NODE.JS

// // Load HTTP module
// const http = require("http");
// const hostname = "127.0.0.1";
// const port = 3000;

// // Create HTTP server and listen on port 3000 for requests
// const server = http.createServer((req, res) => {
//     // Set the response HTTP header with HTTP status and Content type
//     res.statusCode = 200;
//     res.setHeader("Content-Type", "text/plain");
//     res.end("Hello World\n");
// });

// // Listen for request on port 3000, and as a callback functuon have the port listened on logged
// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });

// EXPRESS.JS

// const express = require("express");
// const app = express();
// const port = 3000;

// app.get("/", (req, res) => {
//     res.send("Hello world");
// });

// app.listen(port, () => {
//     console.log(`Example app listening to on port ${port}`);
// });

// AXIOS
// require("dotenv").config();

// process.env.USER_ID;
// process.env.USER_KEY;
// process.env.NODE_ENV;

// const { copyFileSync } = require("fs");
// const https = require("https");
// const hostname = "127.0.0.1";
// const port = 3000;

// const server = https.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader("Content-Type", "text/plain");
//     res.end("Hello world\n");
// });

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });

// const axios = require("axios");

// axios
//     .get("http://example.com/todos")
//     .then((res) => {
//         console.log(`statusCode: ${res.status}`);
//         console.log(res);
//     })
//     .catch((error) => console.error(error));

// // GET method
// const options = {
//     path: "/todos",
//     method: "GET",
// };

// const req = https.request(options, (res) => {
//     console.log(`statusCode: ${res.statusCode}`);

//     res.on("data", (d) => {
//         process.stdout.write(d);
//     });
// });

// req.on("error", (error) => {
//     console.error(error);
// });

// req.end();

// // POST method
// const data = JSON.stringify({
//     todo: "Buy the milk",
// });

// const options = {
//     hostname: "127.0.0.1",
//     port: 3000,
//     path: "/todos",
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Content-Length": data.length,
//     },
// };

// const req = https.request(options, (res) => {
//     console.log(`statusCode: ${res.statusCode}`);

//     res.on("data", (d) => {
//         process.stdout.write(d);
//     });
// });

// req.on("error", (error) => {
//     console.error(error);
// });

// req.end();

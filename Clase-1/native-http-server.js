const http = require("node:http");

const server = http.createServer((req, res) => {
  console.log("request");
  res.end("Respuesta");
});


server.listen(3000, () =>{
    console.log('server live on port 3000');
})
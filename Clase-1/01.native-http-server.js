const http = require("node:http");
const { findPort } = require("./02.find-port.js");


const server = http.createServer((req, res) => {
  console.log("request");
  res.end("Respuesta");
});

findPort(3000).then(port =>{
  server.listen(port, () => {
    console.log(`server live on port ${port}`);
  });

})


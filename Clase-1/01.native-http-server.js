const http = require("node:http");
const { findPort } = require("./02.find-port.js");

const PORT =  process.env.PORT ?? 3000;
const server = http.createServer((req, res) => {
  console.log("request");
  res.end("Respuesta");
});

findPort(PORT).then(port =>{
  server.listen(port, () => {
    console.log(`server live on port ${port}`);
  });
})


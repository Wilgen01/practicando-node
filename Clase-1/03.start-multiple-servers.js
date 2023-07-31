// start_servers.js
const { spawn } = require('child_process');

// Iniciar la primera instancia del servidor
const server1 = spawn('node', ['01.native-http-server.js']);
server1.stdout.on('data', (data) => {
  console.log(`Server 1: ${data}`);
});

server1.stderr.on('data', (data) => {
  console.error(`Server 1 error: ${data}`);
});

// Iniciar la segunda instancia del servidor
const server2 = spawn('node', ['01.native-http-server.js']);
server2.stdout.on('data', (data) => {
  console.log(`Server 2: ${data}`);
});

server2.stderr.on('data', (data) => {
  console.error(`Server 2 error: ${data}`);
});
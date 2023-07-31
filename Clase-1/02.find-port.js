const net = require('node:net')


function findPort(desirePort) {
    return new Promise((resolve, reject) =>{
        const server = net.createServer();
        
        server.listen(desirePort, () =>{
            server.close(() =>{
                resolve(desirePort);
            })
        })

        server.on('error', async (err) => {
            if (err.code = 'EADDRINUSE') {
                resolve(await findPort(desirePort + 1))
            }
        })

    })

}

module.exports = {
    findPort
}



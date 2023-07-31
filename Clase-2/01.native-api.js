const http = require('node:http')

const PORT = 3000

const server = http.createServer((req, res) =>{
    const method = req.method
    const url = req.url
    let body=''
    
    if (method == 'GET') {
        res.end('data')
    }
    
    if (method == 'POST') {
        req.on('data', (chunk) =>{
            body += chunk.toString();
        })

        req.on('end', () => {
            const jsonData = JSON.parse(body);
            jsonData.timestamp = '123123123'
            const data = JSON.stringify(jsonData)
            res.writeHead(200, {'Content-Length': Buffer.byteLength(data), 'Content-Type': 'application/json'})
            res.end(data)            
        })
    }
})

server.listen(PORT , (a) => {
    console.log(`Server on port ${PORT}`);
})

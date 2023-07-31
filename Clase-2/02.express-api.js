const express = require('express');

const app = express();
app.use(express.json())
app.use((req, res, next) => {
    req.body.middleware = 'Esto es un middleware'
    next();
})

app.get('/', (req, res) => {
    res.send({data : 'data'})
})

app.post('/', (req, res) => {
    const { body } = req

    body.timestamp = '123456'
    res.send(body)
})

app.listen(3000, () => {
    console.log(`Server on port 3000`);
});
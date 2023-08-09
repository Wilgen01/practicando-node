const express = require('express');
const data = require('./db.json')
const fs = require('node:fs/promises')

const app = express()
app.use(express.json())

app.get('/movies', (req, res) => {
    res.send(data)
})

app.get('/movies/:id', (req, res) => {
    const {id} = req.params

    const pelicula = data.find(pelicula => pelicula.id == id);

    if (!pelicula) return res.status(404).json({"ok": false, "message": "Pelicula no encontrada"})

    res.send(pelicula);
})

app.listen(3000, () => {
    console.log("Server runnig on port 3000");
})
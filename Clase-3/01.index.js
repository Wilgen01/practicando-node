const express = require('express');
const crypto = require('crypto')
const fs = require('node:fs/promises')

const app = express()
app.use(express.json())

app.get('/movies', async (req, res) => {
    const movies = JSON.parse(await fs.readFile('./db.json', 'utf8'));
    res.send(movies)
})

app.get('/movies/:id', async (req, res) => {
    const {id} = req.params

    const movies = JSON.parse(await fs.readFile('./db.json', 'utf8'));

    const pelicula = movies.find(pelicula => pelicula.id == id);

    if (!pelicula) return res.status(404).json({"ok": false, "message": "Pelicula no encontrada"})

    res.send(pelicula);
})

app.post('/movies/add', async (req, res) => {
    const body = req.body
    body.id = crypto.randomUUID()

    const movies = JSON.parse(await fs.readFile('./db.json', 'utf8'));
    movies.push(body)
    
    await fs.writeFile('./db.json', JSON.stringify(movies) , 'utf-8');
    res.json(movies)
})

app.delete('/movies/:id', async (req, res) => {
    const {id} = req.params

    const movies = JSON.parse(await fs.readFile('./db.json', 'utf8'));
    const peliculasFiltradas = movies.filter(pelicula => pelicula.id != id);
    await fs.writeFile('./db.json', JSON.stringify(peliculasFiltradas) , 'utf-8');

    res.status(200).send({"ok": true, "message": "Pelicula eliminada con exito"})
})

app.listen(3000, () => {
    console.log("Server runnig on port 3000");
})
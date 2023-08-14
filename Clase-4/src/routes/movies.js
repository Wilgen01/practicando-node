import { Router } from 'express'
import { MovieModel } from '../model/local-file-system/movie.js';

export const moviesRouter = Router();



moviesRouter.get('/', async (req, res) => {
    const movies = await MovieModel.getAll();
    res.send(movies)
})

moviesRouter.get('/:id', async (req, res) => {
    const { id } = req.params

    const pelicula = await MovieModel.getById({ id })

    if (!pelicula) return res.status(404).json({ "ok": false, "message": "Pelicula no encontrada" })

    res.send(pelicula);
})

moviesRouter.post('/add', async (req, res) => {
    const body = req.body

    const newMovie = await MovieModel.create({ input: body })

    res.json(newMovie)
})

moviesRouter.delete('/:id', async (req, res) => {
    const { id } = req.params

    const result = await MovieModel.delete({ id })

    res.status(200).send(result)
})
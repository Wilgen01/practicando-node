import { MovieModel } from "../model/local-file-system/movie.js";

export class MovieController {
    static async getAll(req, res) {
        const movies = await MovieModel.getAll();
        res.send(movies)
    }

    static async getById(req, res) {
        const { id } = req.params

        const pelicula = await MovieModel.getById({ id })

        if (!pelicula) return res.status(404).json({ "ok": false, "message": "Pelicula no encontrada" })

        res.send(pelicula);
    }

    static async create(req, res) {
        const body = req.body

        const newMovie = await MovieModel.create({ input: body })

        res.json(newMovie)
    }

    static async delete(req, res) {
        const { id } = req.params

        const result = await MovieModel.delete({ id })

        res.status(200).send(result)
    }


}
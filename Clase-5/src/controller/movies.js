export class MovieController {

    constructor({movieModel}){
        this.movieModel = movieModel
    }

    getAll = async (req, res) => {
        const movies = await this.movieModel.getAll();
        res.send(movies)
    }

    getById = async (req, res) => {
        const { id } = req.params

        const pelicula = await this.movieModel.getById({ id })

        if (!pelicula) return res.status(404).json({ "ok": false, "message": "Pelicula no encontrada" })

        res.send(pelicula);
    }

    create = async (req, res) => {
        const body = req.body

        const newMovie = await this.movieModel.create({ input: body })

        res.json(newMovie)
    }

    delete = async (req, res) => {
        const { id } = req.params

        const result = await this.movieModel.delete({ id })

        res.status(200).send(result)
    }


}
import { Router } from 'express'
import { MovieController } from '../controller/movies.js';


export const createMovieRouter = ({ movieModel }) => {
    const moviesRouter = Router();

    const movieController = new MovieController({ movieModel: movieModel })

    moviesRouter.get('/', movieController.getAll)

    moviesRouter.get('/:id', movieController.getById)

    moviesRouter.post('/add', movieController.create)

    moviesRouter.delete('/:id', movieController.delete)

    return moviesRouter
}
import { Router } from 'express'
import { MovieController } from '../controller/movies.js';

export const moviesRouter = Router();



moviesRouter.get('/', MovieController.getAll)

moviesRouter.get('/:id', MovieController.getById)

moviesRouter.post('/add', MovieController.create)

moviesRouter.delete('/:id', MovieController.delete)
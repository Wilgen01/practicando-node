import express, { json } from "express"
import { createMovieRouter } from "./routes/movies.js";
import { MovieModel } from './model/mysql/movie.js';
// import { MovieModel } from './model/local-file-system/movie.js';


const app = express();
app.use(json());

app.use('/movies', createMovieRouter({ movieModel: MovieModel }))

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})
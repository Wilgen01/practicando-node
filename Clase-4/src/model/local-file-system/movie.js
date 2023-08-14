import fs from 'fs/promises'
import {randomUUID} from 'node:crypto'


export class MovieModel {
    static async getAll() {
        return JSON.parse(await fs.readFile('./db.json', 'utf8'));
    }

    static async getById({ id }) {
        const movies = JSON.parse(await fs.readFile('./db.json', 'utf8'));
        return movies.find(pelicula => pelicula.id == id);
    }

    static async create({ input }) {
        const newMovie = {
            id: randomUUID(),
            ...input
        }
        const movies = JSON.parse(await fs.readFile('./db.json', 'utf8'));
        movies.push(newMovie)
        await fs.writeFile('./db.json', JSON.stringify(movies), 'utf-8');
        return newMovie
    }

    static async delete({ id }) {
        const movies = JSON.parse(await fs.readFile('./db.json', 'utf8'));
        const peliculasFiltradas = movies.filter(pelicula => pelicula.id != id);
        await fs.writeFile('./db.json', JSON.stringify(peliculasFiltradas), 'utf-8');
        return { "ok": true, "message": "Pelicula eliminada con exito" }
    }
}
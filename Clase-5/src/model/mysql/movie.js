import mysql from 'mysql2/promise'

const config = {
    host: 'localhost',
    prompt: 3306,
    user: 'root',
    password: '123456',
    database: 'moviesdb'
}

const connection = await mysql.createConnection(config);

export class MovieModel {
    static async getAll() {
        const query = 'SELECT *, bin_to_uuid(id) id FROM movie m'
        const [movies] = await connection.query(query)
        return movies;
    }

    static async getById({ id }) {
        const query = 'SELECT BIN_TO_UUID(id) id, title, year, director, duration, poster, rate FROM movie WHERE id = UUID_TO_BIN(?)'
        const [movie] = await connection.query(query,[id])
        return movie
    }

    static async create({ input }) {
    }

    static async delete({ id }) {
    }
}
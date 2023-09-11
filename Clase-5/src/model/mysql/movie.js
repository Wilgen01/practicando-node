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
        const query = 'select *, bin_to_uuid(id) id from movie m'
        const [movies] = await connection.query(query)
        return movies;
    }

    static async getById({ id }) {
    }

    static async create({ input }) {
    }

    static async delete({ id }) {
    }
}
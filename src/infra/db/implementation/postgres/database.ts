import Pool from 'pg'

export const pool = new Pool.Pool({
    user: 'root',
    database: 'weatherme',
    password: 'weatherme',
    host: 'localhost',
    port: 5430,
})

pool.on('connect', () => {
    console.log('Postgres Connected!')
})

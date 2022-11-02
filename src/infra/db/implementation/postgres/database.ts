import Pool from 'pg';

export const pool = new Pool.Pool({
    user: 'postgres',
    database: 'weather_me',
    password: 'weatherme',
    host: 'localhost',
    port: 5433,
});


const Pool = require('pg').Pool;

export const pool = new Pool({
    user: 'postgres',
    database: 'weather_me',
    password: '0000',
    host: 'localhost',
    port: 5433,
});


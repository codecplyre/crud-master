const config = {
    development: {
        username: 'postgres',
        password: 'postgres',
        database: 'movies',
        host: '127.0.0.1',
        dialect: 'postgres',
        port: 5432,
    },
    test: {
        username: 'postgres',
        password: 'postgres',
        database: 'movies_test',
        host: '127.0.0.1',
        dialect: 'postgres',
    },
    production: {
        username: 'postgres',
        password: 'postgres',
        database: 'movies_production',
        host: '127.0.0.1',
        dialect: 'postgres',
    },
};
export default config;

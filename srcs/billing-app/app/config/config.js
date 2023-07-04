const config = {
    development: {
        username: 'postgres',
        password: 'postgres',
        database: 'orders',
        host: '127.0.0.1',
        dialect: 'postgres',
        port: 5433,
    },
    test: {
        username: 'postgres',
        password: 'postgres',
        database: 'orders_test',
        host: '127.0.0.1',
        dialect: 'postgres',
    },
    production: {
        username: 'postgres',
        password: 'postgres',
        database: 'orders_production',
        host: '127.0.0.1',
        dialect: 'postgres',
    },
};
export default config;

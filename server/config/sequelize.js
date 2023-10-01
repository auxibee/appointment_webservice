require('dotenv').config();

const {
  DB_HOST, DB_PORT = 5432, DB_NAME, DB_USER, DB_NAME_TEST, DB_PASSWORD,
} = process.env;

module.exports = {
  development: {
    username: String(DB_USER),
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    port: DB_PORT,
    dialect: 'postgres',
  },
  test: {
    username: String(DB_USER),
    password: DB_PASSWORD,
    database: DB_NAME_TEST,
    host: DB_HOST,
    port: DB_PORT,
    dialect: 'postgres',
  },
};

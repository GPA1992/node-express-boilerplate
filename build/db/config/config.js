"use strict";
require("dotenv/config");
console.log('user', process.env.DB_PORT);
const config = {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.DB_PORT),
    dialect: 'postgres',
};
module.exports = config;

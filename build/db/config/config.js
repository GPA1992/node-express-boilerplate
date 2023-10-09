"use strict";
require("dotenv/config");
const config = {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.MYSQL_HOST,
    port: Number(process.env.DB_PORT),
    dialect: 'mysql',
};
module.exports = config;

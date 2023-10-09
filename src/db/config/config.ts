import 'dotenv/config';
import { Options } from 'sequelize';

const config: Options = {
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.MYSQL_HOST,
  port: Number(process.env.DB_PORT),
  dialect: 'mysql',
};

export = config;

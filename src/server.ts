import { App } from "./app";
import dotenv from 'dotenv';
dotenv.config();

const PORT = parseInt(`${process.env.PORT}`);


new App().start(PORT)
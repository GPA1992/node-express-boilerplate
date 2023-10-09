"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const express = require('express');
const app = express();
app.use(express.json());
app.get('/', user_routes_1.default);
exports.default = app;

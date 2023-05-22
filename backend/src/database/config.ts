require('dotenv').config();
import { Sequelize } from "sequelize-typescript";
import User from "./models/UserModel";

const connection = new Sequelize({
    dialect: "mysql",
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    logging: false,
    models: [typeof User],
});

export default connection;
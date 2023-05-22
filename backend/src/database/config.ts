require('dotenv').config();
import { DataSource } from "typeorm";
import {User} from "./models/UserModel";

const connection =  new DataSource({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: 3306,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [User],
    synchronize: true, // Set to false in production
    logging:false,
  });

export default connection;
import { DataSource, createConnections } from "typeorm";
import { User } from "../entities/User";


export const MysqlDataSource = new DataSource({
    // "type": "mysql",
    // "host": process.env.MYSQLDB_HOST,
    // "port": Number(process.env.MYSQLDB_PORT),
    // "username": process.env.MYSQLDB_USR,
    // "password": process.env.MYSQLDB_PSW,
    // "database": process.env.MYSQLDB,
    // "synchronize": true,
    // "logging": false,
    // "ssl": false,
    // "extra": {
    //     ssl: {
    //         rejectUnauthorized: true,
    //     },
    // },


    type: 'mysql',
    host: process.env.MYSQLDB_HOST,
    port: Number(process.env.MYSQLDB_PORT),
    username: process.env.MYSQLDB_USR,
    password: process.env.MYSQLDB_PSW,
    database: process.env.MYSQLDB,
    synchronize: true,
    entities: [
        "./src/entities/*.ts"
    ]
})
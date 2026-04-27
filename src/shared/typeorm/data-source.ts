import "reflect-metadata";
import { DataSource } from "typeorm";
import path from "path";
import Tenis from "./entities/tenis";


export const AppDataSource = new DataSource({
 type: "postgres",
 host: "localhost", // se Node está fora do Docker
 port: 5433,
 username: "postgres",
 password: "docker",
 database: "postgres",
 synchronize: true, // sempre false em produção/migrations
 logging: false,
 entities: [Tenis],
 migrations: [path.join(__dirname, "migrations", "*.ts")],
 subscribers: [],
});
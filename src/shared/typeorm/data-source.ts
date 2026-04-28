import "reflect-metadata";
import { DataSource } from "typeorm";
import path from "path";
import Tenis from "./entities/tenis";


export const AppDataSource = new DataSource({
 type: "postgres",
<<<<<<< HEAD
 host: "localhost", 
=======
 host: "localhost",
>>>>>>> f0d5a2d9cffe02c001a2504ab707e97ce43bd908
 port: 5433,
 username: "postgres",
 password: "docker",
 database: "postgres",
<<<<<<< HEAD
 synchronize: true, 
=======
 synchronize: true,
>>>>>>> f0d5a2d9cffe02c001a2504ab707e97ce43bd908
 logging: false,
 entities: [Tenis],
 migrations: [path.join(__dirname, "migrations", "*.ts")],
 subscribers: [],
});

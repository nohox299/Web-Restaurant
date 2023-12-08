import { DataSource } from "typeorm";
import { Task } from "../entity/Task";

export default new DataSource({
    type: "mysql",
    host: "localhost",
    port: 4306,
    username: "root",
    password: "",
    database: "webrestaurant",
    entities: [Task],
    synchronize: true,
    logging: false
})
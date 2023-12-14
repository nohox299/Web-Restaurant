import { DataSource } from "typeorm";
import { Usuarios } from "../entity/Usuarios";
import { Productos } from "../entity/Productos";
import { ProductosEnPromocion } from "../entity/ProductosenPromocion";
import { Compras } from "../entity/Compras";
import { DetalleDeCompra } from "../entity/DetalladoCompra";

export default new DataSource({
    type: "mysql",
    host: "13.59.46.201",
    port: 3306,
    username: "root",
    password: "",
    database: "testeo",
    entities: [Usuarios, Productos, ProductosEnPromocion, Compras, DetalleDeCompra],
    synchronize: true,
    logging: false
})
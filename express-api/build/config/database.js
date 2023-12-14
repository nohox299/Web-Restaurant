"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Usuarios_1 = require("../entity/Usuarios");
const Productos_1 = require("../entity/Productos");
const ProductosenPromocion_1 = require("../entity/ProductosenPromocion");
const Compras_1 = require("../entity/Compras");
const DetalladoCompra_1 = require("../entity/DetalladoCompra");
exports.default = new typeorm_1.DataSource({
    type: "mysql",
    host: "13.59.46.201",
    port: 3306,
    username: "penegrueso",
    password: "cabezasuave",
    database: "restaurante",
    entities: [Usuarios_1.Usuarios, Productos_1.Productos, ProductosenPromocion_1.ProductosEnPromocion, Compras_1.Compras, DetalladoCompra_1.DetalleDeCompra],
    synchronize: true,
    logging: true
});

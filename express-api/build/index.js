"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const database_1 = __importDefault(require("./config/database"));
const usuarios_routes_1 = __importDefault(require("./tasks/usuarios.routes"));
const productos_routes_1 = __importDefault(require("./tasks/productos.routes"));
const productosenpromocion_routes_1 = __importDefault(require("./tasks/productosenpromocion.routes"));
const compras_routes_1 = __importDefault(require("./tasks/compras.routes"));
const detalladocompra_routes_1 = __importDefault(require("./tasks/detalladocompra.routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
database_1.default.initialize()
    .then(() => console.log("Database connected"))
    .catch(console.error);
app.use('/api', usuarios_routes_1.default);
app.use('/api', productos_routes_1.default);
app.use('/api', productosenpromocion_routes_1.default);
app.use('/api', compras_routes_1.default);
app.use('/api', detalladocompra_routes_1.default);
app.listen(3030, () => {
    console.log("App execute in port: 3030");
});

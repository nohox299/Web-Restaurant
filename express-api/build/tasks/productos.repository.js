"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductosRepository = void 0;
const database_1 = __importDefault(require("../config/database"));
const http_errors_1 = require("http-errors");
const Productos_1 = require("../entity/Productos");
class ProductosRepository {
    async create(data, query) {
        const repository = database_1.default.getRepository(Productos_1.Productos);
        const producto = repository.create(data);
        await repository.save(producto);
        return producto;
    }
    async list(query) {
        const repository = database_1.default.getRepository(Productos_1.Productos);
        return repository.find();
    }
    async get(id, query) {
        const repository = database_1.default.getRepository(Productos_1.Productos);
        const producto = await repository.findOne({ where: { id: id } });
        if (!producto) {
            throw new http_errors_1.NotFound("Producto does not exist");
        }
        return producto;
    }
    async update(id, data, query) {
        const repository = database_1.default.getRepository(Productos_1.Productos);
        await repository.update(id, data);
        return this.get(id, query);
    }
    async remove(id, query) {
        const repository = database_1.default.getRepository(Productos_1.Productos);
        const producto = await this.get(id, query);
        await repository.delete(id);
        return producto;
    }
}
exports.ProductosRepository = ProductosRepository;

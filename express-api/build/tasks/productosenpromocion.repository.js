"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductosEnPromocionRepository = void 0;
const database_1 = __importDefault(require("../config/database"));
const http_errors_1 = require("http-errors");
const ProductosenPromocion_1 = require("../entity/ProductosenPromocion");
class ProductosEnPromocionRepository {
    async create(data, query) {
        const repository = database_1.default.getRepository(ProductosenPromocion_1.ProductosEnPromocion);
        const productoEnPromocion = repository.create(data);
        await repository.save(productoEnPromocion);
        return productoEnPromocion;
    }
    async list(query) {
        const repository = database_1.default.getRepository(ProductosenPromocion_1.ProductosEnPromocion);
        return repository.find();
    }
    async get(id, query) {
        const repository = database_1.default.getRepository(ProductosenPromocion_1.ProductosEnPromocion);
        const productoEnPromocion = await repository.findOne({ where: { id: id } });
        if (!productoEnPromocion) {
            throw new http_errors_1.NotFound("Producto en promoción does not exist");
        }
        return productoEnPromocion;
    }
    async update(id, data, query) {
        const repository = database_1.default.getRepository(ProductosenPromocion_1.ProductosEnPromocion);
        await repository.update(id, data);
        return this.get(id, query);
    }
    async remove(id, query) {
        const repository = database_1.default.getRepository(ProductosenPromocion_1.ProductosEnPromocion);
        const productoEnPromocion = await this.get(id, query);
        await repository.delete(id);
        return productoEnPromocion;
    }
}
exports.ProductosEnPromocionRepository = ProductosEnPromocionRepository;

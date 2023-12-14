"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetalleDeCompraRepository = void 0;
const database_1 = __importDefault(require("../config/database"));
const http_errors_1 = require("http-errors");
const DetalladoCompra_1 = require("../entity/DetalladoCompra");
class DetalleDeCompraRepository {
    async create(data, query) {
        const repository = database_1.default.getRepository(DetalladoCompra_1.DetalleDeCompra);
        const detalleDeCompra = repository.create(data);
        await repository.save(detalleDeCompra);
        return detalleDeCompra;
    }
    async list(query) {
        const repository = database_1.default.getRepository(DetalladoCompra_1.DetalleDeCompra);
        return repository.find();
    }
    async get(id, query) {
        const repository = database_1.default.getRepository(DetalladoCompra_1.DetalleDeCompra);
        const detalleDeCompra = await repository.findOne({ where: { id: id } });
        if (!detalleDeCompra) {
            throw new http_errors_1.NotFound("Detalle de compra does not exist");
        }
        return detalleDeCompra;
    }
    async update(id, data, query) {
        const repository = database_1.default.getRepository(DetalladoCompra_1.DetalleDeCompra);
        await repository.update(id, data);
        return this.get(id, query);
    }
    async remove(id, query) {
        const repository = database_1.default.getRepository(DetalladoCompra_1.DetalleDeCompra);
        const detalleDeCompra = await this.get(id, query);
        await repository.delete(id);
        return detalleDeCompra;
    }
}
exports.DetalleDeCompraRepository = DetalleDeCompraRepository;

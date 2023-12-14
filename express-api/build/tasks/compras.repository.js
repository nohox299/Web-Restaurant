"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComprasRepository = void 0;
const database_1 = __importDefault(require("../config/database"));
const http_errors_1 = require("http-errors");
const Compras_1 = require("../entity/Compras");
class ComprasRepository {
    async create(data, query) {
        const repository = database_1.default.getRepository(Compras_1.Compras);
        const compra = repository.create(data);
        await repository.save(compra);
        return compra;
    }
    async list(query) {
        const repository = database_1.default.getRepository(Compras_1.Compras);
        return repository.find();
    }
    async get(id, query) {
        const repository = database_1.default.getRepository(Compras_1.Compras);
        const compra = await repository.findOne({ where: { id: id } });
        if (!compra) {
            throw new http_errors_1.NotFound("Compra does not exist");
        }
        return compra;
    }
    async update(id, data, query) {
        const repository = database_1.default.getRepository(Compras_1.Compras);
        await repository.update(id, data);
        return this.get(id, query);
    }
    async remove(id, query) {
        const repository = database_1.default.getRepository(Compras_1.Compras);
        const compra = await this.get(id, query);
        await repository.delete(id);
        return compra;
    }
}
exports.ComprasRepository = ComprasRepository;

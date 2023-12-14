"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuariosRepository = void 0;
const database_1 = __importDefault(require("../config/database"));
const http_errors_1 = require("http-errors");
const Usuarios_1 = require("../entity/Usuarios");
class UsuariosRepository {
    async create(data, query) {
        const repository = database_1.default.getRepository(Usuarios_1.Usuarios);
        const usuario = repository.create(data);
        await repository.save(usuario);
        return usuario;
    }
    async list(query) {
        const repository = database_1.default.getRepository(Usuarios_1.Usuarios);
        return repository.find();
    }
    async get(id, query) {
        const repository = database_1.default.getRepository(Usuarios_1.Usuarios);
        const usuario = await repository.findOne({ where: { id: id } });
        if (!usuario) {
            throw new http_errors_1.NotFound("Usuario does not exist");
        }
        return usuario;
    }
    async update(id, data, query) {
        const repository = database_1.default.getRepository(Usuarios_1.Usuarios);
        await repository.update(id, data);
        return this.get(id, query);
    }
    async remove(id, query) {
        const repository = database_1.default.getRepository(Usuarios_1.Usuarios);
        const usuario = await this.get(id, query);
        await repository.delete(id);
        return usuario;
    }
}
exports.UsuariosRepository = UsuariosRepository;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuariosController = void 0;
class UsuariosController {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async create(req, res, next) {
        try {
            const body = req.body;
            const usuario = await this.repository.create(body);
            res.status(200).json(usuario);
        }
        catch (error) {
            next(error);
        }
    }
    async list(req, res, next) {
        try {
            const usuarios = await this.repository.list();
            res.status(200).json(usuarios);
        }
        catch (error) {
            next(error);
        }
    }
    async get(req, res, next) {
        try {
            const { usuarioId } = req.params;
            const usuario = await this.repository.get(usuarioId);
            res.status(200).json(usuario);
        }
        catch (error) {
            next(error);
        }
    }
    async update(req, res, next) {
        try {
            const { usuarioId } = req.params;
            const body = req.body;
            const usuario = await this.repository.update(usuarioId, body);
            res.status(200).json(usuario);
        }
        catch (error) {
            next(error);
        }
    }
    async remove(req, res, next) {
        try {
            const { usuarioId } = req.params;
            const usuario = await this.repository.remove(usuarioId);
            res.status(200).json(usuario);
        }
        catch (error) {
            next(error);
        }
    }
}
exports.UsuariosController = UsuariosController;

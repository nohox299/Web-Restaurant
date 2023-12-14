"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComprasController = void 0;
class ComprasController {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async create(req, res, next) {
        try {
            const body = req.body;
            const compra = await this.repository.create(body);
            res.status(200).json(compra);
        }
        catch (error) {
            next(error);
        }
    }
    async list(req, res, next) {
        try {
            const compras = await this.repository.list();
            res.status(200).json(compras);
        }
        catch (error) {
            next(error);
        }
    }
    async get(req, res, next) {
        try {
            const { compraId } = req.params;
            const compra = await this.repository.get(compraId);
            res.status(200).json(compra);
        }
        catch (error) {
            next(error);
        }
    }
    async update(req, res, next) {
        try {
            const { compraId } = req.params;
            const body = req.body;
            const compra = await this.repository.update(compraId, body);
            res.status(200).json(compra);
        }
        catch (error) {
            next(error);
        }
    }
    async remove(req, res, next) {
        try {
            const { compraId } = req.params;
            const compra = await this.repository.remove(compraId);
            res.status(200).json(compra);
        }
        catch (error) {
            next(error);
        }
    }
}
exports.ComprasController = ComprasController;

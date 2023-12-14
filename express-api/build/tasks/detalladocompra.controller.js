"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetalleDeCompraController = void 0;
class DetalleDeCompraController {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async create(req, res, next) {
        try {
            const body = req.body;
            const detalleDeCompra = await this.repository.create(body);
            res.status(200).json(detalleDeCompra);
        }
        catch (error) {
            next(error);
        }
    }
    async list(req, res, next) {
        try {
            const detallesDeCompra = await this.repository.list();
            res.status(200).json(detallesDeCompra);
        }
        catch (error) {
            next(error);
        }
    }
    async get(req, res, next) {
        try {
            const { detalleDeCompraId } = req.params;
            const detalleDeCompra = await this.repository.get(detalleDeCompraId);
            res.status(200).json(detalleDeCompra);
        }
        catch (error) {
            next(error);
        }
    }
    async update(req, res, next) {
        try {
            const { detalleDeCompraId } = req.params;
            const body = req.body;
            const detalleDeCompra = await this.repository.update(detalleDeCompraId, body);
            res.status(200).json(detalleDeCompra);
        }
        catch (error) {
            next(error);
        }
    }
    async remove(req, res, next) {
        try {
            const { detalleDeCompraId } = req.params;
            const detalleDeCompra = await this.repository.remove(detalleDeCompraId);
            res.status(200).json(detalleDeCompra);
        }
        catch (error) {
            next(error);
        }
    }
}
exports.DetalleDeCompraController = DetalleDeCompraController;

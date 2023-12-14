"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductosController = void 0;
class ProductosController {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async create(req, res, next) {
        try {
            const body = req.body;
            const producto = await this.repository.create(body);
            res.status(200).json(producto);
        }
        catch (error) {
            next(error);
        }
    }
    async list(req, res, next) {
        try {
            const productos = await this.repository.list();
            res.status(200).json(productos);
        }
        catch (error) {
            next(error);
        }
    }
    async get(req, res, next) {
        try {
            const { productoId } = req.params;
            const producto = await this.repository.get(productoId);
            res.status(200).json(producto);
        }
        catch (error) {
            next(error);
        }
    }
    async update(req, res, next) {
        try {
            const { productoId } = req.params;
            const body = req.body;
            const producto = await this.repository.update(productoId, body);
            res.status(200).json(producto);
        }
        catch (error) {
            next(error);
        }
    }
    async remove(req, res, next) {
        try {
            const { productoId } = req.params;
            const producto = await this.repository.remove(productoId);
            res.status(200).json(producto);
        }
        catch (error) {
            next(error);
        }
    }
}
exports.ProductosController = ProductosController;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductosEnPromocionController = void 0;
class ProductosEnPromocionController {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async create(req, res, next) {
        try {
            const body = req.body;
            const productoEnPromocion = await this.repository.create(body);
            res.status(200).json(productoEnPromocion);
        }
        catch (error) {
            next(error);
        }
    }
    async list(req, res, next) {
        try {
            const productosEnPromocion = await this.repository.list();
            res.status(200).json(productosEnPromocion);
        }
        catch (error) {
            next(error);
        }
    }
    async get(req, res, next) {
        try {
            const { productoEnPromocionId } = req.params;
            const productoEnPromocion = await this.repository.get(productoEnPromocionId);
            res.status(200).json(productoEnPromocion);
        }
        catch (error) {
            next(error);
        }
    }
    async update(req, res, next) {
        try {
            const { productoEnPromocionId } = req.params;
            const body = req.body;
            const productoEnPromocion = await this.repository.update(productoEnPromocionId, body);
            res.status(200).json(productoEnPromocion);
        }
        catch (error) {
            next(error);
        }
    }
    async remove(req, res, next) {
        try {
            const { productoEnPromocionId } = req.params;
            const productoEnPromocion = await this.repository.remove(productoEnPromocionId);
            res.status(200).json(productoEnPromocion);
        }
        catch (error) {
            next(error);
        }
    }
}
exports.ProductosEnPromocionController = ProductosEnPromocionController;

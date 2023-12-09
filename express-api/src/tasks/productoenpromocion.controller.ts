import { Request, Response, NextFunction } from "express";
import { ProductosEnPromocion } from "../entity/ProductosenPromocion";
import { DatabaseRepository } from "../declarations";

export class ProductosEnPromocionController {
    constructor(private repository: DatabaseRepository<ProductosEnPromocion>) {}

    async create(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const body = req.body;

            const productoEnPromocion = await this.repository.create(body);

            res.status(200).json(productoEnPromocion);
        } catch (error) {
            next(error);
        }
    }

    async list(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const productosEnPromocion = await this.repository.list();
            res.status(200).json(productosEnPromocion);
        } catch (error) {
            next(error);
        }
    }

    async get(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { productoEnPromocionId } = req.params;
            const productoEnPromocion = await this.repository.get(productoEnPromocionId);
            res.status(200).json(productoEnPromocion);
        } catch (error) {
            next(error);
        }
    }

    async update(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { productoEnPromocionId } = req.params;
            const body = req.body;

            const productoEnPromocion = await this.repository.update(productoEnPromocionId, body);
            res.status(200).json(productoEnPromocion);
        } catch (error) {
            next(error);
        }
    }

    async remove(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { productoEnPromocionId } = req.params;
            const productoEnPromocion = await this.repository.remove(productoEnPromocionId);
            res.status(200).json(productoEnPromocion);
        } catch (error) {
            next(error);
        }
    }
}
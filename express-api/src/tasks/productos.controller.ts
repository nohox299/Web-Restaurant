import { Request, Response, NextFunction } from "express";
import { Productos } from "../entity/Productos";
import { DatabaseRepository } from "../declarations";

export class ProductosController {
    constructor(private repository: DatabaseRepository<Productos>) {}

    async create(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const body = req.body;

            const producto = await this.repository.create(body);

            res.status(200).json(producto);
        } catch (error) {
            next(error);
        }
    }

    async list(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const productos = await this.repository.list();
            res.status(200).json(productos);
        } catch (error) {
            next(error);
        }
    }

    async get(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { productoId } = req.params;
            const producto = await this.repository.get(productoId);
            res.status(200).json(producto);
        } catch (error) {
            next(error);
        }
    }

    async update(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { productoId } = req.params;
            const body = req.body;

            const producto = await this.repository.update(productoId, body);
            res.status(200).json(producto);
        } catch (error) {
            next(error);
        }
    }

    async remove(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { productoId } = req.params;
            const producto = await this.repository.remove(productoId);
            res.status(200).json(producto);
        } catch (error) {
            next(error);
        }
    }
}

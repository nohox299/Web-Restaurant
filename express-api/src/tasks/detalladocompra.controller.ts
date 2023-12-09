import { Request, Response, NextFunction } from "express";
import { DetalleDeCompra } from "../entity/DetalladoCompra";
import { DatabaseRepository } from "../declarations";

export class DetalleDeCompraController {
    constructor(private repository: DatabaseRepository<DetalleDeCompra>) {}

    async create(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const body = req.body;

            const detalleDeCompra = await this.repository.create(body);

            res.status(200).json(detalleDeCompra);
        } catch (error) {
            next(error);
        }
    }

    async list(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const detallesDeCompra = await this.repository.list();
            res.status(200).json(detallesDeCompra);
        } catch (error) {
            next(error);
        }
    }

    async get(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { detalleDeCompraId } = req.params;
            const detalleDeCompra = await this.repository.get(detalleDeCompraId);
            res.status(200).json(detalleDeCompra);
        } catch (error) {
            next(error);
        }
    }

    async update(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { detalleDeCompraId } = req.params;
            const body = req.body;

            const detalleDeCompra = await this.repository.update(detalleDeCompraId, body);
            res.status(200).json(detalleDeCompra);
        } catch (error) {
            next(error);
        }
    }

    async remove(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { detalleDeCompraId } = req.params;
            const detalleDeCompra = await this.repository.remove(detalleDeCompraId);
            res.status(200).json(detalleDeCompra);
        } catch (error) {
            next(error);
        }
    }
}

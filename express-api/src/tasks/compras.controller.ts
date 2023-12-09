import { Request, Response, NextFunction } from "express";
import { Compras } from "../entity/Compras";
import { DatabaseRepository } from "../declarations";

export class ComprasController {
    constructor(private repository: DatabaseRepository<Compras>) {}

    async create(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const body = req.body;
            const compra = await this.repository.create(body);
            res.status(200).json(compra);
        } catch (error) {
            next(error);
        }
    }

    async list(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const compras = await this.repository.list();
            res.status(200).json(compras);
        } catch (error) {
            next(error);
        }
    }

    async get(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { compraId } = req.params;
            const compra = await this.repository.get(compraId);
            res.status(200).json(compra);
        } catch (error) {
            next(error);
        }
    }

    async update(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { compraId } = req.params;
            const body = req.body;
            const compra = await this.repository.update(compraId, body);
            res.status(200).json(compra);
        } catch (error) {
            next(error);
        }
    }

    async remove(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { compraId } = req.params;
            const compra = await this.repository.remove(compraId);
            res.status(200).json(compra);
        } catch (error) {
            next(error);
        }
    }
}

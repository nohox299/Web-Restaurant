import { Request, Response, NextFunction } from "express";
import { Usuarios } from "../entity/usuarios";
import { DatabaseRepository } from "../declarations";

export class UsuariosController {
    constructor(private repository: DatabaseRepository<Usuarios>) {}

    async create(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const body = req.body;

            const usuario = await this.repository.create(body);

            res.status(200).json(usuario);
        } catch (error) {
            next(error);
        }
    }

    async list(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const usuarios = await this.repository.list();
            res.status(200).json(usuarios);
        } catch (error) {
            next(error);
        }
    }

    async get(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { usuarioId } = req.params;
            const usuario = await this.repository.get(usuarioId);
            res.status(200).json(usuario);
        } catch (error) {
            next(error);
        }
    }

    async update(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { usuarioId } = req.params;
            const body = req.body;

            const usuario = await this.repository.update(usuarioId, body);
            res.status(200).json(usuario);
        } catch (error) {
            next(error);
        }
    }

    async remove(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { usuarioId } = req.params;
            const usuario = await this.repository.remove(usuarioId);
            res.status(200).json(usuario);
        } catch (error) {
            next(error);
        }
    }
}

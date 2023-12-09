import database from "../config/database";
import { NotFound } from "http-errors";
import { DatabaseRepository, Id, Query } from "../declarations";
import { Compras } from "../entity/Compras";

export class ComprasRepository implements DatabaseRepository<Compras> {
    async create(data: Partial<Compras>, query?: Query | undefined): Promise<Compras> {
        const repository = database.getRepository(Compras);

        const compra = repository.create(data);
        await repository.save(compra);

        return compra;
    }

    async list(query?: Query | undefined): Promise<Compras[]> {
        const repository = database.getRepository(Compras);
        return repository.find();
    }

    async get(id: Id, query?: Query | undefined): Promise<Compras> {
        const repository = database.getRepository(Compras);
        const compra = await repository.findOne({ where: { id: id as any } });

        if (!compra) {
            throw new NotFound("Compra does not exist");
        }

        return compra;
    }

    async update(id: Id, data: Compras, query?: Query | undefined): Promise<Compras> {
        const repository = database.getRepository(Compras);
        await repository.update(id, data);
        return this.get(id, query);
    }

    async remove(id: Id, query?: Query | undefined): Promise<Compras> {
        const repository = database.getRepository(Compras);
        const compra = await this.get(id, query);
        await repository.delete(id);
        return compra;
    }
    // ...
}

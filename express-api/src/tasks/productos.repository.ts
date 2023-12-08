import database from "../config/database";
import { NotFound } from "http-errors";
import { DatabaseRepository, Id, Query } from "../declarations";
import { Productos } from "../entity/Productos";

export class ProductosRepository implements DatabaseRepository<Productos> {
    async create(data: Partial<Productos>, query?: Query | undefined): Promise<Productos> {
        const repository = database.getRepository(Productos);

        const producto = repository.create(data);
        await repository.save(producto);

        return producto;
    }

    async list(query?: Query | undefined): Promise<Productos[]> {
        const repository = database.getRepository(Productos);
        return repository.find();
    }

    async get(id: Id, query?: Query | undefined): Promise<Productos> {
        const repository = database.getRepository(Productos);
        const producto = await repository.findOne({ where: { id: id as any } });

        if (!producto) {
            throw new NotFound("Producto does not exist");
        }

        return producto;
    }

    async update(id: Id, data: Productos, query?: Query | undefined): Promise<Productos> {
        const repository = database.getRepository(Productos);
        await repository.update(id, data);
        return this.get(id, query);
    }

    async remove(id: Id, query?: Query | undefined): Promise<Productos> {
        const repository = database.getRepository(Productos);
        const producto = await this.get(id, query);
        await repository.delete(id);
        return producto;
    }
    // ...
}

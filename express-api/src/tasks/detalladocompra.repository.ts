import database from "../config/database";
import { NotFound } from "http-errors";
import { DatabaseRepository, Id, Query } from "../declarations";
import { DetalleDeCompra } from "../entity/DetalladoCompra";

export class DetalleDeCompraRepository implements DatabaseRepository<DetalleDeCompra> {
    async create(data: Partial<DetalleDeCompra>, query?: Query | undefined): Promise<DetalleDeCompra> {
        const repository = database.getRepository(DetalleDeCompra);

        const detalleDeCompra = repository.create(data);
        await repository.save(detalleDeCompra);

        return detalleDeCompra;
    }

    async list(query?: Query | undefined): Promise<DetalleDeCompra[]> {
        const repository = database.getRepository(DetalleDeCompra);
        return repository.find();
    }

    async get(id: Id, query?: Query | undefined): Promise<DetalleDeCompra> {
        const repository = database.getRepository(DetalleDeCompra);
        const detalleDeCompra = await repository.findOne({ where: { id: id as any } });

        if (!detalleDeCompra) {
            throw new NotFound("Detalle de compra does not exist");
        }

        return detalleDeCompra;
    }

    async update(id: Id, data: DetalleDeCompra, query?: Query | undefined): Promise<DetalleDeCompra> {
        const repository = database.getRepository(DetalleDeCompra);
        await repository.update(id, data);
        return this.get(id, query);
    }

    async remove(id: Id, query?: Query | undefined): Promise<DetalleDeCompra> {
        const repository = database.getRepository(DetalleDeCompra);
        const detalleDeCompra = await this.get(id, query);
        await repository.delete(id);
        return detalleDeCompra;
    }
    // ...
}

import database from "../config/database";
import { NotFound } from "http-errors";
import { DatabaseRepository, Id, Query } from "../declarations";
import { ProductosEnPromocion } from "../entity/ProductosenPromocion";

export class ProductosEnPromocionRepository implements DatabaseRepository<ProductosEnPromocion> {
    async create(data: Partial<ProductosEnPromocion>, query?: Query | undefined): Promise<ProductosEnPromocion> {
        const repository = database.getRepository(ProductosEnPromocion);

        const productoEnPromocion = repository.create(data);
        await repository.save(productoEnPromocion);

        return productoEnPromocion;
    }

    async list(query?: Query | undefined): Promise<ProductosEnPromocion[]> {
        const repository = database.getRepository(ProductosEnPromocion);
        return repository.find();
    }

    async get(id: Id, query?: Query | undefined): Promise<ProductosEnPromocion> {
        const repository = database.getRepository(ProductosEnPromocion);
        const productoEnPromocion = await repository.findOne({ where: { id: id as any } });

        if (!productoEnPromocion) {
            throw new NotFound("Producto en promoción does not exist");
        }

        return productoEnPromocion;
    }

    async update(id: Id, data: ProductosEnPromocion, query?: Query | undefined): Promise<ProductosEnPromocion> {
        const repository = database.getRepository(ProductosEnPromocion);
        await repository.update(id, data);
        return this.get(id, query);
    }

    async remove(id: Id, query?: Query | undefined): Promise<ProductosEnPromocion> {
        const repository = database.getRepository(ProductosEnPromocion);
        const productoEnPromocion = await this.get(id, query);
        await repository.delete(id);
        return productoEnPromocion;
    }
    // ...
}

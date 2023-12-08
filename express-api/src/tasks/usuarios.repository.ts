import database from "../config/database";
import { NotFound } from "http-errors";
import { DatabaseRepository, Id, Query } from "../declarations";
import { Usuarios } from "../entity/usuarios";

export class UsuariosRepository implements DatabaseRepository<Usuarios> {
    async create(data: Partial<Usuarios>, query?: Query | undefined): Promise<Usuarios> {
        const repository = database.getRepository(Usuarios);

        const usuario = repository.create(data);
        await repository.save(usuario);

        return usuario;
    }

    async list(query?: Query | undefined): Promise<Usuarios[]> {
        const repository = database.getRepository(Usuarios);
        return repository.find();
    }

    async get(id: Id, query?: Query | undefined): Promise<Usuarios> {
        const repository = database.getRepository(Usuarios);
        const usuario = await repository.findOne({ where: { id: id as any } });


        if (!usuario) {
            throw new NotFound("Usuario does not exist");
        }

        return usuario;
    }

    async update(id: Id, data: Usuarios, query?: Query | undefined): Promise<Usuarios> {
        const repository = database.getRepository(Usuarios);
        await repository.update(id, data);
        return this.get(id, query);
    }

    async remove(id: Id, query?: Query | undefined): Promise<Usuarios> {
        const repository = database.getRepository(Usuarios);
        const usuario = await this.get(id, query);
        await repository.delete(id);
        return usuario;
    }
    // ...
}

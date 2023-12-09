import { Router } from "express";
import { UsuariosController } from "../tasks/usuarios.controller";
import { UsuariosRepository } from "../tasks/usuarios.repository";


const router = Router();
const controller = new UsuariosController(
    new UsuariosRepository()
)

router.post("/usuarios", controller.create.bind(controller))

router.get("/usuarios", controller.list.bind(controller))

router.get("/usuarios/:usuarioId", controller.get.bind(controller))

router.put("/usuarios/:usuarioId", controller.update.bind(controller))

router.delete("/usuarios/:usuarioId", controller.remove.bind(controller))
export default router;
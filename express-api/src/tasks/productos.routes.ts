import { Router } from "express";
import { ProductosController } from "../tasks/productos.controller";
import { ProductosRepository } from "../tasks/productos.repository";

const router = Router();
const controller = new ProductosController(
    new ProductosRepository()
)

router.post("/productos", controller.create.bind(controller))

router.get("/productos", controller.list.bind(controller))

router.get("/productos/:productoId", controller.get.bind(controller))

router.put("/productos/:productoId", controller.update.bind(controller))

router.delete("/productos/:productoId", controller.remove.bind(controller))
export default router;
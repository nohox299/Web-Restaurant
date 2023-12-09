import { Router } from "express";
import { DetalleDeCompraController } from "./detalladocompra.controller";
import { DetalleDeCompraRepository } from "./detalladocompra.repository";

const router = Router();
const controller = new DetalleDeCompraController(
    new DetalleDeCompraRepository()
)

router.post("/detalledecompra", controller.create.bind(controller))

router.get("/detalledecompra", controller.list.bind(controller))

router.get("/detalledecompra/:detalleDeCompraId", controller.get.bind(controller))

router.put("/detalledecompra/:detalleDeCompraId", controller.update.bind(controller))

router.delete("/detalledecompra/:detalleDeCompraId", controller.remove.bind(controller))
export default router;
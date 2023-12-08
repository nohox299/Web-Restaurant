import { Router } from "express";
import { ComprasController } from "../tasks/compras.controller";
import { ComprasRepository } from "../tasks/compras.repository";


const router = Router();
const controller = new ComprasController(
    new ComprasRepository()
)

router.post("/compras", controller.create.bind(controller))

router.get("/compras", controller.list.bind(controller))

router.get("/compras/:compraId", controller.get.bind(controller))

router.put("/compras/:compraId", controller.update.bind(controller))

router.delete("/compras/:compraId", controller.remove.bind(controller))
export default router;
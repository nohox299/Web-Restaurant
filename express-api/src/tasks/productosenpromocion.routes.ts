import { Router } from "express";
import { ProductosEnPromocionController } from "../tasks/productoenpromocion.controller";
import { ProductosEnPromocionRepository } from "../tasks/productosenpromocion.repository";

const router = Router();
const controller = new ProductosEnPromocionController(
    new ProductosEnPromocionRepository()
)

router.post("/productosenpromocion", controller.create.bind(controller))

router.get("/productosenpromocion", controller.list.bind(controller))

router.get("/productosenpromocion/:productoEnPromocionId", controller.get.bind(controller))

router.put("/productosenpromocion/:productoEnPromocionId", controller.update.bind(controller))

router.delete("/productosenpromocion/:productoEnPromocionId", controller.remove.bind(controller))
export default router;
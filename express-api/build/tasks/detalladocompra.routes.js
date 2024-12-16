"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const detalladocompra_controller_1 = require("./detalladocompra.controller");
const detalladocompra_repository_1 = require("./detalladocompra.repository");
const router = (0, express_1.Router)();
const controller = new detalladocompra_controller_1.DetalleDeCompraController(new detalladocompra_repository_1.DetalleDeCompraRepository());
router.post("/detalledecompra", controller.create.bind(controller));
router.get("/detalledecompra", controller.list.bind(controller));
router.get("/detalledecompra/:detalleDeCompraId", controller.get.bind(controller));
router.put("/detalledecompra/:detalleDeCompraId", controller.update.bind(controller));
router.delete("/detalledecompra/:detalleDeCompraId", controller.remove.bind(controller));
exports.default = router;
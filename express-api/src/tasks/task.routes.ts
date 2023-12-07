import { Router } from "express";

import {TaskController} from "./task.controller"

const router = Router();
const controller = new TaskController

router.post("/tasks", controller.create)

router.get("/tasks", controller.list)

router.get("/tasks/:taskId", controller.get)

router.put("/tasks/:taskId", controller.update)

router.delete("/tasks/:taskId", controller.remove)
export default router;
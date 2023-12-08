import { Router } from "express";
import { TaskRespository } from "./task.repository";
import {TaskController} from "./task.controller"

const router = Router();
const controller = new TaskController(
    new TaskRespository()
)

router.post("/tasks", controller.create.bind(controller))

router.get("/tasks", controller.list.bind(controller))

router.get("/tasks/:taskId", controller.get.bind(controller))

router.put("/tasks/:taskId", controller.update.bind(controller))

router.delete("/tasks/:taskId", controller.remove.bind(controller))
export default router;
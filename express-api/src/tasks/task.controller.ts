import {Request, Response, NextFunction} from "express"
import { DatabaseRepository } from "../declarations"
import { Task } from "../entity/Task"

export class TaskController {
    constructor(private repository: DatabaseRepository<Task>){}

    async create(req: Request, res: Response, next: NextFunction): Promise<void>{
        try {
            const body = req.body;

            const task = await this.repository.create(body)
            
            res.status(200).json(task)
        } catch (error) {
            next(error);
        }
    }
    async list(req: Request, res: Response, next: NextFunction): Promise<void>{
        try {
            const tasks = await this.repository.list();
            res.status(200).json(tasks);
        } catch (error) {
            next(error);
        }
    }
    async get(req: Request, res: Response, next: NextFunction): Promise<void>{
        try {
            const {taskId} = req.params;
            const task = await this.repository.get(taskId)
            res.status(200).json(task)
        } catch (error) {
            next(error)
        }
    }
    async update(req: Request, res: Response, next: NextFunction): Promise<void>{
        try {
            const {taskId} = req.params;
            const body = req.body;

            const task = await this.repository.update(taskId, body)
            res.status(200).json(task)
        } catch (error) {
            next(error)
        }
    }
    async remove(req: Request, res: Response, next: NextFunction): Promise<void>{
        try {
            const {taskId} = req.params;
            const task = await this.repository.remove(taskId)
            res.status(200).json(task)
        } catch (error) {
            next(error)
        }
    }
}
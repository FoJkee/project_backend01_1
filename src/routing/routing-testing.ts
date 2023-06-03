import {Request, Response, Router} from "express";
import {query} from "express-validator";
import {blogs} from "../repositories/blogs-repositories";



export const testingRouter = Router()

testingRouter.delete('/all-data', query('person').notEmpty(), (req: Request, res: Response) => {
    blogs.splice(0)
    res.status(204).send(blogs)
})